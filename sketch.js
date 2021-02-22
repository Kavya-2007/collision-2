var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,600);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(50,50,50,40);
  gameObject1.shapeColor="green";
  
  gameObject2 = createSprite(200,70,60,40);
  gameObject2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


