const oidc_configs = {
  sessions_card_title: 'Logto sessions',
  sessions_card_description:
    "Customize the session policy stored by the Logto authorization server. It records the user's global auth state to enable SSO and allow silent re-authentication across apps.",
  session_max_ttl_in_days: 'Session maximum time to live (TTL) in days',
  session_max_ttl_in_days_tip:
    'An absolute lifetime limit from session creation. Regardless of activity, the session ends when this fixed duration elapses.',
  cloud_private_key_rotation_notice:
    'In Logto Cloud, private key rotation takes effect after a 4-hour grace period.',
  recent_authentication_card_title: 'Recent authentication',
  recent_authentication_card_description:
    'Sensitive operations, such as changing security settings in Account Center, require the user to have signed in recently. This window defines what counts as a recent sign-in for Logto-enforced operations.',
  maximum_authentication_age_in_minutes: 'Maximum authentication age in minutes',
  maximum_authentication_age_in_minutes_tip:
    'How long a sign-in stays recent enough for sensitive operations. A client can still request a shorter window with the `max_age` parameter.',
};

export default Object.freeze(oidc_configs);
