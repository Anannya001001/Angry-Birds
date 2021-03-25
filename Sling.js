class Sling{
    constructor(bodyA,   pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10



        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.pointB = this.pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push() 
            strokeWeight(15);
            stroke(59,28,11);
            line(pointA.x-20,pointA.y,185,50)
            line(pointA.x-20,pointA.y,225,50)
            pop()
           image(this.sling3,pointA.x-25,pointA.y-15,15,35);
        }
        image(this.sling1,200,20);
        image(this.sling2,170,20);
    }   

    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body;
        
    }


    
}