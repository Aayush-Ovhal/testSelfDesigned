var canvas;

var player;
let detailX;

var grounds = [];
var ground;

var obstacles = [];
var obstacle;

var point;

var pos = 0;

var zpos = 0;

var obstacleX = 0;

var obstacleZ = -600;

var moon;
var moonImg;

var a;

// function preload(){
//   moonImg = loadImage("images/moon.png");
// }

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player(-100);

//moon = new Checkpoint();

// createImg(
//    './images/moon.png'
// );

a = 0;

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     player.setDir(200,250);
  }else if(keyCode === LEFT_ARROW){
      player.setDir(-100,250);
  }
  else if(keyCode === UP_ARROW){
    player.setDir(30,150);
   }
  else if(keyCode === DOWN_ARROW){
      player.setDir(30,250);
  }
}

function draw(){
background(0);

//image(moonImg,500,500,400,400);

player.display();
player.fall();

if(frameCount%200 == 0){
 for(var i = 0; i < 2; i++){
  obstacle = new Obstacle(i+obstacleX+10,125,obstacleZ);
  obstacles.push(obstacle);
  a = 1;
  obstacleX += 90;
 }
}

if(obstacleX === 180){
  obstacleX = null;
}

 for(var o of obstacles){
   o.z += 5;
   o.display();
}

//moon.display();

}