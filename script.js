// Random color hover effect for the name
const nameElement = document.querySelector('.name');

const colorPalette = [
  '#93087cff', // Red
  '#0c532aff', // Green
  '#1473bcff', // Blue
  '#9B59B6', // Purple
  '#696e70ff', // Yellow
  '#aa41acff', // Orange
  '#672e98ff'  // Turquoise
];

nameElement.addEventListener('mouseenter', () => {
  // Pick a random color from the palette
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  
  // Apply the new color
  nameElement.style.color = randomColor;
});

// Typing animation for the name
const text = nameElement.textContent;
let i = 0;
nameElement.textContent = '';

function type() {
  if (i < text.length) {
    nameElement.textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  } else {
    // Finished typing, wait 2 seconds then start erasing
    nameElement.classList.add('typing-complete');
    setTimeout(erase, 2000);
  }
}

function erase() {
  nameElement.classList.remove('typing-complete');
  if (i > 0) {
    nameElement.textContent = text.substring(0, i - 1);
    i--;
    setTimeout(erase, 100);
  } else {
    // Finished erasing, wait then start typing again
    setTimeout(type, 500);
  }
}

// Start the animation
type();