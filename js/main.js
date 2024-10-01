const svgElement = document.getElementById('svgElement');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const percentage = scrollY / totalHeight;

    // Handle left-right movement
    if (percentage <= 0.4) {
        leftPosition = 75 + (percentage * (10 - 75) * 2.5); // Move from 75 to 10
    } else {
        leftPosition = 10 + ((percentage - 0.4) * (-5 - 10) * (10 / 6)); // Move from 10 to -5
    }
    
    // Handle rotation (same as before)
    const rotation = 0 - percentage * 480;

    // Handle scale from 8x to 1x and back to 8x
    let scale;
    if (percentage <= 0.5) {
        scale = 1 + (percentage * (0.4 - 1) * 2);  // Scale from 1 to 0.4
    } else {
        scale = 0.4 + ((percentage - 0.5) * (2 - 0.4) * 2);  // Scale from 0.4 to 4
    }

    // Apply the computed styles to the SVG element
    svgElement.style.left = `${leftPosition}%`;
    svgElement.style.transform = `translateY(-50%) rotate(${rotation}deg) scale(${scale})`;
});

// Menu
const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.menu');
const menuItems = document.querySelectorAll('#menu li');
const body = document.body;

// Toggle menu for icon
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
    body.classList.toggle('disable-scroll');
});

// Toggle menu items
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.classList.remove('open');
        body.classList.remove('disable-scroll');
    });
});