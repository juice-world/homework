const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball;
var ball2;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  
  ball2 = Bodies.circle(100,50,10,ball_options);
  World.add(world,ball2);
  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  
  
  
  
  con2 = Matter.Constraint.create({
    bodyA:ball,
    pointA:{
      x:0,y:0
    },
    bodyB:ball2,
    pointB:{
      x:0,y:0
    },
    length:100,
    stiffness:0.1
  });

World.add(world,con2);



rectMode(CENTER);
ellipseMode(RADIUS);

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
