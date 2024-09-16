document.querySelector('.custom-scroll-container').addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scroll behavior
    
    // Calculate the new scroll position
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    this.scrollTop += delta * 40; // Adjust scrolling speed
});


document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = document.querySelectorAll('.background-image');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        backgroundImages.forEach((image) => {
            const speed = parseFloat(image.getAttribute('data-speed'));
            image.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    });
});


