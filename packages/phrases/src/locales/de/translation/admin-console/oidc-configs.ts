const oidc_configs = {
  sessions_card_title: 'Logto-Sitzungen',
  sessions_card_description:
    'Passen Sie die vom Logto-Autorisierungsserver gespeicherte Sitzungsrichtlinie an. Sie zeichnet den globalen Authentifizierungsstatus des Benutzers auf, um SSO zu ermöglichen und eine stille erneute Authentifizierung über Apps hinweg zu unterstützen.',
  session_max_ttl_in_days: 'Sitzung maximale Lebensdauer (TTL) in Tagen',
  session_max_ttl_in_days_tip:
    'Eine absolute Lebensdauergrenze ab Erstellung der Sitzung. Unabhängig von Aktivitäten endet die Sitzung, sobald diese feste Dauer abläuft.',
  cloud_private_key_rotation_notice:
    'In Logto Cloud wird die Rotation privater Schlüssel nach einer Kulanzzeit von 4 Stunden wirksam.',
  recent_authentication_card_title: 'Kürzliche Authentifizierung',
  recent_authentication_card_description:
    'Sensible Vorgänge, etwa das Ändern von Sicherheitseinstellungen im Account Center, erfordern eine kürzliche Anmeldung. Dieses Zeitfenster legt fest, wann eine Anmeldung für von Logto erzwungene Vorgänge noch als aktuell gilt.',
  maximum_authentication_age_in_minutes: 'Maximales Authentifizierungsalter in Minuten',
  maximum_authentication_age_in_minutes_tip:
    'Wie lange eine Anmeldung für sensible Vorgänge als aktuell gilt. Ein Client kann mit dem Parameter `max_age` weiterhin ein kürzeres Zeitfenster anfordern.',
};

export default Object.freeze(oidc_configs);
