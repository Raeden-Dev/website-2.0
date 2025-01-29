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

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    let isOpen = false;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = !isOpen;
        
        if(isOpen) {
            sidebar.style.transform = 'translateX(0)';
            hamburger.classList.add('active');
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            hamburger.classList.remove('active');
        }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if(isOpen && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.style.transform = 'translateX(-100%)';
            hamburger.classList.remove('active');
            isOpen = false;
        }
    });
});

// Raid Studio
function openPopup(projectId) {
    const popup = document.getElementById('projectPopup');
    const discordButton = document.querySelector('.discord-button');
    const title = document.getElementById('popupTitle');
    const description = document.getElementById('popupDescription');
    const gallery = document.getElementById('popupGallery');
    
    // Check if it's mobile device
    if (window.innerWidth <= 768) {
        discordButton.style.display = 'none';
    }
    
    // Project data (you can store this in a separate file)
    const projectData = {
        project1: {
            title: "Project 1",
            description: "Detailed description of project 1",
            images: [
                "assets/gallery/swords_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png"
            ]
        },
        project2: {
            title: "Project 2", 
            description: "Detailed description of project 2",
            images: [
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png"
            ]
        },
        project3: {
            title: "Project 3",
            description: "Detailed description of project 3",
            images: [
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png"
            ]
        },
        project4: {
            title: "Project 4",
            description: "Detailed description of project 4",
            images: [
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/mob_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png",
                "assets/gallery/swords_full.png"
            ]
        },
        
        // Continue for other projects using the same assets in different combinations
    };

    // Update popup content
    const project = projectData[projectId];
    title.textContent = project.title;
    description.textContent = project.description;
    
    // Clear and populate gallery
    gallery.innerHTML = '';
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        gallery.appendChild(img);
    });

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('projectPopup');
    const discordButton = document.querySelector('.discord-button');
    
    // Check if it's mobile device
    if (window.innerWidth <= 768) {
        discordButton.style.display = 'block';
    }
    
    popup.style.display = 'none';
}
// Add this event listener
window.addEventListener('click', function(event) {
    const popup = document.getElementById('projectPopup');
    if (event.target === popup) {
        closePopup();
    }
});


// Discord
function copyDiscord() {
    const discordId = "raeden";
    
    // Create temporary input for mobile
    const tempInput = document.createElement("input");
    tempInput.value = discordId;
    document.body.appendChild(tempInput);
    
    // Select and copy
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    
    // Clean up
    document.body.removeChild(tempInput);
    
    // Show feedback
    const tooltip = document.querySelector('.discord-tooltip');
    tooltip.textContent = "Copied!";
    setTimeout(() => {
        tooltip.textContent = "Click to copy Discord";
    }, 2000);
}


// Mobile Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateSlider() {
        const width = sliderWrapper.clientWidth;
        sliderWrapper.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const images = sliderWrapper.querySelectorAll('img');
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        const images = sliderWrapper.querySelectorAll('img');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const images = sliderWrapper.querySelectorAll('img');
    let currentIndex = 0;

    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Start auto-sliding every 3 seconds
    setInterval(autoSlide, 3500);
});


// Mobile Portfolio Swipe Functionality
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchend', () => {
        const swipeThreshold = 50; // Minimum swipe distance
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe left - show next image
                document.querySelector('.next-btn').click();
            } else {
                // Swipe right - show previous image
                document.querySelector('.prev-btn').click();
            }
        }
    });
});

// Desktop Portfolio Slider
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainPreviewImage');
    const thumbsTrack = document.querySelector('.thumbnails-track');
    const thumbs = document.querySelectorAll('.thumb');
    const prevBtn = document.querySelector('.thumb-nav-btn.prev');
    const nextBtn = document.querySelector('.thumb-nav-btn.next');
    
    let currentIndex = 0;
    const thumbsPerView = 6;
    
    // Add this CSS class for disabled state
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .thumb-nav-btn.disabled {
            background: rgba(128, 128, 128, 0.5) !important;
            cursor: default;
        }
    `;
    document.head.appendChild(styleSheet);

    function updateButtonStates() {
        // Check and update prev button
        if (currentIndex <= 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        // Check and update next button
        if (currentIndex + thumbsPerView >= thumbs.length) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }

    // Initial button states
    updateButtonStates();
    
    // Update main image when clicking thumbnails
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            currentIndex = Math.floor(index / thumbsPerView) * thumbsPerView;
            updateThumbnailsPosition();
            updateButtonStates();
        });
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= thumbsPerView;
            updateThumbnailsPosition();
            updateButtonStates();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex + thumbsPerView < thumbs.length) {
            currentIndex += thumbsPerView;
            updateThumbnailsPosition();
            updateButtonStates();
        }
    });
    
    function updateThumbnailsPosition() {
        const translateX = -currentIndex * (thumbs[0].offsetWidth + 10);
        thumbsTrack.style.transform = `translateX(${translateX}px)`;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Add click handler for end-section
    const endSection = document.querySelector('.end-section');
    endSection.addEventListener('click', () => {
        // Scroll to portfolio section
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        
        // After scrolling completes, animate portfolio items
        setTimeout(() => {
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => {
                item.style.transition = 'transform 0.3s ease-in-out';
                item.style.transform = 'scale(1.02)';
                
                // Return to normal size after 0.5s
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 500);
            });
        }, 1000); // Wait for scroll to complete
    });
});
