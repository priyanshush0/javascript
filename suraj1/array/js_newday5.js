var canves=document.querySelector('#canves');
var ctx=canves.getContext('2d');
ctx.fillStyle='green';
let w=0;
let h=0;
// ctx.fillRect(10,10,w,h);
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(0.5, "rgb(199, 148, 148");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 250, 150);
let cs=50;
let Snake={
    init:5,
    direction:'right',
    cell:[],
    
    CreateSnake:function(){
        for(let i=0;i<this.init;i++)
        {
            this.cell.push({
                x:i,
                y:0
            });
        }
    },
    DrewSnake:function(){
        for(let cell of this.cell){
            ctx.fillRect(cell.x*cs,cell)
        }
    }

}
// function init(){
//     ctx.fillRect(w,h,50,50);
    
// }

// function update(){
//     // console.log('inside update');
    
//     w+=50;
    
// }

// function draw(){
//     ctx.clearRect(0,0,400,300);
//     // ctx.fillRect(10,10,w,h);
//     ctx.fillRect(w,h,50,50);


// }
// init();
// function GameLoop(){
//     update();
//     draw();
// }

// setInterval(GameLoop,200);
