var astronaut
var bg, sleep, brush, gym, eat, drink, move
var background1
var wall1, wall2, wall3, wall4

function preload() {
  bg = loadImage("../images/iss.png");
  sleep = loadAnimation("../images/sleep.png");
  brush = loadAnimation("../images/brush.png");
  gym = loadAnimation("../images/gym1.png", "../images/gym2.png");
  eat = loadAnimation("../images/eat1.png", "../images/eat2.png");
  drink = loadAnimation("../images/drink1.png", "../images/drink2.png");
  move1 = loadAnimation("../images/move2.png", "../images/move1.png");
}

function setup() {
  createCanvas(800,600);
  background1 = createSprite(350,200);
  background1.addImage("bg", bg);
  background1.scale = 0.15;

  border1 = createSprite(50, 50, 400, 200);
  border1.shapeColor = "black";

  wall1 = createSprite(0, 250, 0, 500);
  wall1.visible = false;
  wall2 = createSprite(400, -375, 800, 0);
  wall2.visible = false;
  wall3 = createSprite(700, 250, 0, 500);
  wall3.visible = false;
  wall4 = createSprite(400, 825, 800, 0);
  wall4.visible = false;


  astronaut = createSprite(350, 250, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;



}

function draw() {
  drawSprites();
  textSize(20);
  text("Instuctions:", 15, 25);
  text("Up Arrow = Brushing", 15, 45);
  text("Down Arrow = Gymming", 15, 65);
  text("Left Arrow = Eating", 15, 85);
  text("Right Arrow = Drinking", 15, 105);
  text("M = Moving", 15, 125);

  if(keyDown("up")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 200;
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("down")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 400;
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("left")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("right")) {
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.x = 350;
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")) {
    astronaut.addAnimation("moving", move1);
    astronaut.changeAnimation("moving");
    astronaut.x = 400;
    astronaut.y = 250;
    astronaut.velocityX = 2;
    astronaut.velocityY = 0;
  }

  astronaut.bounceOff(wall1);
  astronaut.bounceOff(wall2);
  astronaut.bounceOff(wall3);
  astronaut.bounceOff(wall4);
}