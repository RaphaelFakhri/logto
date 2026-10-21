import {
  type OidcSessionConfig,
  type ResolvedAuthenticationPolicy,
  maximumAuthenticationAgeInSecondsRange,
  oidcSessionConfigGuard,
} from '@logto/schemas';
import { useEffect } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import { isDevFeaturesEnabled } from '@/consts/env';
import useApi, { type RequestError } from '@/hooks/use-api';
import { trySubmitSafe } from '@/utils/form';

type SessionConfigResponse = OidcSessionConfig & {
  ttl: number;
};

export type SessionConfigFormData = {
  ttlInDays?: number;
  /**
   * Keep the original value in seconds from the backend so we can avoid
   * accidental precision loss when the value is not day-aligned.
   */
  originalTtlInSeconds: number;
};

export type AuthenticationPolicyFormData = {
  maximumAuthenticationAgeInMinutes?: number;
  /**
   * Keep the original value in seconds from the backend so an untouched field never truncates a
   * value that is not minute-aligned.
   */
  originalMaximumAuthenticationAgeInSeconds: number;
};

export type OidcConfigFormData = {
  session: SessionConfigFormData;
  authenticationPolicy: AuthenticationPolicyFormData;
};

const secondsPerMinute = 60;
const secondsPerDay = 24 * 60 * 60;
const { minValue, maxValue } = oidcSessionConfigGuard.shape.ttl._def.innerType;

export const minSessionTtlInDays = Math.ceil((minValue ?? 1) / secondsPerDay);
export const maxSessionTtlInDays = Math.floor(
  (maxValue ?? Number.MAX_SAFE_INTEGER) / secondsPerDay
);

export const minMaximumAuthenticationAgeInMinutes = Math.ceil(
  maximumAuthenticationAgeInSecondsRange.min / secondsPerMinute
);
export const maxMaximumAuthenticationAgeInMinutes = Math.floor(
  maximumAuthenticationAgeInSecondsRange.max / secondsPerMinute
);

const sessionConfigFormDataParser = Object.freeze({
  fromSessionResponse: ({ ttl }: SessionConfigResponse): SessionConfigFormData => ({
    ttlInDays: Math.floor(ttl / secondsPerDay),
    originalTtlInSeconds: ttl,
  }),
  toSessionRequestPayload: (
    formData: SessionConfigFormData,
    isTtlFieldDirty: boolean
  ): SessionConfigResponse => ({
    ttl: isTtlFieldDirty
      ? Math.floor((formData.ttlInDays ?? 0) * secondsPerDay)
      : // Preserve the exact original seconds value when the day field has
        // not been edited. This prevents silent truncation of non-day TTLs.
        formData.originalTtlInSeconds,
  }),
});

const authenticationPolicyFormDataParser = Object.freeze({
  fromResponse: ({
    maximumAuthenticationAgeInSeconds,
  }: ResolvedAuthenticationPolicy): AuthenticationPolicyFormData => ({
    maximumAuthenticationAgeInMinutes: Math.floor(
      maximumAuthenticationAgeInSeconds / secondsPerMinute
    ),
    originalMaximumAuthenticationAgeInSeconds: maximumAuthenticationAgeInSeconds,
  }),
  toRequestPayload: (
    formData: AuthenticationPolicyFormData,
    isFieldDirty: boolean
  ): ResolvedAuthenticationPolicy => ({
    maximumAuthenticationAgeInSeconds: isFieldDirty
      ? Math.floor((formData.maximumAuthenticationAgeInMinutes ?? 0) * secondsPerMinute)
      : formData.originalMaximumAuthenticationAgeInSeconds,
  }),
});

/**
 * The OIDC configuration form of the tenant: the session policy, the recent-authentication window
 * that Logto enforces for sensitive operations, and the signing keys (managed in their own card).
 */
const useOidcConfigsForm = (formMethods: UseFormReturn<OidcConfigFormData>) => {
  const api = useApi();
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { data, error, mutate } = useSWR<SessionConfigResponse, RequestError>(
    'api/configs/oidc/session'
  );
  // DEV: OIDC step-up authentication. The authentication policy is only served (and enforced)
  // while the dev feature is on, so its card and request are gated together.
  const {
    data: authenticationPolicy,
    error: authenticationPolicyError,
    mutate: mutateAuthenticationPolicy,
  } = useSWR<ResolvedAuthenticationPolicy, RequestError>(
    isDevFeaturesEnabled ? 'api/configs/authentication-policy' : null
  );

  const { resetField, handleSubmit, formState } = formMethods;

  useEffect(() => {
    if (data) {
      // Do not overwrite in-progress edits during SWR revalidation.
      if (formState.isDirty) {
        return;
      }

      resetField('session', {
        defaultValue: sessionConfigFormDataParser.fromSessionResponse(data),
      });
    }
  }, [data, formState.isDirty, resetField]);

  useEffect(() => {
    if (authenticationPolicy) {
      if (formState.isDirty) {
        return;
      }

      resetField('authenticationPolicy', {
        defaultValue: authenticationPolicyFormDataParser.fromResponse(authenticationPolicy),
      });
    }
  }, [authenticationPolicy, formState.isDirty, resetField]);

  const onSubmit = handleSubmit(
    trySubmitSafe(async (formData) => {
      if (formState.isSubmitting) {
        return;
      }

      if (formState.dirtyFields.session) {
        const updatedSession = await api
          .patch('api/configs/oidc/session', {
            json: sessionConfigFormDataParser.toSessionRequestPayload(
              formData.session,
              Boolean(formState.dirtyFields.session.ttlInDays)
            ),
          })
          .json<SessionConfigResponse>();

        resetField('session', {
          defaultValue: sessionConfigFormDataParser.fromSessionResponse(updatedSession),
        });
        void mutate(updatedSession);
      }

      if (isDevFeaturesEnabled && formState.dirtyFields.authenticationPolicy) {
        const updatedAuthenticationPolicy = await api
          .patch('api/configs/authentication-policy', {
            json: authenticationPolicyFormDataParser.toRequestPayload(
              formData.authenticationPolicy,
              Boolean(formState.dirtyFields.authenticationPolicy.maximumAuthenticationAgeInMinutes)
            ),
          })
          .json<ResolvedAuthenticationPolicy>();

        resetField('authenticationPolicy', {
          defaultValue: authenticationPolicyFormDataParser.fromResponse(
            updatedAuthenticationPolicy
          ),
        });
        void mutateAuthenticationPolicy(updatedAuthenticationPolicy, { revalidate: false });
      }

      toast.success(t('general.saved'));
    })
  );

  return {
    sessionErrorMessage: error?.body?.message ?? error?.message,
    authenticationPolicyErrorMessage:
      authenticationPolicyError?.body?.message ?? authenticationPolicyError?.message,
    onSubmit,
  };
};

export default useOidcConfigsForm;
