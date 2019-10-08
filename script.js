let score;
let finalScore;
let lives;
var canvas;
var canvasContext;
let snake = {x: 50, y:50};
let snakeSpeed = {x:0, y:0}
let apple = { x: 200, y:200};
let dx= 0;
let dy= 0;


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
        snake.x -= -2*dx;
        dx = -1
        dy = 0;
    }
    //top
    else if(event.keyCode == 38) {
        snake.y -= -2*dy;
        dy = -1
        dx = 0;
    
    }
    //right
    else if(event.keyCode == 39) {
        snake.x += 2*dx;
        dx = 1
        dy = 0;
    }
    //bottom
    else if(event.keyCode == 40) {
        snake.y += 2*dy;
        dy = 1
        dx = 0;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
});


function moveEverything(){
    snake.x += dx;
    snake.y += dy;
    if(snake.x>canvas.width) {
        // snakeSpeed.x = -snakeSpeed.x; // bounce off wall
        snakeDeath();
    }
    if(snake.x<=0){
        // snakeSpeed.x = -snakeSpeed.x;// bounce off ceiling
        snakeDeath();    
    if(snake.y<0) {
        // snakeSpeed.x = -snakeSpeed.x; // bounce off wall
        snakeDeath();
    }
    if(snake.y>=canvas.height){
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
    colorRect(apple.x,apple.y,10,10, "red"); // apple
    colorRect(snake.x,snake.y,20,15, "green"); // snake

}

function snakeDeath() {
    snake.x = canvas.width/2;
    snake.y = canvas.height/2;
}


// function drawGame(){
//     canvasContext.fillStyle = 'black';
// 	canvasContext.fillRect(0,0,canvas.width,canvas.height);
// 	canvasContext.fillStyle = 'red';
// 	canvasContext.fillRect(apple.x,apple.y,10,10); //need to store red block as apple
// 	canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(snake.x,snake.y,20,15); //need to store green block as snake  
// }


snakeLoad();
drawGame();




