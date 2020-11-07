
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//mam the console is saying that this line is incorrect..(21)
	dustbin1 = new Dustbin(770,600,60,PI/2)
	// i tried to create a part of the dustbin.

	ground = createSprite(400,670,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



