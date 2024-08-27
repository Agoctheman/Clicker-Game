const circle = document.getElementById('circle');
const scoreElement = document.getElementById('score');
let score = 0;
let clickCount = 0;

const colors = ['#ff0266', '#ff7700', '#00ff66', '#0088ff', '#8f00ff'];

function updateColor() {
    const colorIndex = Math.floor(score / 5) % colors.length;
    circle.style.backgroundColor = colors[colorIndex];
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
    clickCount++;
    
    if (clickCount % 5 === 0) {
        updateColor();
    }
}

circle.addEventListener('click', updateScore);

// Initialize circle color
updateColor();
