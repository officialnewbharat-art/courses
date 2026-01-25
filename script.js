document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // 1. DROPDOWN LOGIC (Desktop & Mobile Accordion)
    // ==============================================
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('span');
        
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });

                dropdown.classList.toggle('active');
            });
        }
    });

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
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

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

    // ==============================================
    // 3. COURSE GRID REVEAL (View More Logic)
    // ==============================================
    const viewMoreBtn = document.getElementById('view-more-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    if (viewMoreBtn && courseCards.length > 0) {
        function updateCourseVisibility() {
            const isMobile = window.innerWidth <= 768;
            // Desktop: Show 3 (1 row), Mobile: Show 2 (2 rows because of 1-col layout)
            const initialLimit = isMobile ? 2 : 3;

            courseCards.forEach((card, index) => {
                if (index < initialLimit) {
                    card.classList.remove('hidden-card');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden-card');
                    card.style.display = 'none';
                }
            });

            // Agar total cards limit se kam hain toh button hide kardo
            if (courseCards.length <= initialLimit) {
                viewMoreBtn.style.display = 'none';
            } else {
                viewMoreBtn.style.display = 'inline-block';
            }
        }

        // Initial set on load
        updateCourseVisibility();

        // View More Button Click
        viewMoreBtn.addEventListener('click', function() {
            const isMobile = window.innerWidth <= 768;
            const revealCount = isMobile ? 2 : 3; // Har click pe mobile pe 2 cards aur desktop pe 3 cards reveal honge
            
            let hiddenCards = document.querySelectorAll('.course-card.hidden-card');
            
            for (let i = 0; i < revealCount; i++) {
                if (hiddenCards[i]) {
                    hiddenCards[i].style.display = 'block';
                    hiddenCards[i].classList.remove('hidden-card');
                    // Chota sa animation effect
                    hiddenCards[i].style.animation = 'slideUp 0.4s ease forwards';
                }
            }

            // Agar saare cards dikh gaye toh button hide kardo
            if (document.querySelectorAll('.course-card.hidden-card').length === 0) {
                viewMoreBtn.style.display = 'none';
            }
        });

        // Window resize handle karein taki layout switch ho sake
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateCourseVisibility, 200);
        });
    }
});
