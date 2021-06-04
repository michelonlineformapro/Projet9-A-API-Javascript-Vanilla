//VARIABLE BASE DU CANAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//VARIABLE BOUCLE
var i=0;

//VARIABLE BASE DES BLOCS
var blocHeight = 30;
var blocWidth = 100;
let x = 0-blocWidth ;
let y = 470;
let r = 0-blocWidth;
let s = y-32;

//VARIABLE DEPLACEMENT BLOCS
let dx = 2;
let dy = 0;
let dr = 2;
let ds = 0;

//FUNCTION DRAW BLOC
function drawBloc(){
    ctx.beginPath();
    ctx.rect(x,y, blocWidth, blocHeight);
    ctx.fillStyle = "#52DCEA";
    ctx.fill();
    ctx.closePath();
}

//FUNCTION DRAW BLOC AGAIN
function drawBlocAgain(){
    ctx.beginPath();
    ctx.rect(r,s, blocWidth,blocHeight );
    ctx.fillStyle = "#52DCEA";
    ctx.fill();
    ctx.closePath();
    if(r == ((canvas.width)/2)-(blocWidth/2)){
        dr = 0;
        i = i+32;
    }
    r += dr;
}

//FUNCTION DRAW ALL
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBloc();
    if(x == ((canvas.width)/2)-(blocWidth/2)){
        dx = 0 ;
        drawBlocAgain();
    }

    x += dx;
    y += dy;

}
setInterval(function(){
    draw();
}, 3000);