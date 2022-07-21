
let buttonLeft;
let buttonRight;
let buttonMiddle;
let imgLeft;
let canonDirection = 90;
let canonX = 0;
let canonY = 100;


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
    let canon = new Canon(canonDirection, width/2, height-100);

};
    
function draw(){
    background(50);
    
    stroke(255);
    strokeWeight(20);
    drawLine(canonDirection);

    fill(150);
    noStroke();
    circle(width/2, height-100, height/6);
    fill(100);
    rect(width/2, height, width, 200);

    textSize(height/20);
    fill(255)
    text((round(canonDirection)) , width/2, height-110);

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

function drawLine(angle){
    
    const rad = (angle+180)/180* Math.PI

    let x0 = width/2;
    let y0 = height-100;

    let x1 = width/2 + height/9 * Math.cos(rad);
    let y1 = height-100 + height/9 * Math.sin(rad);

    line(x0,y0,x1,y1);
}



