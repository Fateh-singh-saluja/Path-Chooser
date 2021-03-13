
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player , backgroundImg;
var plank1,plank2,plank3,plank4,plank5,plank6,key;


function preload()
{
	backgroundImg = loadImage("bg.png");
	
}

function setup() {
	createCanvas(displayWidth-80,displayHeight-100);
	engine = Engine.create();
	world = engine.world;
	
   
	player =new Player(135,displayHeight-250,50,50);
	plank1 =new Plank(100,displayHeight-200,200,15);
	plank2 =new Plank(300,displayHeight-250,130,15);
	plank3 =new Plank(500,displayHeight-300,130,15);
	plank4 =new Plank(680,displayHeight-400,130,15);
	plank5 =new Plank(480,displayHeight-530,200,15);
	plank6 =new WeakPlank(300,displayHeight-400,130,15);
  key = new Key(480,displayHeight-590,130,50);
	





	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  player.display();
  plank1.display();
  plank2.display();
  plank3.display();
  plank4.display();
  plank5.display();
  plank6.display();
  key.display();
  
  drawSprites();
 
}
function keyPressed() {
  
  
    if (keyCode === RIGHT_ARROW) {

      player.body.position.x = player.body.position.x + 5;
    } 
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-20});

    }
    if (keyCode === LEFT_ARROW) {

      player.body.position.x = player.body.position.x - 5;

    }
 
}



