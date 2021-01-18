var flappy,back,obsImg,flappyImg,backImg;
var obs1Img;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obstacle1grp  
var obstacle2grp 
var obs,obs1;
function preload(){
flappyImg = loadImage("Flappy.png")
backImg = loadImage("BackgroundImg.png")
obsImg = loadImage("PipeImg.png")
obs1Img = loadImage("Pipe1.png")
gameoverImg = loadImage("gameover.png")
}

function setup(){
createCanvas(2000,550)

  
  back = createSprite(550,250,2000,550)
  back.addImage("BackgroundImg",backImg)
back.scale = 4;
 
flappy = createSprite(100,230,30,50) 
flappy.setCollider("circle",0,0,80);
flappy.debug = false;
  flappy.addImage("Flappybird",flappyImg)
flappy.scale = 0.5;
flappy.velocityY = -2;
 obstacle1grp = createGroup ();
 obstacle2grp = createGroup ();
}

function draw(){

  background("white")
if(gameState === PLAY){

  if(keyDown("Space")){
  flappy.velocityY = -10;


  }

  flappy.velocityY = flappy.velocityY+1;
  spawnObstacles1();
  spawnObstacles();
  if(obstacle1grp.isTouching(flappy)|| obstacle2grp.isTouching(flappy))  {

    gameState = END
  }
}


else{
  if(gameState === END){
background(0);
var gameover = createSprite(500,200);
gameover.addImage(gameoverImg);
gameover.scale = 0.5;
obstacle1grp.destroyEach();
obstacle2grp.destroyEach();
flappy.destroy();
back.destroy();
  }
}
  drawSprites();
}

function spawnObstacles(){
if(frameCount % 80 === 0){
  obs = createSprite(1200,450,50,500);
  obs.setCollider("circle",0,0,120);
  obs.debug = false;
 
  obs.velocityX = -5;
  obs.addImage(obsImg)
  obs.scale = 0.3;
  obstacle1grp.add(obs);

}
 
}

function spawnObstacles1(){
  if(frameCount % 100 === 0){
  
    var obs1 = createSprite(1200,10,50,50)
    obs1.velocityX = -5;
    obs1.addImage(obs1Img)
    obs1Img.scale = 0.005;
    obstacle2grp.add(obs1)
    obs1.setCollider("circle",0,0,110);
  obs1.debug = false;
  }
   
  }