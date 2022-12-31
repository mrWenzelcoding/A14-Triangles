x1 = [];
x2 = [];
x3 = [];
y1 = [];
y2 = [];
y3 = [];
let r = [];
let g = [];
let b = [];
xSpeed = [];
ySpeed = [];

function setup() {
  createCanvas(500, 500);
  background(0);
   for(i = 0; i<250; i++){
     fill(0, 20);
     r[i] = random(0, 255);
     g[i] = random(0, 50);
     b[i] = random(0, 255);
     stroke(r[i], g[i], b[i]);
     strokeWeight(1.2);
  x1[i] = random(0, 500);
  x2[i] = random(0, 500);
  x3[i] = random(0, 500);
  y1[i] = random(0, 500);
  y2[i] = random(0, 500);
  y3[i] = random(0, 500);
  triangle(x1[i], y1[i], x2[i], y2[i], x3[i], y3[i]);
     xSpeed[i] = random(-2, 2);
     ySpeed[i] = random(-2, 2);
  }
}
 function draw(){
   for(i = 0; i<250; i++){
    stroke(r[i], g[i], b[i]);
    triangle(x1[i], y1[i], x2[i], y2[i], x3[i], y3[i]);
     x1[i] = x1[i] + xSpeed[i]
     x2[i] = x2[i] + xSpeed[i]
     x3[i] = x3[i] + xSpeed[i]
     y1[i] = y1[i] + ySpeed[i]
     y2[i] = y2[i] + ySpeed[i]
     y3[i] = y3[i] + ySpeed[i]   
   }
 }
