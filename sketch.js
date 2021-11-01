const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower, base ;
var blowerMouth; 
 var blowerMouth1;
var button;

function setup() {
  var canvas = createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 -280, height / 2 - 80, 80, 80);
  blower = new Blower(width /2, height / 2  +100, 800, 20);
 base = new BlowerMouth(20,30,100,400);
  blowerMouth = new BlowerMouth(width / 2 + 290, height / 2 + 65, 20, 50);
  blowerMouth1  = new BlowerMouth(width / 2 + 100, height / 2 + 65, 20, 50);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
  blowerMouth1.show(); 
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:-0.05});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
 // Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

