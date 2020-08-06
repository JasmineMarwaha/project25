
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(400, 660, 800, 20);
	paper = new Paper(200, 450, 20);
	dustbin = new Dustbin(620, 640, 200, 20);
	dustbin2 = new Dustbin(510, 585, 20, 130);
	dustbin3 = new Dustbin(727, 582, 20, 135);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  //drawSprites();
 
}

function keyPressed () {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:0, y:-50});

	}

	if(keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:50, y:0});

	}
}



