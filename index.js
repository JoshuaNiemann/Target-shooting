
let buttonLeft;
let buttonRight;
let buttonMiddle;
let imgLeft;
let canonDirection = 90;

function preload() {
    imgLeft = loadImage('assets/ButtonLeft.png');
    imgRight = loadImage('assets/ButtonRight.png');
    imgCanon = loadImage('assets/Canon.png');
}

function setup(){
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);

    let canvas = createCanvas(innerWidth,innerHeight);

    buttonLeft = createImg('assets/ButtonLeft.png');
    buttonLeft.position(width/2-80, height-85);
    buttonLeft.mousePressed(CDirectionL);

    buttonRight = createImg('assets/ButtonRight.png');
    buttonRight.position(width/2, height-85);
    buttonRight.mousePressed(CDirectionR);


};
    
function CDirectionL(){
    canonDirection -= 1;
}
function CDirectionR(){
    canonDirection += 1;
}


function draw(){
    background(50);
    let canon = new Canon(canonDirection, width/2, height-100, imgCanon);
    

    fill(150);
    noStroke();
    circle(width/2, height-100, height/6);
    fill(100);
    rect(width/2, height, width, 200);

    textSize(50);
    fill(255)
    text((round(canonDirection)+'°') , width/2, height/2);

    
    {
        // 107 and 187 are keyCodes for "+"
        if (keyIsDown(LEFT_ARROW)) {
            if (canonDirection > 0)
            canonDirection -= 0.3;
        }
      
        // 109 and 189 are keyCodes for "-"
        if (keyIsDown(RIGHT_ARROW)) {
            if (canonDirection < 180)
            canonDirection += 0.3;
        }
    }
};


