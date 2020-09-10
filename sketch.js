var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 100, 50, 80);
  movingRect.shapeColor="green";
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";

  }

  //console.log(movingRect.x - fixedRect.x);
 console.log(movingRect.width/2 + fixedRect.width/2)
  drawSprites();  
}