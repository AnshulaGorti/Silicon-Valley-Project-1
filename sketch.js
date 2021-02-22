var tiger, tigerAnimation
var backgroundImage, background
var bush,bushImage
var deer, deerAnimation


function preload(){
  //tigerAnimation=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png")
  //deerAnimation=loadAnimation("d1.png", "d2.png", "d3.png","d4.png","d5.png","d6.png")
  //bushImage=loadImage("bush.png")
  backgroundImage=loadImage("pic/bg1.png")
}

function setup() {
  createCanvas(800,400);
  background1=createSprite(400,200);
  background1.addImage("bg",backgroundImage);
  background1.scale=2.30
 background1.velocityX=-5;
}

function draw() {
  background("green");
  
    if (background1.x < 0){
    background1.x =750
  }

  

  drawSprites();
}