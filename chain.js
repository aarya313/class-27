class Chain{
    constructor(bird,log){
      var options={
          bodyA:bird,
          bodyB:log,
          stiffness:0.04,
          length:7
      }  
      this.chain= Constraint.create(options)
     World.add(world,this.chain)
  }

   display(){
       var cat = this.chain.bodyA.position;
       var dog = this.chain.bodyB.position;
    line(cat.x,cat.y,dog.x,dog.y)
   }
} 