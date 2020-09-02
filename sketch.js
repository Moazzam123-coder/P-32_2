const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score = 0;
var bgimg;

function preload(){
  BG_IMAGE();
}
function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,500,900,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //Last Layer
  box21 = new Box(300,275,30,40);
  console.log(box21);
  box22 = new Box(330,275,30,40);
  box23 = new Box(360,275,30,40);
  box24 = new Box(390,275,30,40);
  box25 = new Box(420,275,30,40);
  box26 = new Box(450,275,30,40);
  box27 = new Box(480,275,30,40);
  //3rd Layer
  box28 = new Box(330,235,30,40);
  box29 = new Box(360,235,30,40);
  box30 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  //2nd Layer
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //top
  box16 = new Box(390,155,30,40);

  //set 2 for second stand
  //Last Layer
  box1 = new Box(640,175,30,40);
  box2 = new Box(670,175,30,40);
  box3 = new Box(700,175,30,40);
  box4 = new Box(730,175,30,40);
  box5 = new Box(760,175,30,40);
  //2nd Layer
  box6 = new Box(670,135,30,40);
  box7 = new Box(700,135,30,40);
  box8 = new Box(730,135,30,40);
  //top
  box9 = new Box(700,95,30,40);

  //ball holder with slings
  
  ball = Bodies.circle(50,200,20);
  ball.shapeColor = "pink"
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:100,y:200});

}
function draw() {
  if(bgimg)
  background(bgimg); 
  
 text("score:"+score,750, 40)
  //Engine.update(engine);
  textSize(20);
  fill("DarkGreen");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the boxes",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);

  //stand1 boxes
  fill("red");
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();
  box26.display();
  box26.score();
  box27.display();
  box27.score();
  fill("yellow");
  box28.display();
  box28.score();
  box29.display();
  box29.score();
  box30.display();
  box30.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  fill("red");
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  fill("blue");
  box16.display();
  box16.score();
  fill("red");
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  fill("blue");
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display(); 
  box8.score();

  fill("white");
   box9.display();
   box9.score();
  

  slingShot.display();
  ellipse(ball.position.x, ball.position.y, 30, 30);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
  if (keyCode == 32) {
    slingShot.attach(this.ball);
  }
}

async function BG_IMAGE()
{
  var Response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var ResponseJson = await Response.json();
  var DateTime = ResponseJson.datetime;
  var hour = DateTime.slice(11,13);
  if(hour>=06 && hour<=18)
  {
   bg="white";
  }
  else{
    bg = "black";
   }
   bgimg = bg;
  }
