// Script for handling dynamic event image preview
const eventItems = document.querySelectorAll('.event-list li');
const eventImage = document.getElementById('event-image');

eventItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const imageUrl = item.getAttribute('src');
        eventImage.src = imageUrl;
    });
    item.addEventListener('mouseleave', () => {
        eventImage.src = 'coding.jpg';
    });
});

// Create the custom cursor element
const cursor = document.createElement('div');
cursor.style.width = '30px'; // Adjust width based on your SVG size
cursor.style.height = '30px'; // Adjust height based on your SVG size
cursor.style.position = 'fixed';
cursor.style.top = '0';
cursor.style.left = '0';
cursor.style.pointerEvents = 'none'; // Prevent mouse events on the cursor
cursor.style.backgroundImage = 'url("custom-cursor.svg")'; // Set your SVG as background
cursor.style.backgroundSize = 'contain'; // Ensure the SVG fits
cursor.style.backgroundRepeat = 'no-repeat'; // Do not repeat the SVG
document.body.appendChild(cursor);

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Optional: Change cursor style for links and buttons
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.3)'; // Enlarge cursor on hover
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(0.8)'; // Reset cursor size
    });
});
