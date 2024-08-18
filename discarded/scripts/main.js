document.querySelector('.custom-scroll-container').addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scroll behavior
    
    // Calculate the new scroll position
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    this.scrollTop += delta * 40; // Adjust scrolling speed
});