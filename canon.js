class Canon {

    constructor(direction, cX, cY){
        this.direction = direction;
        this.x = cX
        this.y = cY
    }

    display(){
        stroke(255);
        strokeWeight(50);
        line(width/2, height/2, width/2+500, height/2+500);
    }

}
