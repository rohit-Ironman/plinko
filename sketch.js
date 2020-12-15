const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var bottomBoundary, topBoundary; 
var leftBoundary, rightBoundary;
var ground; 
var division1, division2, division3, division4, division5, division6, division7, division8;
var gameState = "start"; 
 var score=0;
 var count=0;
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var particle;

function setup() {
  createCanvas(600,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world;

  //Make the Boundaries 

  bottomBoundary = new Boundary(400,790,800,20);

  leftBoundary = new Boundary(10, 400,20,800);
  rightBoundary = new Boundary(590,400,20,800);
 ground = new Ground(300,780,560,12);
  division1 = new Division(20, 600);
  division2 = new Division(100,600);
  division3 = new Division(180,600);
  division4 = new Division(260,600);
  division5 = new Division(340,600);
  division6 = new Division(420,600);
  division7 = new Division(500,600);
  division8 = new Division(580,600);
  
  



   for (var j = 75; j <=width; j=j+100) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+100) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+100) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+ 100) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   

   



}

function draw() {
  background("black");  
  Engine.update(engine);
  bottomBoundary.display();

  leftBoundary.display();
  rightBoundary.display();
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 15, 550);
  text(" 500 ", 100, 550);
  text(" 500 ", 180, 550);
  text(" 500 ", 260, 550);
  text(" 100 ", 340, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 500, 550);
  
  
  Engine.update(engine);
  
  
  

  if ( gameState =="end") {
    
   textSize(100);
   text("GameOver", 80, 250);
   //return
 }

 

 

 for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

}


function mouseReleased()
 {
  if(gameState!=="end")
  {
    count++;
  particle= new  Particle(mouseX,10,10,10);
  
}
 }
function keyPreesed(){
if(keyCode===32 && gameState==="end"){

  gameState="start";
  score=0
}


}