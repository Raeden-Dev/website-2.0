    // Portfolio
    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const portfolioImages = document.querySelectorAll('.portfolio-item img');
        const imageViewer = document.getElementById('imageViewer');
        const fullImage = document.getElementById('fullImage');
        const closeBtn = document.querySelector('.close-btn');

        // Initial filter
        filterItems('pixel');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter portfolio items
                filterItems(filter);
            });
        });

        function filterItems(filter) {
            // Filter portfolio items
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.style.display = item.classList.contains(filter) ? 'block' : 'none';
            });
            
            // Filter category buttons
            document.querySelectorAll('.category-link').forEach(link => {
                link.style.display = link.classList.contains(filter) ? 'inline-block' : 'none';
            });
        }

        portfolioImages.forEach(item => {
            item.addEventListener('click', () => {
                fullImage.src = item.src;
                imageViewer.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            imageViewer.style.display = 'none';
        });

        imageViewer.addEventListener('click', (e) => {
            if (e.target === imageViewer) {
                imageViewer.style.display = 'none';
            }
        });
    });

// Loading Screen
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
    
        setTimeout(function() {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1300);
    });
;

// Navigation

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.getElementById(button.dataset.section);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Update active state
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Update active button on scroll
    window.addEventListener('scroll', () => {
        const sections = ['background-art', 'portfolio', 'about', 'experience-section', 'contact'];
        let currentSection = '';
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
                currentSection = section;
            }
        });
        
        navButtons.forEach(button => {
            if (button.dataset.section === currentSection) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });
});
