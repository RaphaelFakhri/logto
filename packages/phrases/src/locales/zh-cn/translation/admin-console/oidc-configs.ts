const oidc_configs = {
  sessions_card_title: 'Logto 会话',
  sessions_card_description:
    '自定义由 Logto 授权服务器存储的会话策略。它会记录用户的全局认证状态，以启用 SSO 并支持跨应用静默重新认证。',
  session_max_ttl_in_days: '会话最大生存时间（TTL，天）',
  session_max_ttl_in_days_tip:
    '从会话创建时开始计算的绝对生命周期上限。无论是否有活动，会话都会在该固定时长到期后结束。',
  cloud_private_key_rotation_notice: '在 Logto Cloud 中，私钥轮换会在 4 小时的宽限期后生效。',
  recent_authentication_card_title: '最近一次身份验证',
  recent_authentication_card_description:
    '敏感操作（例如在 Account Center 中修改安全设置）要求用户最近登录过。此时间窗口定义了在 Logto 强制执行的操作中，多久以内的登录仍被视为最近登录。',
  maximum_authentication_age_in_minutes: '最大身份验证时长（分钟）',
  maximum_authentication_age_in_minutes_tip:
    '登录在多长时间内仍被视为对敏感操作足够新。客户端仍可通过 `max_age` 参数请求更短的时间窗口。',
};

export default Object.freeze(oidc_configs);
