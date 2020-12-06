var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
thickness=random(22,83)
speed=random(223,321);
weight=random(30,52);

 bullet= createSprite(50, 200, 50, 50);
 wall= createSprite(1300,200,60,height/2);
 speed=random(55,90)
 weight=random(400,1500)
 bullet.velocityX=speed;
}

function draw() {
  
  background(0);
  bullet.shapeColor=color("white");
  wall.shapeClor=color("gray");
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/thickness*thickness*thickness;
    
    if(damage>10){
    wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
    wall.shapeColor=color(0,255,0);
    }
    
    }
  
  }
  
  bullet.collide(wall)
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
