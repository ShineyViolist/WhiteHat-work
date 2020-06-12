var aa, bb,c,d,bounceOffset;

bounceOffset = 0;

function setup() {
  createCanvas(800,400);
  aa = createSprite(400, 200, 50, 50);
  aa.shapeColor = "blue";
  
  bb = createSprite(200,200,50,50);
  bb.shapeColor = "purple";

  c = createSprite(400, 300, 50, 50);
  c.shapeColor = "pink";
  c.velocityX = 2;
  
  d = createSprite(200,200,50,50);
  d.shapeColor = "black";
}

function draw() {
  bb.y = mouseY;
  bb.x = mouseX;
  background(255,255,255);
  //line(aa.x,aa.y,bb.x,bb.y);
  
  bounceOff(bb,c);
  
  if(touching(bb,c)){

  }else{
    bounceOffset = 0;
  }

  drawSprites();
}

