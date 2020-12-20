
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
engine = Engine.create();
world = engine.world;
var dustbin;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(1200,600);
	ball = new Paper(100,450,20);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue");
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
 
 ball.display();
 dustbin.display();
 drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:23,y:-23});
}
}


