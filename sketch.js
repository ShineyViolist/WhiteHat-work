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
  
  drawSprites();
}

function touching(a,b) {
  if(a.x - b.x <= a.width/2 + b.width/2 && b.x - a.x <= a.width/2 + b.width/2 && a.y - b.y<= a.height/2 + b.height/2
    && b.y - a.y<= a.height/2 + b.height/2){
    return true;
  }else{
    return false;
  }

}

function bounceOff(a,b) {
  if(touching(a,b)){
    b.velocityX = b.velocityX * -1;
  }
}