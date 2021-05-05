var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	/*wallPosition=width/2-100
 	wallY=610;


 	leftWallSprite=createSprite(wallPosition, wallY, 20,100);
 	leftWallSprite.shapeColor=color(255,0,0);

 	leftWalltBody = Bodies.rectangle(wallPosition+20, wallY, 20,100 , {isStatic:true} );
 	World.add(world, leftWallBody);

 	*/

	//create right wall spirte and right wall body similar to left sprite and left body - change position only
	
	//create bottom wall sprite and bottom wall body - change position as well as height and width as well
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if ( keyCode=== DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);    
  }
}

function keyPressed(){
	if (keyCode=== RIGHT_ARROW){
		//Matter.Body.setStatic(packageBody,false);
		helicopterSprite.x=helicopterSprite.x+20;
    		translation={x:20,y:0}
    		Matter.Body.translate(packageBody, translation)
	}
}

function keyPressed(){
	if (keyCode=== LEFT_ARROW){
		//Matter.Body.setStatic(packageBody,false);
		//add code for left arrow key by making changes un right arrow code
		//(instead of 20, it will be -20 
	}
}
