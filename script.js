let score;
let finalScore;
let lives;
var canvas;
var canvasContext;
let snakeX = 50;
let snakeY = 50;

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

function moveEverything(){
    snakeX = snakeX + 10;

    document.addEventListener('keydown', function(event) {
        //left
        if(event.keyCode == 37) {
            snakeX -= 10;
        }
        //top
        else if(event.keyCode == 38) {
            snakeY -= 10;
        }
        //right
        else if(event.keyCode == 39) {
            snakeX += 10;
        }
        //bottom
        else if(event.keyCode == 40) {
            snakeY += 10;
        }
    });
}
function drawGame(){
    canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(200,200,10,10);
	canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakeX,snakeY,20,15);
}

snakeLoad();
drawGame();


// getKeyAndMove();
// function getKeyAndMove(e){				
//     let key_code=e.keyCode; // don't really get the which part of this yet
//     switch(key_code){
//         case 37: //left arrow key
//             moveLeft();
//             break;
//         case 38: //Up arrow key
//             moveUp();
//             break;
//         case 39: //right arrow key
//             moveRight();
//             break;
//         case 40: //down arrow key
//             moveDown();
//             break;	
//     }
// }
// function moveLeft() {
//     snakeX = snakeX - 10;
// }
// function moveRight(){
//     snakeX = snakeX + 10;
// }
// function moveUp(){
//     snakeX = snakeY + 10;
// }
// function moveDown(){
//     snakeX = snakeY - 10;
// }
