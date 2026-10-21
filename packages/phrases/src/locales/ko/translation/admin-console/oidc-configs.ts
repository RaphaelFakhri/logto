const oidc_configs = {
  sessions_card_title: 'Logto 세션',
  sessions_card_description:
    'Logto 인증 서버에 저장되는 세션 정책을 사용자 지정합니다. 사용자 전역 인증 상태를 기록하여 SSO를 활성화하고 앱 간 무중단 재인증을 허용합니다.',
  session_max_ttl_in_days: '세션 최대 수명(TTL) (일)',
  session_max_ttl_in_days_tip:
    '세션 생성 시점부터 적용되는 절대 만료 한도입니다. 활동 여부와 관계없이 이 고정 기간이 지나면 세션이 종료됩니다.',
  cloud_private_key_rotation_notice:
    'Logto Cloud에서는 개인 키 회전이 4시간의 유예 기간 후에 적용됩니다.',
  recent_authentication_card_title: '최근 인증',
  recent_authentication_card_description:
    'Account Center의 보안 설정 변경과 같은 민감한 작업에는 최근 로그인이 필요합니다. 이 기간은 Logto가 강제하는 작업에서 최근 로그인으로 간주되는 범위를 정의합니다.',
  maximum_authentication_age_in_minutes: '최대 인증 경과 시간(분)',
  maximum_authentication_age_in_minutes_tip:
    '로그인이 민감한 작업에 충분히 최신으로 유지되는 기간입니다. 클라이언트는 `max_age` 파라미터로 더 짧은 기간을 요청할 수 있습니다.',
};

export default Object.freeze(oidc_configs);
