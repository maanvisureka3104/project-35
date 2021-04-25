class Square{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        console.log(this.body.speed);

        if(this.body.speed<5){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          fill("yellow")
          rect(0,0,this.width, this.height);
          pop(); 
        }
      }
}