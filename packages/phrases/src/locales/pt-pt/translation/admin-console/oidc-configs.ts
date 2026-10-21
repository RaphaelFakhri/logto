const oidc_configs = {
  sessions_card_title: 'Sessões do Logto',
  sessions_card_description:
    'Personalize a política de sessão armazenada pelo servidor de autorização do Logto. Regista o estado global de autenticação do utilizador para ativar SSO e permitir reautenticação silenciosa entre aplicações.',
  session_max_ttl_in_days: 'Tempo de vida máximo da sessão (TTL) em dias',
  session_max_ttl_in_days_tip:
    'Um limite absoluto de duração desde a criação da sessão. Independentemente da atividade, a sessão termina quando esta duração fixa expira.',
  cloud_private_key_rotation_notice:
    'No Logto Cloud, a rotação de chaves privadas entra em vigor após um período de carência de 4 horas.',
  recent_authentication_card_title: 'Autenticação recente',
  recent_authentication_card_description:
    'As operações sensíveis, como alterar as definições de segurança no Account Center, exigem que o utilizador tenha iniciado sessão recentemente. Esta janela define o que conta como início de sessão recente para as operações impostas pelo Logto.',
  maximum_authentication_age_in_minutes: 'Idade máxima de autenticação em minutos',
  maximum_authentication_age_in_minutes_tip:
    'Durante quanto tempo um início de sessão continua suficientemente recente para operações sensíveis. Um cliente pode ainda pedir uma janela mais curta com o parâmetro `max_age`.',
};

export default Object.freeze(oidc_configs);
