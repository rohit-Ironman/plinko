const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var bottomBoundary, topBoundary; 
var leftBoundary, rightBoundary;
var ground; 
var division1, division2, division3, division4, division5, division6, division7, division8;

function setup() {
  createCanvas(600,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world;

  //Make the Boundaries 

  bottomBoundary = new Boundary(400,790,800,20);
  topBoundary = new Boundary(400, 10, 800, 20); 
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
  

}

function draw() {
  background("black");  
  Engine.update(engine);
  bottomBoundary.display();
  topBoundary.display();
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

  
  //drawSprites();
}