
let buttonLeft;
let buttonRight;
let buttonMiddle;
let imgLeft;

let canonDirection = 90;
let canonX = 0;
let canonY = 100;
let projIsShooting = false;
let projLifeTime = 0;
let projLifeTimeMax = 500
let projsize = 15;
let projX;
let projY;
let projSpeedX; 
let projSpeedY;
let speedDirectionX;
let speedDirectionY;
let projSpeedMulti = 2;
let targetX;
let targetY;
let targetwidth;
let targetheight;
let wallheight;
let hit = false;
let score = 0;

let sound1;
//------------------------------------------------


//--------------------------------------------------------------------------
function preload() {
    imgLeft = loadImage('assets/ButtonLeft.png');
    imgRight = loadImage('assets/ButtonRight.png');
    sound1 = new Audio('assets/Audio/beep1.mp3');
}

function setup(){
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);
    colorMode(RGB, 255, 255, 255, 1);

    let canvas = createCanvas(innerWidth,innerHeight);
    projX = width/2;
    projY = height-100;
    projSpeedX = 5;
    projSpeedY = 5;
    wallheight = height/20;

    newTarget()

};
//--------------------------------------------------------------------------    
function draw(){
    background(50);
    


    if (projIsShooting == true){
        drawProj();
    }else{
    
    }

    //canon
    stroke(255);
    strokeWeight(20);
    drawLine(canonDirection);

    //taskbar
    fill(150);
    noStroke();
    circle(width/2, height-100, height/6);
    fill(100);
    rect(width/2, height, width, 200);

    //Wall
    rectMode(CORNER);
    rect(0, 0, width, wallheight);
    rectMode(CENTER);

    //Target
    rectMode(CORNER);
    fill(200);
    rect(targetX, targetY, targetwidth, targetheight);
    rectMode(CENTER);

    //number
    textSize(height/20);
    fill(255)
    text((round(canonDirection)) , width/2, height-110);

    //buttons
    rect(width/2, height-50, 80);
    rect(width/2 + 100, height-50, 80);
    rect(width/2 - 100, height-50, 80);

    //scoreboard
    textAlign(CORNER);
    textSize(height/40);
    fill(255)
    text("score: "+ score, height/15, height/30);
    textAlign(CENTER);


    if (keyIsDown(UP_ARROW)) {
        if (projIsShooting == false){
            
         
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
    }

    if (keyIsDown(LEFT_ARROW)) {
        if (canonDirection > 15)
        canonDirection -= 0.3;
    }
      
    if (keyIsDown(RIGHT_ARROW)) {
        if (canonDirection < 165)
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

    if (canonDirection > 15 &&
        mouseIsPressed == true && 
        mouseX >= buC - 40 -100 &&
        mouseX <= buC + 40 -100 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        canonDirection -= 0.3;
        }

    if (canonDirection < 165 &&
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
    circle(projX, projY, projsize, projsize);
    projX = projX + (projSpeedX * projSpeedMulti);
    projY = projY - (projSpeedY * projSpeedMulti);
    if (projX + projsize/2 >= width || projX - projsize/2 <= 0){
        projSpeedX = projSpeedX * -1;
        sound1.play();
        sound1.loop = false;
    }
    if (projY + projsize/2 >= height-100 || projY - projsize/2 <= wallheight){
        projSpeedY = projSpeedY * -1;
        sound1.play();
        sound1.loop = false;
    }
    if (projX + projsize/2 >= targetX && projX -projsize/2 <= targetX + targetwidth &&
        projY -projsize/2 >= targetY && projY -projsize/2 <= targetY + targetheight) {
            hit = true;
            projLifeTime = projLifeTimeMax
        }
    

    projLifeTime ++;

    if (projLifeTime >= projLifeTimeMax){
        if (hit == true){
            score += 1
            hit = false
        } else if (hit == false){
            wallheight += height/20
        }
        projX = width/2;
        projY = height-100;
        projLifeTime = 0;
        projIsShooting = false;
        newTarget()
    }
}

function newTarget() {
    targetwidth = height/20;
    targetheight = height/40;
    targetX = random(0, width-targetwidth)
    targetY = wallheight;
}


