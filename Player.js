class Player {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.2,
        'friction':1.2,
        'density':0.5
         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Right.png");
      World.add(world, this.body);
    }
    display(){
      console.log("inside");
      var pos =this.body.position;
     
      imageMode(CENTER);
      image(this.image, pos.x,pos.y, this.width, this.height);
    }
  };