const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(350, 375, 250, 10);
    stand2 = new Ground(600, 300, 200, 10);

    //stand1.level1
    block1 = new Box( 370, 365, 20, 20);
  }

function draw() {
    background( 0, 0, 0);

    Engine.update(engine);

    stand1.display();
    stand2.display();

    block1.display();
}
