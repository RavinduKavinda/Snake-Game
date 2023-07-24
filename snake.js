//create board
var blockSize = 20;
var rows = 25;
var columns = 25;
var snakeBoard;
var context;

window.onload = function(){
    snakeBoard = document.getElementById("snakeBoard");
    snakeBoard.height = rows * blockSize;
    snakeBoard.width = columns * blockSize;
    context = snakeBoard.getContext("2d");

    update();
}

function update(){
    context.fillStyle= "#2c3e50";
    context.fillRect(0, 0, snakeBoard.height, snakeBoard.width);
}