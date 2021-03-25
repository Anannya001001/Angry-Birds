// Number
var num = 10
console.log(num)

// String
var str = "10"
console.log(str)

// Boolean
var bool = false
console.log(bool)

// Null
var obj = null
console.log(obj)

// Undefined
var obj1;
console.log(obj1)

// Array
var arr = [10,"Student",true]
console.log(arr)

var arr2 = [[10,"Student",true],[20,"Teacher",false]]
console.log(arr2)
console.log(arr2[1][0])

arr.push(13)
console.log(arr)
console.log(arr.pop())
console.log(arr)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;
var gameState="TakeOff"

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
    getBg()   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,15);

    
    slingshot = new Sling(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background(207,255,229);
    }
    
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.Score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.Score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    
    slingshot.display(); 
    
    textSize(24);
    text("SCORE: "+score,999,50)

    //getTime()
}
function mouseDragged(){
    if(gameState !== "Launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    slingshot.fly()
    gameState="Launch"
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)
        gameState="TakeOff"
        bird.trajectory=[]
    }

}
async function getBg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responseJSON = await response.json()

   var dateTime = responseJSON.datetime
   var hour = dateTime.slice(11,13)
   if(hour>=06 && hour<=19){
    bg = "sprites/bg.png";
}
else{
    bg = "sprites/bg2.jpg";
}

backgroundImg = loadImage(bg);
}