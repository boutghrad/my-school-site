// تفعيل الأسئلة المتكررة
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
});

// نموذج الاتصال
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لتواصلكم! سنرد على استفساركم في أقرب وقت ممكن.');
    this.reset();
});

// نموذج النشرة الإخبارية
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لاشتراككم في نشرتنا الإخبارية!');
    this.reset();
});

// إضافة سنة حقوق النشر ديناميكياً
document.querySelector('.copyright p').innerText = 
    `جميع الحقوق محفوظة © مدرسة الأمل الابتدائية ${new Date().getFullYear()}`;
