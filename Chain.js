class Chain{

    constructor(A,B){

        var options = {

            bodyA:A,
            bodyB:B,
            stiffness:0.5,
            length:15
        }

         this.chain = Matter.Constraint.create(options);

         World.add(world,this.chain);
        
    }

    display(){

        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
            this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}