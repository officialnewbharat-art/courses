document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // 1. DROPDOWN LOGIC (Desktop & Mobile Accordion)
    // ==============================================
    // Logic extracted from main site to handle "More" menu
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('span');
        
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent closing immediately
                
                // Close other open dropdowns for a cleaner accordion feel
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close all dropdowns when clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });


    // ==============================================
    // 2. MOBILE MENU TOGGLE (Hamburger)
    // ==============================================
    // Logic extracted from main site for responsive navigation
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            // Toggle Icon between Hamburger (fa-bars) and Close (fa-times)
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
