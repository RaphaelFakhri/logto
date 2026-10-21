import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import DetailsForm from '@/components/DetailsForm';
import { isCloud, isDevFeaturesEnabled } from '@/consts/env';
import InlineNotification from '@/ds-components/InlineNotification';
import useUserPreferences from '@/hooks/use-user-preferences';

import RecentAuthenticationFormCard from './RecentAuthenticationFormCard';
import SessionsFormCard from './SessionsFormCard';
import SigningKeysFormCard from './SigningKeysFormCard';
import styles from './index.module.scss';
import useOidcConfigsForm, { type OidcConfigFormData } from './use-oidc-configs-form';

function OidcConfigs() {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const {
    data: userPreferences,
    isLoading: isLoadingUserPreferences,
    update,
  } = useUserPreferences();
  const cloudOidcPrivateKeyRotationNoticeAcknowledged = Boolean(
    userPreferences.cloudOidcPrivateKeyRotationNoticeAcknowledged
  );
  const formMethods = useForm<OidcConfigFormData>();
  const { sessionErrorMessage, authenticationPolicyErrorMessage, onSubmit } =
    useOidcConfigsForm(formMethods);

  const {
    reset,
    formState: { isDirty, isSubmitting },
  } = formMethods;

  return (
    <div className={styles.container}>
      {isCloud && !isLoadingUserPreferences && !cloudOidcPrivateKeyRotationNoticeAcknowledged && (
        <InlineNotification
          action="general.got_it"
          onClick={() => {
            void update({ cloudOidcPrivateKeyRotationNoticeAcknowledged: true });
          }}
        >
          {t('oidc_configs.cloud_private_key_rotation_notice')}
        </InlineNotification>
      )}
      <FormProvider {...formMethods}>
        <DetailsForm
          isDirty={isDirty}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          onDiscard={reset}
        >
          <SessionsFormCard errorMessage={sessionErrorMessage} />
          {/* DEV: OIDC step-up authentication. The window is only enforced while the feature is
              on, so the card is hidden with it. */}
          {isDevFeaturesEnabled && (
            <RecentAuthenticationFormCard errorMessage={authenticationPolicyErrorMessage} />
          )}
          <SigningKeysFormCard />
        </DetailsForm>
      </FormProvider>
    </div>
  );
}

export default OidcConfigs;
