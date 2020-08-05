const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var polygon, polygon_img;
var slingshot;

function preload(){

polygon_img = loadImage("polygon.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1= new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 155, 30, 40);

polygon = Bodies.circle(50, 300, 50);
World.add(world, polygon);
slingshot = new SlingShot(this.polygon, {x:100, y:300});
}


function draw() {
  background(0, 0, 0);  
 
imageMode(CENTER);
image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  stand1.display();
  stand2.display();
fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
fill("purple");
  box6.display();
  box7.display();
  box8.display();
fill("yellow");
  box9.display();

  slingshot.display();
  
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});

}

function mouseReleased(){
slingshot.fly();


}
function keyPressed(){
if(keyCode===32){
slingshot.attach(this.polygon);
}
}