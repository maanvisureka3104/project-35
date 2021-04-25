class Ball{

    constructor(x,y){
        var ball_options={
            isStatic : true
          }
        this.x=x;
        this.y=y;
        this.ball = Bodies.rectangle(this.x,this.y,25,25,ball_options)
        World.add(world,this.ball);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ball.position.x,this.ball.position.y,900,20);
    }
}