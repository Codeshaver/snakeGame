var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
var object = {
    height: 40,
    width: 40,
    x: 10,
    y: 10, 
    color: "#FF0000"        
}

document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        object.x -= 10;
    }
    //top
    else if(event.keyCode == 38) {
        object.y -= 10;
    }
    //right
    else if(event.keyCode == 39) {
        object.x += 10;
    }
    //bottom
    else if(event.keyCode == 40) {
        object.y += 10;
    }
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}, false);


function moveObject(){
    object.x = object.x + 10;
}

function renderCanvas(){
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, 600, 600);
} 
function renderObject(){
    canvasContext.fillStyle = "#FF0000";
    canvasContext.fillRect(object.x, object.y, object.width, object.height);
}
function run(){
    renderCanvas();
    renderObject();
}

setInterval(run, 10);
moveObject();