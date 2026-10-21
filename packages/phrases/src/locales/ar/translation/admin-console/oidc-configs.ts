const oidc_configs = {
  sessions_card_title: 'جلسات Logto',
  sessions_card_description:
    'خصّص سياسة الجلسات المخزنة في خادم تفويض Logto. تسجّل حالة المصادقة العامة للمستخدم لتمكين تسجيل الدخول الأحادي (SSO) والسماح بإعادة المصادقة الصامتة عبر التطبيقات.',
  session_max_ttl_in_days: 'الحد الأقصى لمدة صلاحية الجلسة (TTL) بالأيام',
  session_max_ttl_in_days_tip:
    'حد زمني مطلق لعمر الجلسة يبدأ من وقت إنشائها. بغض النظر عن النشاط، تنتهي الجلسة عند انقضاء هذه المدة الثابتة.',
  cloud_private_key_rotation_notice:
    'في Logto Cloud، تصبح عملية تدوير المفتاح الخاص فعالة بعد فترة سماح مدتها 4 ساعات.',
  recent_authentication_card_title: 'المصادقة الحديثة',
  recent_authentication_card_description:
    'تتطلب العمليات الحساسة، مثل تغيير إعدادات الأمان في Account Center، أن يكون المستخدم قد سجل الدخول مؤخرًا. يحدد هذا النطاق الزمني ما يُعد تسجيل دخول حديثًا للعمليات التي تفرضها Logto.',
  maximum_authentication_age_in_minutes: 'الحد الأقصى لعمر المصادقة بالدقائق',
  maximum_authentication_age_in_minutes_tip:
    'المدة التي يظل فيها تسجيل الدخول حديثًا بدرجة كافية للعمليات الحساسة. يمكن للعميل طلب نطاق زمني أقصر باستخدام المعامل `max_age`.',
};

export default Object.freeze(oidc_configs);
