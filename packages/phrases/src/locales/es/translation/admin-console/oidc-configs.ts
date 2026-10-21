const oidc_configs = {
  sessions_card_title: 'Sesiones de Logto',
  sessions_card_description:
    'Personalice la política de sesión almacenada por el servidor de autorización de Logto. Registra el estado global de autenticación del usuario para habilitar SSO y permitir la reautenticación silenciosa entre aplicaciones.',
  session_max_ttl_in_days: 'Tiempo de vida máximo de la sesión (TTL) en días',
  session_max_ttl_in_days_tip:
    'Un límite de vida útil absoluto desde la creación de la sesión. Independientemente de la actividad, la sesión termina cuando transcurre esta duración fija.',
  cloud_private_key_rotation_notice:
    'En Logto Cloud, la rotación de claves privadas surte efecto después de un período de gracia de 4 horas.',
  recent_authentication_card_title: 'Autenticación reciente',
  recent_authentication_card_description:
    'Las operaciones sensibles, como cambiar la configuración de seguridad en Account Center, requieren que el usuario haya iniciado sesión recientemente. Este intervalo define qué se considera un inicio de sesión reciente para las operaciones impuestas por Logto.',
  maximum_authentication_age_in_minutes: 'Antigüedad máxima de autenticación en minutos',
  maximum_authentication_age_in_minutes_tip:
    'Cuánto tiempo un inicio de sesión sigue siendo lo bastante reciente para operaciones sensibles. Un cliente aún puede solicitar un intervalo más corto con el parámetro `max_age`.',
};

export default Object.freeze(oidc_configs);
