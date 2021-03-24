
var garden, canvas;
var mouse, mouse2, mouse3, mouse4;
var cat, cat2, cat3, cat4;

function preload(){
  
garden = loadImage("images/garden.png");
mouseImg = loadAnimation("images/mouse1.png");
mouse2Img = loadAnimation("images/mouse2.png", "images/mouse3.png");
mouse3Img = loadAnimation("images/mouse4.png");

catImg = loadAnimation("images/cat1.png");
cat2Img = loadAnimation("images/cat2.png", "images/cat3.png");
cat3Img = loadAnimation("images/cat4.png");


  }


function setup(){
createCanvas(1000, 800);

mouse = createSprite(870, 600);
mouse.addAnimation("images/mouse.png" , mouseImg); 
mouse.scale = 0.2;
cat = createSprite(200, 600);
cat.addAnimation("images/cat.png" , catImg);
cat.scale = 0.15;
}

function draw(){
background(garden);
if (catImage.x-mouseImage.x<(catImage.width-mouseImage.width)/2)
{cat.velocityX = 0;
cat.addAnimation ("catLastImage" , cat3Img);
cat.x=300;
cat.scale = 0.2;
cat.changeAnimation("catLastImage");

mouse.velocityX = 0;
mouse.addAnimation ("mouseLatImage" , mouse3Img);
mouse.scale = 0.2;
mouse.changeAnimation("mouseLastImage");


}

drawSprites();

}

function keyPressed(){
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning" , cat2Img);
cat.changeAnimation("catRunning");


mouse.addAnimation("mouseTeasing" , mouse2Img);
mouse.frameDelay = 25;
mouse.changeAnimation("mouseTeasing");
}
}
