//create board
var blockSize = 20;
var rows = 25;
var columns = 25;
var snakeBoard;
var context;

//create snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
//snake spead
var speedX = 0;
var speedY = 0;
//sanke body
var snakeBody = [];

//create food
var snakeFoodX;
var snakeFoodY;

//finish
var gameOver = false;
var gamePaused = false;
var score = 0;
var intervalId;

window.onload = function () {
  snakeBoard = document.getElementById("snakeBoard"); //create board
  snakeBoard.height = rows * blockSize;
  snakeBoard.width = columns * blockSize;
  context = snakeBoard.getContext("2d");

  placeFood();
  document.addEventListener("keyup", directionChange);

  document.getElementById("pauseBtn").addEventListener("click", pauseGame);
  document.getElementById("resumeBtn").addEventListener("click", resumeGame);
  document.getElementById("restartBtn").addEventListener("click", restartGame);

  intervalId = setInterval(update, 100);
};

function update() {
  if (gamePaused) return;

  context.fillStyle = "#2c3e50"; //create board
  context.fillRect(0, 0, snakeBoard.height, snakeBoard.width);

  context.fillStyle = "#fbc531"; //create food
  context.fillRect(snakeFoodX, snakeFoodY, blockSize, blockSize);

  if (snakeX == snakeFoodX && snakeY == snakeFoodY) {
    snakeBody.push([snakeFoodX, snakeFoodY]);
    placeFood();
    score++;
    document.getElementById("score").innerText = "Score: " + score;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    //sanke body
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;

  context.fillStyle = "#4cd137";  //create snake
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for (let i = 0; i< snakeBody.length; i++){  //sanke body
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX >= columns * blockSize ||
    snakeY < 0 ||
    snakeY >= rows * blockSize
  ) {
    gameOver = true;
    clearInterval(intervalId);
    alert("Game Over");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      clearInterval(intervalId);
      alert("Game Over");
    }
  }
}

function directionChange(event) {
  if (event.code == "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  } else if (event.code == "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  } else if (event.code == "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  } else if (event.code == "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
}

function placeFood() {
  snakeFoodX = Math.floor(Math.random() * columns) * blockSize;
  snakeFoodY = Math.floor(Math.random() * rows) * blockSize;
}

function pauseGame() {
  gamePaused = true;
}

function resumeGame() {
  if (!gameOver) {
    gamePaused = false;
  }
}

function restartGame() {
  clearInterval(intervalId);
  gameOver = false;
  gamePaused = false;
  score = 0;
  document.getElementById("score").innerText = "Score: 0";
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 0;
  speedY = 0;
  snakeBody = [];
  placeFood();
  intervalId = setInterval(update, 100);
}
