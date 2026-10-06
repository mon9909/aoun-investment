function toggleLanguage() {
    const body = document.body;
    const btn = document.querySelector('.lang-switch');
    
    // قلب اتجاه الصفحة لتفعيل اللغة المقابلة بتأثير ناعم
    if (body.getAttribute('dir') === 'rtl') {
        body.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en');
    } else {
        body.setAttribute('dir', 'rtl');
        body.setAttribute('lang', 'ar');
    }
}
