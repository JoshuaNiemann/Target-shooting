
let buttonLeft;
let buttonRight;
let buttonMiddle;
let imgLeft;

let canonDirection = 90;
let canonX = 0;
let canonY = 100;
let projIsShooting = false;
let projLifeTime = 0;
let projsize = 5;
let projX;
let projY;
let projSpeedX; 
let projSpeedY;
let speedDirectionX;
let speedDirectionY;

//--------------------------------------------------------------------------
function preload() {
    imgLeft = loadImage('assets/ButtonLeft.png');
    imgRight = loadImage('assets/ButtonRight.png');
}

function setup(){
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);

    let canvas = createCanvas(innerWidth,innerHeight);
    projX = width/2;
    projY = height-100;
    projSpeedX = 5;
    projSpeedY = 5;
};
//--------------------------------------------------------------------------    
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
    
    if (projIsShooting == true){
        drawProj();
    }


    if (keyIsDown(UP_ARROW)) {
        if (canonDirection > 0)
        drawProj(canonDirection);
    }

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

    if (projIsShooting == false && 
        mouseIsPressed == true &&
        mouseX >= buC - 40 &&
        mouseX <= buC + 40 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
            const rad = (canonDirection+180)/180* Math.PI

            speedDirectionX = width/2 + 5 * Math.cos(rad);
            speedDirectionY = height-100 + 5 * Math.sin(rad);
            if (canonDirection <= 90){
                projSpeedX = speedDirectionX - width/2;
                projSpeedY = (height-100) - speedDirectionY;
            } else if (canonDirection >= 90){
                projSpeedX = speedDirectionX - width/2;
                projSpeedY = (height-100) - speedDirectionY;
            }


            projIsShooting = true;
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
//--------------------------------------------------------------------------


function drawLine(angle){
    
    const rad = (angle+180)/180* Math.PI

    let x0 = width/2;
    let y0 = height-100;

    let x1 = width/2 + height/9 * Math.cos(rad);
    let y1 = height-100 + height/9 * Math.sin(rad);

    line(x0,y0,x1,y1);
}


function drawProj() {
    rect(projX, projY, projsize, projsize);
    projX = projX + projSpeedX;
    projY = projY - projSpeedY;
    if (projX + projsize/2 >= width || projX - projsize/2 <= 0){
        projSpeedX = projSpeedX * -1;
    }
    if (projY + projsize/2 >= height-100 || projY - projsize/2 <= 0){
        projSpeedY = projSpeedY * -1;
    }
    

    projLifeTime ++;

    if (projLifeTime == 300){
        projX = width/2;
        projY = height-100;
        projLifeTime = 0;
        projIsShooting = false;
    }



   

}


