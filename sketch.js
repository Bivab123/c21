var fixedRect, movingRect;

//creating multiple objects
var object1,object2,object3,object4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1=createSprite(100,100,50,50);
  object2=createSprite(200,100,50,50);
  object3=createSprite(300,100,50,50);
  object4=createSprite(400,100,50,50);

  object1.shapeColor="green";
  object2.shapeColor="green";
  object3.shapeColor="green";
  object4.shapeColor="green";
}

function draw() {
  background(255,255,255); 
   
if(isTouching(movingRect,object1)){
movingRect.shapeColor="blue"
fixedRect.shapeColor="blue"

} 
else{
 movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}

bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
