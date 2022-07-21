class Button {

    constructor(inX, inY, inImg){
        this.x = inX;
        this.y = inY;
        this.img = inImg;
    };

    display() {
        stroke(0);

        if (this.over()) {
            tint(204, 0, 128);
        } else {
            noTint();
        }
      
        image(this.img, this.x, this.y);
    };
}