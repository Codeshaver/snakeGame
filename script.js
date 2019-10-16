let finalScore;
let lives;
let canvas;
let canvasContext;
let score = 0;
let snake = [{x:0,y:0}]
let apple = {x:20,y:20}
let grid = 10;
let dx=dy=0;
let tail = []
let i = 0;
const snakeHead = snake[0]


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
        dx = -1;
        dy = 0;
    }
    //top
    else if(event.keyCode == 38) {
        dy = -1;
        dx = 0;
    
    }
    //right
    else if(event.keyCode == 39) {
        dx = 1;
        dy = 0;
    }
    //bottom
    else if(event.keyCode == 40) {
        dy = 1;
        dx = 0;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
});


function moveEverything(){
    snake[i].x += dx;
    snake[i].y += dy;
    for(i=0; i<snake.length; i++) { // iteration to add new snake object to array if apple is eaten
        if(snake[i].x==apple.x && snake[i].y==apple.y){
            snake.push({x:snake[snake.length].x+=dx*grid, y:snake[snake.length].y+=dy*grid}) //trying to push new snake object into array using dx and dy to stipulate placement
                apple = {x:Math.floor(Math.random()*canvas.width), y:Math.floor(Math.random()*canvas.height)}

    if(snake[i].x>canvas.width) {
        snakeDeath();
    }
    if(snake[i].x<=0){
        snakeDeath();
    }    
    if(snake[i].y<0) {
        snakeDeath();
    }
    if(snake[i].y>=canvas.height){
        snakeDeath(); 
    }
}


function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height,drawColor);
}
function drawGame(){
    colorRect(0,0,canvas.width,canvas.height, "black"); 
    colorRect(apple.x,apple.y,grid,grid, "red"); 
    colorRect(snake[i].x,snake[i].y,grid,grid, "green"); 
}

function snakeDeath() {
    snake[i].x = 70;
    snake[i].y = 20;
}

snakeLoad();
drawGame();