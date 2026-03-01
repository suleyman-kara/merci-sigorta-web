(function () {
    'use strict';

    /* ── MOBILE NAV ── */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    function openNav() {
        hamburger.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    hamburger?.addEventListener('click', () =>
        navMenu.classList.contains('open') ? closeNav() : openNav()
    );
    overlay?.addEventListener('click', closeNav);
    document.addEventListener('keydown', e => e.key === 'Escape' && closeNav());
    document.querySelectorAll('#nav-menu a').forEach(a => a.addEventListener('click', closeNav));

    /* ── STICKY NAV ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () =>
        navbar.classList.toggle('scrolled', window.scrollY > 60),
        { passive: true }
    );

    /* ── SCROLL ANIMATIONS ── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));

})();
