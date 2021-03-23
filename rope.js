class Rope{
    constructor(PointA, bodyB){
        var options = {
            pointA: PointA,
            bodyB: bodyB,
            stiffness: 0.04,
    //        length: 9
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.pointA;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}