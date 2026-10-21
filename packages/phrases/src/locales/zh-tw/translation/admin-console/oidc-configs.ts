const oidc_configs = {
  sessions_card_title: 'Logto 工作階段',
  sessions_card_description:
    '自訂由 Logto 授權伺服器儲存的工作階段政策。它會記錄使用者的全域驗證狀態，以啟用 SSO 並允許跨應用程式的靜默重新驗證。',
  session_max_ttl_in_days: '工作階段最長存活時間（TTL，以天計）',
  session_max_ttl_in_days_tip:
    '自建立工作階段起算的絕對存活期限上限。無論是否有活動，工作階段都會在此固定時長到期後結束。',
  cloud_private_key_rotation_notice: '在 Logto Cloud 中，私鑰輪換會在 4 小時的寬限期後生效。',
  recent_authentication_card_title: '最近一次身分驗證',
  recent_authentication_card_description:
    '敏感操作（例如在 Account Center 中變更安全性設定）要求使用者最近登入過。此時間視窗定義了在 Logto 強制執行的操作中，多久以內的登入仍視為最近登入。',
  maximum_authentication_age_in_minutes: '最大身分驗證時長（分鐘）',
  maximum_authentication_age_in_minutes_tip:
    '登入在多長時間內仍視為對敏感操作足夠新。用戶端仍可透過 `max_age` 參數要求更短的時間視窗。',
};

export default Object.freeze(oidc_configs);
