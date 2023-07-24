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
var speadX = 0;
var speadY = 0;

//sanke body
var snakeBody = [];

//create food
var snakeFoodX;
var snakeFoodY;



window.onload = function(){
    snakeBoard = document.getElementById("snakeBoard"); //create board
    snakeBoard.height = rows * blockSize;
    snakeBoard.width = columns * blockSize;
    context = snakeBoard.getContext("2d");

    placeFood();
    document.addEventListener("keyup", directionChange);
    setInterval(update, 100);
}



function update(){
    context.fillStyle= "#2c3e50";  //create board
    context.fillRect(0, 0, snakeBoard.height, snakeBoard.width);

    context.fillStyle = "#fbc531";  //create food
    context.fillRect( snakeFoodX, snakeFoodY, blockSize, blockSize);

    if(snakeX == snakeFoodX && snakeY == snakeFoodY){
        snakeBody.push([snakeFoodX, snakeFoodY]);
        placeFood();
    }

    for (let i = snakeBody.length-1; i>0; i--){  //sanke body
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "#4cd137";  //create snake
    snakeX += speadX * blockSize;
    snakeY += speadY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i< snakeBody.length; i++){  //sanke body
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize); 
    }

}


function directionChange(p) {
    if(p.code == "ArrowUp" && speadY != 1){
        speadX = 0;
        speadY = -1;
    }
    else if (p.code == "ArrowDown" && speadY != -1){
        speadX = 0;
        speadY = 1;
    }
    else if (p.code == "ArrowLeft" && speadX != 1){
        speadX = -1;
        speadY = 0;
    }
    else if (p.code == "ArrowRight" && speadX != -1){
        speadX = 1;
        speadY = 0;
    }
}


function placeFood(){
    snakeFoodX = Math.floor(Math.random() * columns) * blockSize;
    snakeFoodY = Math.floor(Math.random() * rows) * blockSize;

}