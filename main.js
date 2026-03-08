document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme logic
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Optional: Form submission handling feedback
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', () => {
            const btn = form.querySelector('.submit-btn');
            btn.textContent = '보내는 중...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
        });
    }
});
