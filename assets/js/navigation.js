// Navigation related functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.header__nav-item a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 60; // Adjust this value based on your header height
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    });

    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const nav = document.querySelector('.header__nav');

    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || mobileToggle.contains(event.target);
        
        if (!isClickInside && nav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}); 