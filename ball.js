class Ball{
    constructor(){
    

        
    
    this.polygon = Bodies.circle(50,200,20)
   
    
    this.image = loadImage("polygon.png")
    World.add(world,this.polygon)
    
    }
    display(){
   
   
     
    
    imageMode (CENTER)
    image(this.image,this.polygon.position.x,this.polygon.position.y,40,40)
    
    
    }
}