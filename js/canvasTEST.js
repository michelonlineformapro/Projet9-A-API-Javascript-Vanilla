let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

console.log(ctx);

//Un rectangle au centre du canvas pos X , pos Y + width + height
ctx.fillRect(400, 150, 100, 100)