const oidc_configs = {
  sessions_card_title: 'Sessioni Logto',
  sessions_card_description:
    "Personalizza la policy di sessione archiviata dal server di autorizzazione Logto. Registra lo stato di autenticazione globale dell'utente per abilitare l'SSO e consentire la riautenticazione silenziosa tra le app.",
  session_max_ttl_in_days: 'Durata massima della sessione (TTL) in giorni',
  session_max_ttl_in_days_tip:
    "Un limite assoluto di durata dalla creazione della sessione. Indipendentemente dall'attività, la sessione termina allo scadere di questa durata fissa.",
  cloud_private_key_rotation_notice:
    'In Logto Cloud, la rotazione delle chiavi private ha effetto dopo un periodo di grazia di 4 ore.',
  recent_authentication_card_title: 'Autenticazione recente',
  recent_authentication_card_description:
    'Le operazioni sensibili, come la modifica delle impostazioni di sicurezza in Account Center, richiedono un accesso recente. Questa finestra definisce cosa conta come accesso recente per le operazioni applicate da Logto.',
  maximum_authentication_age_in_minutes: "Età massima dell'autenticazione in minuti",
  maximum_authentication_age_in_minutes_tip:
    'Per quanto tempo un accesso resta sufficientemente recente per le operazioni sensibili. Un client può comunque richiedere una finestra più breve con il parametro `max_age`.',
};

export default Object.freeze(oidc_configs);
