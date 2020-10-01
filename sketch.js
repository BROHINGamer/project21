var bullet,wall,thickness,speed,mass;
function setup() {
  createCanvas(2000,400);
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapecolor="white";
  wall=createSprite(800,200,thickness,200);
  speed=random(223,321);
  mass=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255); 
  bullet.velocityX=speed; 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage =0.5*mass*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
    }
    
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  lwallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
