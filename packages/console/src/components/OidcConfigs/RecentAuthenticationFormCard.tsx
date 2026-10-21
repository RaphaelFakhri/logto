import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormCard from '@/components/FormCard';
import FormField from '@/ds-components/FormField';
import TextInput from '@/ds-components/TextInput';

import {
  maxMaximumAuthenticationAgeInMinutes,
  minMaximumAuthenticationAgeInMinutes,
  type AuthenticationPolicyFormData,
} from './use-oidc-configs-form';

type Props = {
  readonly errorMessage?: string;
};

/**
 * The tenant's recent-authentication window: how long a sign-in stays recent enough for
 * Logto-enforced sensitive operations, regardless of the client. A client can still request a
 * shorter window with `max_age`.
 */
function RecentAuthenticationFormCard({ errorMessage }: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const {
    register,
    formState: { errors },
  } = useFormContext<{ authenticationPolicy: AuthenticationPolicyFormData }>();

  const maximumAuthenticationAgeErrorMessage = t('errors.number_should_be_between_inclusive', {
    min: minMaximumAuthenticationAgeInMinutes,
    max: maxMaximumAuthenticationAgeInMinutes,
  });

  return (
    <FormCard
      title="oidc_configs.recent_authentication_card_title"
      description="oidc_configs.recent_authentication_card_description"
    >
      <FormField
        title="oidc_configs.maximum_authentication_age_in_minutes"
        tip={t('oidc_configs.maximum_authentication_age_in_minutes_tip')}
      >
        <TextInput
          {...register('authenticationPolicy.maximumAuthenticationAgeInMinutes', {
            min: {
              value: minMaximumAuthenticationAgeInMinutes,
              message: maximumAuthenticationAgeErrorMessage,
            },
            max: {
              value: maxMaximumAuthenticationAgeInMinutes,
              message: maximumAuthenticationAgeErrorMessage,
            },
            valueAsNumber: true,
            validate: (value) =>
              value === undefined || Number.isInteger(value) || t('errors.should_be_an_integer'),
          })}
          placeholder="10"
          error={
            errors.authenticationPolicy?.maximumAuthenticationAgeInMinutes?.message ?? errorMessage
          }
        />
      </FormField>
    </FormCard>
  );
}

export default RecentAuthenticationFormCard;
