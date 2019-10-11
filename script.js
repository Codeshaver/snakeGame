let finalScore;
let lives;
let canvas;
let canvasContext;
let score = 0;
let snakeX=snakeY= 50;
let appleX=appleY=200;
let grid = 10;
let dx=dy=0;
let tail = []


function snakeLoad() {
	console.log("Hello world!");
	canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    let framesPerSecond = 15;
    setInterval(function(){
        moveEverything();
        drawGame();
    }, 1000/framesPerSecond);
}

document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        // if(snakeX==appleX && snakeY==appleY){
        //     colorRect(snakeX+grid,snakeY,grid,grid, "green"); // snake
        // }
        dx = -10;
        dy = 0;
    }
    //top
    else if(event.keyCode == 38) {
            // if(snakeX==appleX && snakeY==appleY){
            //     colorRect(snakeX,snakeY-grid,grid,grid, "green"); // snake tail
            // }
        
        dy = -10;
        dx = 0;
    
    }
    //right
    else if(event.keyCode == 39) {
        // if(snakeX==appleX && snakeY==appleY){
        //     colorRect(snakeX-grid,snakeY,grid,grid, "green"); // snake tail
        // }
        dx = 10;
        dy = 0;
    }
    //bottom
    else if(event.keyCode == 40) {
        // if(snakeX==appleX && snakeY==appleY){
        //     colorRect(snakeX,snakeY+grid,grid,grid, "green"); // snake tail
        // }
        dy = 10;
        dx = 0;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
});


function moveEverything(){
    snakeX += dx;
    snakeY += dy;
    // if (snakeX==appleX && snakeY==appleY) {
    //     appleX = appleX*Math.floor(Math.random*canvas.width);
    //     appleY = appleY*Math.floor(Math.random*canvas.height);
    //     score++
    //     tail.push[{snakeX:-grid, snakeY: -grid}]
    // }
    if(snakeX>canvas.width) {
        // snakeSpeed.x = -snakeSpeed.x; // bounce off wall
        snakeDeath();
    }
    if(snakeX<=0){
        // snakeSpeed.x = -snakeSpeed.x;// bounce off ceiling
        snakeDeath();    
    if(snakeY<0) {
        // snakeSpeed.x = -snakeSpeed.x; // bounce off wall
        snakeDeath();
    }
    if(snakeY>=canvas.height){
        // snakeSpeed.x = -snakeSpeed.x;// bounce off ceiling
        snakeDeath(); 
    }
}
}

function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height,drawColor);
}
function drawGame(){
    colorRect(0,0,canvas.width,canvas.height, "black"); // canvas
    colorRect(appleX,appleY,grid,grid, "red"); // apple
    colorRect(snakeX,snakeY,grid,grid, "green"); // snake
}

function snakeDeath() {
    snakeX = canvas.width/2;
    snakeY = canvas.height/2;
}

snakeLoad();
drawGame();