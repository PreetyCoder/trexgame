
var trex ,trex_running;
var ground, groundImg;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
}


function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage(groundImg);
  
}

function draw(){
  background("white");

  if(keyDown("space")){
     trex.velocityY= -10;
  }
  //gravity for trex
   trex.velocityY = trex.velocityY +0.8;


  ground.velocityX = -10;
  if(ground.x<100){
    ground.x=300;
  }


  trex.collide(ground);
  drawSprites();

}