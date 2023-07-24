//create board
var blockSize = 20;
var rows = 25;
var columns = 25;
var snakeBoard;
var context;

//create snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//create food
var snakeFoodX = blockSize * 10;
var snakeFoodY = blockSize * 10;



window.onload = function(){
    snakeBoard = document.getElementById("snakeBoard"); //create board
    snakeBoard.height = rows * blockSize;
    snakeBoard.width = columns * blockSize;
    context = snakeBoard.getContext("2d");

    update();
}



function update(){
    context.fillStyle= "#2c3e50";  //create board
    context.fillRect(0, 0, snakeBoard.height, snakeBoard.width);

    context.fillStyle = "#4cd137";  //create snake
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = "#fbc531";  //create food
    context.fillRect( snakeFoodX, snakeFoodY, blockSize, blockSize);

}