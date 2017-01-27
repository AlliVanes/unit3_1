//var X=0;
//var Y=50;
//var diameter=25;

var g=0;
var b=255;

var circle1={
X:0,
Y:100,
diameter:50
};
var circle2={
X:50,
Y:200,
diameter:125
};

function setup() {
  resizeCanvas(600,400);
}

function draw() {
  g=map(mouseX,0,600,0,255);
  b=map(mouseY,0,600,255,0);
  background(0,g,b);
  
  fill(50,250,25);
  ellipse(circle1.X,circle1.Y,40,40);
  //rect(circle2.X, circle2.Y, circle2.diameter, circle2.diameter,250,75,100);
  //circle1.diameter, circle1.diameter,100,50,50
  circle1.X=random(0,width);
  circle1.Y=random(0,height);

circle1.X=circle1.X+1;
circle2.Y=circle2.Y+3;
}