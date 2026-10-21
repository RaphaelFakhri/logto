const oidc_configs = {
  sessions_card_title: 'Sesje Logto',
  sessions_card_description:
    'Dostosuj politykę sesji przechowywaną przez serwer autoryzacji Logto. Rejestruje ona globalny stan uwierzytelnienia użytkownika, aby umożliwić SSO i cichą ponowną autoryzację między aplikacjami.',
  session_max_ttl_in_days: 'Maksymalny czas życia sesji (TTL) w dniach',
  session_max_ttl_in_days_tip:
    'Bezwzględny limit czasu życia liczony od utworzenia sesji. Niezależnie od aktywności sesja kończy się po upływie tego stałego czasu.',
  cloud_private_key_rotation_notice:
    'W Logto Cloud rotacja klucza prywatnego zaczyna obowiązywać po 4-godzinnym okresie karencji.',
  recent_authentication_card_title: 'Ostatnie uwierzytelnienie',
  recent_authentication_card_description:
    'Wrażliwe operacje, takie jak zmiana ustawień zabezpieczeń w Account Center, wymagają niedawnego zalogowania. To okno określa, co jest uznawane za niedawne logowanie w operacjach egzekwowanych przez Logto.',
  maximum_authentication_age_in_minutes: 'Maksymalny wiek uwierzytelnienia w minutach',
  maximum_authentication_age_in_minutes_tip:
    'Jak długo logowanie pozostaje wystarczająco świeże dla wrażliwych operacji. Klient nadal może zażądać krótszego okna za pomocą parametru `max_age`.',
};

export default Object.freeze(oidc_configs);
