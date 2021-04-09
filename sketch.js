const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var score =0
var engine, world
var backgroundImage


function preload(){
  getTime();
}



function setup() {
createCanvas(1000,500);
engine = Engine.create()
world=engine.world  

ground = new Ground(400,400,200,20)
ground2 = new Ground(800,200,200,20)
box1 = new Box(840,180,20,20)
box2 = new Box(800,180,20,20)
box3 = new Box(760,180,20,20)
box4 = new Box(800,180,20,20)
box5 = new Box(800,180,20,20)

box6 = new Box(780,180,20,20)
box7 = new Box(780,180,20,20)
box8 = new Box(800,180,20,20)
box9 = new Box(820,180,20,20)
box10 = new Box(820,180,20,20)

box11 = new Box(440,380,20,20)
box12 = new Box(400,380,20,20)
box13 = new Box(360,380,20,20)
box14 = new Box(400,380,20,20)
box15 = new Box(400,380,20,20)

box16 = new Box(380,380,20,20)
box17 = new Box(380,380,20,20)
box18 = new Box(400,380,20,20)
box19 = new Box(420,380,20,20)
box20 = new Box(420,380,20,20)



polygon = new Ball()
slingshot = new SlingShot(polygon.polygon,{x:100,y:200});
}

function draw() {
  //background("brown"); 
  mouseX = console.log()
  mouseY = console.log()
if(backgroundImage)
{
  background(backgroundImage);
}

  Engine.update(engine)

ground.display();
ground2.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
textSize(20)
fill ("blue")
text (" SCORE :" +score,750,40)

polygon.display()
slingshot.display()

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();


}
function mouseDragged(){
Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY})

}
function mouseReleased()
{
slingshot.fly()
}

function keyPressed(){
if(keyCode === 32){
slingshot.attach(polygon.polygon)
}
}


 async function getTime (){
var talk = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var response =  await talk.json()
console.log(response)

var dateTime = response.datetime
console.log(dateTime)
   
var hour = dateTime.slice(11,13)
console.log(hour)

if (hour>=06  && hour<= 19 ){
bg = "daytime.png"
}
else{
bg= "night.png"
}
backgroundImage = loadImage (bg)
console.log(backgroundImage)

}








