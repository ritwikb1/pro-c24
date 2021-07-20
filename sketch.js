const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(345, playerBase.body.position.y-163, 120, 120)
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  arrow = new PlayerArrow(playerArcher.x, playerArcher.y, 10, 10, playerArcher.body.angle)
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  if (keyIsDown(UP_ARROW) && playerArcher.body.angle>-2.4) {
    playerArcher.body.angle = playerArcher.body.angle - 0.01
}else{
    playerArcher.body.angle = playerArcher.body.angle + 0.01
}
if (keyIsDown(DOWN_ARROW) && playerArcher.body.angle<-1) {
    playerArcher.body.angle = playerArcher.body.angle + 0.01
}else{
    playerArcher.body.angle = playerArcher.body.angle - 0.01

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  console.log(playerArcher.body.angle)
  arrow.display()



  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyIsDown("space")){
    arrow.shoot(playerArcher.body.angle)
    //Call shoot() function and pass angle of playerArcher


  }
}


}
