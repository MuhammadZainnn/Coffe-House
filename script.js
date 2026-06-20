/* ============================================================
   CUSTOM JAVASCRIPT - Coffee House (Common for all pages)
   ============================================================ */

// ============================================================
// 1. NAVBAR ACTIVE LINK (Highlight current page)
// ============================================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// ============================================================
// 2. CONTACT FORM VALIDATION (Contact Page Only)
// ============================================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert('⚠️ Please fill all fields!');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('⚠️ Please enter a valid email address!');
            return;
        }

        alert('✅ Thank you! Your message has been sent successfully.');
        this.reset();
    });
}

// ============================================================
// 3. SMOOTH SCROLL FOR NAV LINKS (Home Page Only)
// ============================================================
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================================
// 4. NAVBAR TOGGLER - Close on link click (Mobile)
// ============================================================
const navToggler = document.querySelector('.navbar-toggler');
const navCollapse = document.querySelector('.navbar-collapse');

if (navToggler && navCollapse) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                navToggler.click();
            }
        });
    });
}

// ============================================================
// 5. CONSOLE WELCOME MESSAGE
// ============================================================
console.log('%c☕ Coffee House', 'font-size: 32px; font-weight: bold; color: #d4a373;');
console.log('%cPremium Coffee Experience', 'font-size: 16px; color: #8a7a6a;');
console.log('%cMade with ❤️ by Muhammad Farhan', 'font-size: 14px; color: #6a5a4a;');