
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var bob1 , bob2 ,bob3 , bob4 ,bob5
 var rope1,rope2,rope3,rope4,rope5
 var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,100,600,30);
	bob1=new Bob(240,400,15)
	bob2=new Bob(270,400,15)
	bob3=new Bob(300,400,15)
	bob4=new Bob(330,400,15)
	bob5=new Bob(360,400,15)
	rope3 = new Rope({x:300,y:100},bob3.body);
	rope = new Rope({x:240,y:100},bob1.body);
	rope2 = new Rope({x:270,y:100},bob2.body);
	rope4 = new Rope({x:330,y:100},bob4.body);
	rope5 = new Rope({x:360,y:100},bob5.body);
	// rope2 = new Rope(ground.body,bob2.body);
	// rope3 = new Rope(ground.body,bob3.body);
	// rope4 = new Rope(ground.body,bob4.body);
	// rope5 = new Rope(ground.body,bob5.body);
	Engine.run(engine);
  
}





	



function draw() {
  rectMode(CENTER)
  background("grey");
  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope.display();
   rope2.display();
   rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) { 
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:35,y:-20}) 

	} 
   }



