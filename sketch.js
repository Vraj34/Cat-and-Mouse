var cat;
var mouse;
var catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;
var bgImg;


function preload() {
    //load the images here
    bgImg1 = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png,cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse1.png,mouse2.png");
    mouseImg3 = loadImage("mouse4.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,400,20,20);
    cat.addImage(catImg1);

    mouse = createSprite(200,400,20,20);
    mouse.addImage(mouseImg1);


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide



if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addImage(catImg3);
    mouse.addImage(mouseImg3);    
    cat.setVelocityX = 0;

}

keyPressed();


    drawSprites();
}


function keyPressed(){    

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -4;
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
  }


}
