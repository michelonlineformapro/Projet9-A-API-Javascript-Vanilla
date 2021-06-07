let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let width = 100;
let height = 30;
let posX = 0;
let posY = 0
let dx = 2;

function drawBall() {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(posX,posY, width, height);
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawBall();
    posX += dx;
}
let btnValid = document.getElementById('createBlock');

btnValid.addEventListener('click', function (){
    setInterval(draw, 10);
})

