
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
    let canon = new Canon(canonDirection, width/2, height-100, imgCanon);

};
    

function draw(){
    background(50);
    

    fill(150);
    noStroke();
    circle(width/2, height-100, height/6);
    fill(100);
    rect(width/2, height, width, 200);

    textSize(50);
    fill(255)
    text((round(canonDirection)+'°') , width/2, height/2);

    rect(width/2, height-50, 80);
    rect(width/2 + 100, height-50, 80);
    rect(width/2 - 100, height-50, 80);
    
    if (keyIsDown(LEFT_ARROW)) {
        if (canonDirection > 0)
        canonDirection -= 0.3;
    }
      
    if (keyIsDown(RIGHT_ARROW)) {
        if (canonDirection < 180)
        canonDirection += 0.3;
    }

    const buC = width/2;
    const buH = height-50;

    if (mouseIsPressed == true && 
        mouseX >= buC - 40 &&
        mouseX <= buC + 40 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        
        }

    if (canonDirection > 0 &&
        mouseIsPressed == true && 
        mouseX >= buC - 40 -100 &&
        mouseX <= buC + 40 -100 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        canonDirection -= 0.3;
        }

    if (canonDirection < 180 &&
        mouseIsPressed == true && 
        mouseX >= buC - 40 +100 &&
        mouseX <= buC + 40 +100 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        canonDirection += 0.3;
        }   
    
}




