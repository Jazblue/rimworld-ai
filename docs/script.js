// RimWorld AI Website - Simple JavaScript
// Add any interactive functionality here

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to nav links on scroll (if we had a nav)
    // This is just a placeholder for future enhancement

    console.log('RimWorld AI website loaded');
});
