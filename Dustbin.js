class Dustbin{
    constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    Matter.Body.setAngle(this.body,angle);
    
    this.body = Bodies.rectangle(x, y, height,angle);
    this.height = height;
    World.add(world, this.body);
  }
}