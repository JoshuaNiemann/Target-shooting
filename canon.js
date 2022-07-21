class Canon {

    constructor(direction, cX, cY, img){
        this.direction = direction;
        this.x = cX
        this.y = cY
        this.img = img;
    }

    display(){
        line(width/2, height/2, 100,100);
    }

}
