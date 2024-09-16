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

let bg_main = document.getElementById('bg_main')
        let buildings = document.getElementById('buildings')
        let bg_front_a = document.getElementById('bg_front_a')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            buildings.style.top = -value * 0.3 + "px";
            bg_front_a.style.top = -value * 0.7 + "px";
        })

