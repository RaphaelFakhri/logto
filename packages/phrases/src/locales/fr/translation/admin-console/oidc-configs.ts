const oidc_configs = {
  sessions_card_title: 'Sessions Logto',
  sessions_card_description:
    "Personnalisez la politique de session stockée par le serveur d'autorisation Logto. Elle enregistre l'état d'authentification global de l'utilisateur afin d'activer le SSO et de permettre une réauthentification silencieuse entre applications.",
  session_max_ttl_in_days: 'Durée de vie maximale de la session (TTL) en jours',
  session_max_ttl_in_days_tip:
    "Une limite de durée de vie absolue à partir de la création de la session. Quelle que soit l'activité, la session se termine à l'expiration de cette durée fixe.",
  cloud_private_key_rotation_notice:
    'Dans Logto Cloud, la rotation des clés privées prend effet après une période de grâce de 4 heures.',
  recent_authentication_card_title: 'Authentification récente',
  recent_authentication_card_description:
    'Les opérations sensibles, comme la modification des paramètres de sécurité dans Account Center, exigent une connexion récente. Cette fenêtre définit ce qui compte comme une connexion récente pour les opérations appliquées par Logto.',
  maximum_authentication_age_in_minutes: "Âge maximal d'authentification en minutes",
  maximum_authentication_age_in_minutes_tip:
    'Durée pendant laquelle une connexion reste suffisamment récente pour les opérations sensibles. Un client peut toujours demander une fenêtre plus courte avec le paramètre `max_age`.',
};

export default Object.freeze(oidc_configs);
