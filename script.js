let finalScore;
let lives;
let canvas;
let canvasContext;
let score = 0;
let snake = [{x:50,y:40},{x:60,y:50},{x:70,y:60},{x:80,y:70}]
let apple = {x:20,y:20}
let grid = 10;
let dx=dy=0;
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

// function drawSnakePart(snake) {
//     colorRect(snake.x, snake.y, grid, grid, "green");
//     // canvasContext.strokeRect(snake.x, snake.y, grid, grid);
  
//   }
  
//   function drawSnake() {
//     snake.forEach(drawSnakePart);
//   }


function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height,drawColor);
}
function drawGame(){
    let i = 0;
    colorRect(0,0,canvas.width,canvas.height, "black"); 
    colorRect(apple.x,apple.y,grid,grid, "red"); 
    for(i=0; i<snake.length; i++) {
        function drawSnake(){
            colorRect(snake[i].x,snake[i].y,grid,grid, "green");
            snake.forEach(drawSnake);
        } 
    drawSnake();
}
}

document.addEventListener('keydown', function(event) {
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    //left
    if(event.keyCode == 37 && !goingRight) {
        dx = -10;
        dy = 0;
    }
    //up
    if(event.keyCode == 38 && !goingDown) {
        dy = -10;
        dx = 0;
    
    }
    //right
    if(event.keyCode == 39 && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    //down
    if(event.keyCode == 40 && !goingUp) {
        dy = 10;
        dx = 0;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
});


function moveEverything(){
    let i=0;
    let grid = 10;
    const snakeHead = {x: snake[i].x+dx, y: snake[i].y+dy};
    snake.unshift(snakeHead);
    snake.pop();
    for(i=0; i<snake.length; i++) { 
        if(snakeHead.x==apple.x && snakeHead.y==apple.y){
            
                apple = {x:(Math.floor(Math.random()*canvas.width)-grid), y:(Math.floor(Math.random()*canvas.height))-grid}
    

    if(snakeHead.x>canvas.width) {
        snakeDeath();
    }
    if(snakeHead.x<=0){
        snakeDeath();
    }    
    if(snakeHead.y<0) {
        snakeDeath();
    }
    if(snakeHead.y>=canvas.height){
        snakeDeath(); 
    }
        }
    }
}



function snakeDeath() {
    window.location.reload();
//     snake[i].x = 70;
//     snake[i].y = 20;
}

// drawSnakePart();
snakeLoad();
drawGame();
