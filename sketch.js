var tileable;
var tile;

function preload(){
  tileable=loadImage("./assets/Tileable-classic-water-texture.jpg")
  tile=loadImage("./assets/tile000.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  background(tileable);  
  spawnBalloons();
  drawSprites();
}

function spawnBalloons(){
  if(frameCount%80==0){
    var x=random(50,windowWidth-50);
  var balloon=createSprite(x,0,20,20);
  balloon.addImage("balloon",tile)
  }
}

