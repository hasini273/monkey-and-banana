



var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var  Ground;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  Ground = createSprite(200,350,900,10);
  Ground.velocityX=-4;
  Ground.x = Ground.width /2;
  
  
  
 foodGroup = createGroup(); 
  obstacleGroup=createGroup();
  
}
function draw() {
background("lightblue");
  monkey.collide(Ground);
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
    if (Ground.x < 0){
      Ground.x = Ground.width/2;
    }
  Banana();
  obsticle();
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE"+score,500,50);
  
 stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME"+survivaltime,100,50);
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
     }
    
  drawSprites();
}
  function Banana(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.125; 
     banana.y=Math.round(random(120,200));
    banana.velocityX=-7;
    banana.setLifetime=100;
    foodGroup.add(banana);
  }
  }
  function obsticle (){
    if(World.frameCount%150===0){
    obstacle=createSprite(400,330,20,20);
      obstacle.velocityX=-4;
      obstacle.x=Math.round(random(100,300));
   obstacle.setLifetime=100;
      obstacle.addImage(obstacleImage);
       obstacle.scale = 0.1;
      obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
      if(monkey.isTouching(obstacleGroup)){
     survivaltime=0;
     }
     obstacleGroup.add(obstacle);
      if(obstacle.isTouching(monkey)){
      
      }
    }
  }
     






