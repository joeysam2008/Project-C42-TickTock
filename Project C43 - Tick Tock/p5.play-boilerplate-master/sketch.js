var hr;
var mn;
var sc;


function setup() {
  createCanvas(800,400); 
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES)

  
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  stroke(255,0,0);
  strokeWeight(7)
  noFill()
  var scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(15,245,4);
  strokeWeight(7)
  var mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);


  stroke(13,0,277);
  strokeWeight(7)
  var hrAngle = map(hr%12,0,12,0,360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(scAngle)
  stroke(244,4,0)
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(15,245,4)
  line(0,0,75,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(13,0,277)
  line(0,0,50,0)
  pop();

  drawSprites();
}