class Canon {

    constructor(direction, cX, cY, img){
        this.direction = direction;
        this.x = cX
        this.y = cY
        this.img = img;
    }

    display(){
        rect(width/2, height/2, 100,100);
    }
    update(){
        rect(width/2, height/2, 200, 200);
    }
}
