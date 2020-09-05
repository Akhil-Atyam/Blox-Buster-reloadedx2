class Chain {
    constructor(BodyA,BodyB){
        var opt = {
            bodyA:BodyA,
            bodyB:BodyB,
            length:100,
            stiffness:0.03
        }
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(bodyA){
        this.chain.bodyA = bodyA;
    }
    display(){
        push();
        if(this.chain.bodyA != null){
        strokeWeight(5);
        stroke(51, 26, 0);
        stroke("teal")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
        }

        pop();
    }
}