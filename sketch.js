
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, ground, stone;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(300, 300, 25, 100);
	ground = new Ground(600, 490, 1200, 25);
	stone = new Stone(600, 250, 100, 100);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  ground.display();
  hammer.display();
  stone.display();
   
}



