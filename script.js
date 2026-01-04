document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Dropdown Accordion
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('span');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }
    });

    // 2. Mobile Menu Hamburger Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 3. Global Click to Close
    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
        if(navLinks) navLinks.classList.remove('active');
    });
});