
     
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
        if (navLinks.classList.contains('show')) {
            navLinks.style.display = 'flex';
        } else {
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 500); // Match the duration of the opacity transition
        }
    });
});

let index = 0;
const images = document.querySelectorAll('.carousel-image');
const cycleImages = () => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
};
setInterval(cycleImages, 3000); // Rotate images every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();
    const hoursList = document.querySelectorAll('.quote-section p'); // Assuming each day's hours are in separate <p> tags within .contact-info
    
    hoursList.forEach((p) => {
        if (p.textContent.includes(days[today])) {
            p.style.fontWeight = 'bold';
        }
    });
 });