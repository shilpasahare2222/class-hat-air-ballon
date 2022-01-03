var sky ,skyIng;
var balloon,balloonIng;

function preload() {
skyIng=loadImage("assets/bj.jpg")
balloonIng=loadImage("assets/balloon.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  bg=createSprite(0,0)
 bg.addImage(skyIng)
bg.scale=8.5
bg.velocityX=-2
 balloon=createSprite(200,200,30,20);
 balloon.addImage(balloonIng);
 balloon.scale=0.4
 
}

function draw() {
  background(skyIng);  
if(keyIsDown(UP_ARROW)){
balloon.y = balloon.y -10
}
if(keyIsDown(DOWN_ARROW)){
  balloon.y = balloon.y+10
}
if(keyIsDown(LEFT_ARROW)){
  balloon.x = balloon.x-10
}
if(keyIsDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10
}
 if(bg.x<0){
   bg.x=bg.width/2
 }


  drawSprites();
}