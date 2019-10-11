let finalScore;
let lives;
let canvas;
let canvasContext;
let score = 0;
let snake = [{x:0,y:0}]
let apple = [{x:20,y:20}]
let grid = 10;
let dx=dy=0;
let tail = []
let i = 0;


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
        // }
        dy = 10;
        dx = 0;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
});


function moveEverything(){
    snake[i].x += dx;
    snake[i].y += dy;
    for(i=0; i<snake.length; i++) {
        if(snake.x==apple.x && snake.y==apple.y){
            snake.push({x:snake[snake.length].x-grid, y:snake[snake.length].y-grid})
                apple = [{x:Math.floor(Math.random()*canvas.width), y:Math.floor(Math.random()*canvas.height)}]
        }

    if(snake.x>canvas.width) {
        snakeDeath();
    }
    if(snake.x<=0){
        snakeDeath();
    }    
    if(snake.y<0) {
        snakeDeath();
    }
    if(snake>=canvas.height){
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
    colorRect(apple[i].x,apple[i].y,grid,grid, "red"); // apple
    colorRect(snake[i].x,snake[i].y,grid,grid, "green"); // snake
}

function snakeDeath() {
    snake[i].x = canvas.width/2;
    snake[i].y = canvas.height/2;
}

snakeLoad();
drawGame();