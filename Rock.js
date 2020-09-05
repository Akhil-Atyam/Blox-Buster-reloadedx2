class rock {
    constructor(x,y){
        // Creating matter body
        var options = {
            restitution:0.8,
            density:1.8

        }
        this.body = Bodies.polygon(x,y,6,30,options);
        World.add(world,this.body);
    }
    display(){
        //creating rock image
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,25,25);
        beginShape();
        noStroke();
        rotate(this.body.angle);
        fill("orange");
        vertex(15,-27);
        vertex(-15,-27);
        vertex(-30,0);
        vertex(-15,27);
        vertex(15,27);
        vertex(30,0);

        endShape();
        pop();
    }
}