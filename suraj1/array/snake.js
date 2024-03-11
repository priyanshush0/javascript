// Get the canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Define the snake as an array of objects, each with x and y properties
const snake = [{ x: 250, y: 250 }];

// Define the direction of the snake
let direction = 'right';

// Define the size of the grid
const gridSize = 20;

// Function to draw the snake
function drawSnake() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each part of the snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'black';
    ctx.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
  }
}

// Function to move the snake
function moveSnake() {
  // Get the current head of the snake
  const head = snake[0];

  // Determine the new position of the snake based on the direction
  switch (direction) {
    case 'up':
      head.y -= gridSize;
      break;
    case 'down':
      head.y += gridSize;
      break;
    case 'left':
      head.x -= gridSize;
      break;
    case 'right':
      head.x += gridSize;
      break;
  }

  // Add the new position to the snake array
  snake.unshift(head);

  // Remove the tail of the snake
  snake.pop();

  // Draw the snake
  drawSnake();
}

// Function to change the direction of the snake
function changeDirection(newDirection) {
  // Only change the direction if it's not the opposite of the current direction
  if (
    (direction === 'right' && newDirection !== 'left') ||
    (direction === 'left' && newDirection !== 'right') ||
    (direction === 'up' && newDirection !== 'down') ||
    (direction === 'down' && newDirection !== 'up')
  ) {
    direction = newDirection;
  }
}

// Set up the game loop
setInterval(() => {
  moveSnake();
}, 100);

// Set up event listeners for changing the direction
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      changeDirection('up');
      break;
    case 'ArrowDown':
      changeDirection('down');
      break;
    case 'ArrowLeft':
      changeDirection('left');
      break;
    case 'ArrowRight':
      changeDirection('right');
      break;
  }
});