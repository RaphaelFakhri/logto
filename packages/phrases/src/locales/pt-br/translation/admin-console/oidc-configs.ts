const oidc_configs = {
  sessions_card_title: 'Sessões do Logto',
  sessions_card_description:
    'Personalize a política de sessão armazenada pelo servidor de autorização do Logto. Ela registra o estado global de autenticação do usuário para habilitar SSO e permitir reautenticação silenciosa entre aplicativos.',
  session_max_ttl_in_days: 'Tempo de vida máximo da sessão (TTL) em dias',
  session_max_ttl_in_days_tip:
    'Um limite absoluto de duração a partir da criação da sessão. Independentemente da atividade, a sessão termina quando essa duração fixa expira.',
  cloud_private_key_rotation_notice:
    'No Logto Cloud, a rotação de chaves privadas entra em vigor após um período de carência de 4 horas.',
  recent_authentication_card_title: 'Autenticação recente',
  recent_authentication_card_description:
    'Operações sensíveis, como alterar configurações de segurança no Account Center, exigem que o usuário tenha feito login recentemente. Esta janela define o que conta como login recente para operações impostas pelo Logto.',
  maximum_authentication_age_in_minutes: 'Idade máxima de autenticação em minutos',
  maximum_authentication_age_in_minutes_tip:
    'Por quanto tempo um login continua recente o suficiente para operações sensíveis. Um cliente ainda pode solicitar uma janela menor com o parâmetro `max_age`.',
};

export default Object.freeze(oidc_configs);
