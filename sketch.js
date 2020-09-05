//variables and constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,g1,g2,g4,c1,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,g3;
var score = 0;
var gs = 0;
var block = 0;
var color = null;
var night,day;
function preload(){
    night = loadImage("Night.png");
    day = loadImage("Morning.png");
}
function setup(){
    //canvas and engine
    var canvas = createCanvas(1280,520);
    engine = Engine.create();
    world = engine.world;
    //adding bodies
    Bodies.polygon(50,6,8,50);
    ball = new rock(400,00);
    g4 = new ground (200,260,10,10);
    g1 = new ground(640,515,1280000,10);
    g2 = new ground(975,300,150,10);
    g3 = new ground(675,400,200,10);
    c1 = new Chain(ball.body,g4.body);
    b1 = new Box(930,280,30,30,"red",1);
    b2 = new Box(960,280,30,30,"red",2);
    b3 = new Box(990,280,30,30,"red",3);
    b4 = new Box(1020,280,30,30,"red",4);
    b5 = new Box(945,250,30,30,"brown",5);
    b6 = new Box(975,250,30,30,"brown",6);
    b7 = new Box(1005,250,30,30,"brown",7);
    b8 = new Box(960,220,30,30,"teal",8);
    b9 = new Box(990,220,30,30,"teal",9);
    b10 = new Box(975,190,30,30,"#a2f5b8",10);
    b11 = new Box(615,380,30,30,"#e5b8a4",11);
    b12 = new Box(645,380,30,30,"#e5b8a4",12);
    b13 = new Box(675,380,30,30,"#e5b8a4",13);
    b14 = new Box(705,380,30,30,"#e5b8a4",14);
    b15 = new Box(735,380,30,30,"#e5b8a4",15);
    b16 = new Box(645,350,30,30,"#688648",16);
    b17 = new Box(675,350,30,30,"#688648",17);
    b18 = new Box(705,350,30,30,"#688648",18);
    b19 = new Box(675,320,30,30,"rgb(255, 100, 0)",19);
    getTime();
    
}
function draw(){
    if(color != null){
    // Engine Updation and Backgrounds
    Engine.update(engine);
    if(color === 1){
    background(day);
    }else {
        background(night);
    }
    // Displaying objects
    ball.display();
    g1.display();
    g3.display();
    c1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    //console.log(score);

    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    getTime();
    
    g2.display();
    g4.display();
    textSize(20);
    if(color === 1){
    fill("black");
    }else {
        fill("white")
    }
    text("Score : " + score,20,40);
    text("Blocks destroyed : " + block , 20,60);
    }

}
// Dragging Mechanism
function mouseDragged(){
    if(gs === 0){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

// Launching Mechanism
function mouseReleased(){
    c1.fly();
    gs = 1;
}
// Relaoding Mechanism
function keyPressed(){
    //console.log("key");
    if(keyCode === 32){
        c1.attach(ball.body);
        gs = 0;
        //console.log("if");
        }
}
async function getTime(){
    var time = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var timeJSON = await time.json();
    var dateTime = await timeJSON.datetime;
    var hour = dateTime.slice(11,13)    
    //console.log(hour);
    if(hour > 05 && hour < 18){
        color = 1;
    }else {
        color = 0;
    }
}