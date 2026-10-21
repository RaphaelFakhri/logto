const oidc_configs = {
  sessions_card_title: 'Logto セッション',
  sessions_card_description:
    'Logto 認可サーバーに保存されるセッションポリシーをカスタマイズします。ユーザーのグローバル認証状態を記録し、SSO を有効化してアプリ間でのサイレント再認証を可能にします。',
  session_max_ttl_in_days: 'セッションの最大有効期間（TTL、日）',
  session_max_ttl_in_days_tip:
    'セッション作成時点からの絶対的な有効期限です。アクティビティの有無にかかわらず、この固定期間が経過するとセッションは終了します。',
  cloud_private_key_rotation_notice:
    'Logto Cloud では、プライベートキーのローテーションは 4 時間の猶予期間後に有効になります。',
  recent_authentication_card_title: '最近の認証',
  recent_authentication_card_description:
    'Account Center でのセキュリティ設定の変更など、機密性の高い操作には最近のサインインが必要です。この期間は、Logto が強制する操作において「最近のサインイン」とみなされる範囲を定義します。',
  maximum_authentication_age_in_minutes: '最大認証経過時間（分）',
  maximum_authentication_age_in_minutes_tip:
    'サインインが機密性の高い操作に対して十分新しいとみなされる期間です。クライアントは `max_age` パラメーターでより短い期間を要求できます。',
};

export default Object.freeze(oidc_configs);
