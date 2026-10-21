const oidc_configs = {
  sessions_card_title: 'Logto oturumları',
  sessions_card_description:
    'Logto yetkilendirme sunucusunda saklanan oturum politikasını özelleştirin. Kullanıcının genel kimlik doğrulama durumunu kaydeder; böylece SSO etkinleşir ve uygulamalar arasında sessiz yeniden kimlik doğrulama sağlanır.',
  session_max_ttl_in_days: 'Oturum için gün cinsinden azami yaşam süresi (TTL)',
  session_max_ttl_in_days_tip:
    'Oturum oluşturulduğu andan itibaren mutlak bir ömür sınırıdır. Etkinlikten bağımsız olarak bu sabit süre dolduğunda oturum sona erer.',
  cloud_private_key_rotation_notice:
    'Logto Cloud’da özel anahtar döndürme, 4 saatlik bekleme süresinden sonra geçerli olur.',
  recent_authentication_card_title: 'Son kimlik doğrulama',
  recent_authentication_card_description:
    "Account Center'da güvenlik ayarlarını değiştirme gibi hassas işlemler, kullanıcının yakın zamanda oturum açmış olmasını gerektirir. Bu pencere, Logto tarafından uygulanan işlemlerde hangi oturum açmanın yakın zamanda sayıldığını tanımlar.",
  maximum_authentication_age_in_minutes: 'Dakika cinsinden maksimum kimlik doğrulama yaşı',
  maximum_authentication_age_in_minutes_tip:
    'Bir oturum açmanın hassas işlemler için ne kadar süre yeterince yeni kaldığı. Bir istemci `max_age` parametresiyle daha kısa bir pencere isteyebilir.',
};

export default Object.freeze(oidc_configs);
