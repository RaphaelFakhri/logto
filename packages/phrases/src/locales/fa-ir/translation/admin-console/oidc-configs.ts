const oidc_configs = {
  sessions_card_title: 'نشست‌های Logto',
  sessions_card_description:
    'سیاست نشست ذخیره‌شده توسط سرور مجوز Logto را سفارشی کنید. این سیاست وضعیت احراز هویت سراسری کاربر را ثبت می‌کند تا SSO را فعال و احراز هویت مجدد بی‌صدا در برنامه‌ها را ممکن سازد.',
  session_max_ttl_in_days: 'حداکثر زمان زنده ماندن نشست (TTL) به روز',
  session_max_ttl_in_days_tip:
    'محدودیت مطلق عمر از زمان ایجاد نشست. صرف‌نظر از فعالیت، نشست پس از گذشت این مدت ثابت پایان می‌یابد.',
  cloud_private_key_rotation_notice:
    'در Logto Cloud، چرخش کلید خصوصی پس از دوره مهلت ۴ ساعته اعمال می‌شود.',
  recent_authentication_card_title: 'احراز هویت اخیر',
  recent_authentication_card_description:
    'عملیات حساس، مانند تغییر تنظیمات امنیتی در Account Center، نیازمند ورود اخیر کاربر است. این بازه مشخص می‌کند که چه ورودی برای عملیات اعمال‌شده توسط Logto «اخیر» محسوب می‌شود.',
  maximum_authentication_age_in_minutes: 'حداکثر عمر احراز هویت بر حسب دقیقه',
  maximum_authentication_age_in_minutes_tip:
    'مدت زمانی که یک ورود برای عملیات حساس به‌اندازه کافی جدید باقی می‌ماند. کلاینت همچنان می‌تواند با پارامتر `max_age` بازه کوتاه‌تری درخواست کند.',
};

export default Object.freeze(oidc_configs);
