const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var slingShot;

function setup() {
createCanvas(800,400);  
   
  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;
  ball=new Ball(200,100)
  slingShot = new Slingshot(this.ball,{x:100,y:200}); 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ball.display();
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}