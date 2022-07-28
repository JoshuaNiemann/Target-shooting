
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
let projSpeedMulti = 3;
let targetX;
let targetY;
let targetwidth;
let targetheight;
let wallheight;
let hit = false;
let bouncemultiplier = 1;
let score = 0;
let highscore = 0
let life = 3
let gamewidth;

let startpage = false;
let gameover = false;
let ingame = true;

//------------------------------------------------


//--------------------------------------------------------------------------
function preload() {
    imageLeft = loadImage('assets/ButtonLeftNew.png');
    imageRight = loadImage('assets/ButtonRightNew.png');
    imageFire = loadImage('assets/ButtonFireNew.png');
    imageBackground = loadImage('assets/Sketches.png');
    
}

function setup(){
    const ctx = document.querySelector('canvas').getContext('2d');
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);
    colorMode(RGB, 255, 255, 255, 1);
    localStorage

    
    let canvas = createCanvas(window.innerWidth, window.innerHeight-7);
    if(width > height){
        gamewidth = height;
    }else if(width < height){
        gamewidth = width;
    }
    projX = width/2;
    projY = height-100;
    projSpeedX = 5;
    projSpeedY = 5;
    wallheight = 50;
    const image1 = imgLeft;

    newTarget()

};
//--------------------------------------------------------------------------    
function draw(){
    background(50);
    image(imageBackground, width/2, height/2-500,)

    if (startpage == true && ingame == false && gameover == false){
        drawstartpage();
    }else if (startpage == false && ingame == false && gameover == true){
        drawgameoverpage()
    }else if(startpage == false && ingame == true && gameover == false){

    if (projIsShooting == true){
        drawProj();
    }else{
    
    }

    //canon
    stroke(255);
    strokeWeight(20);
    drawLine(canonDirection);
    fill(150);
    noStroke();
    circle(width/2, height-100, height/6);

    //taskbar
    fill(100);
    rect(width/2, height, width, 200);

    //Wall
    rectMode(CORNER);
    rect(0, 0, width, wallheight);
    rectMode(CENTER);

    //Wall L R
    rect(width/2-gamewidth/2-10, height/2, 20, height);
    rect(width/2+gamewidth/2+10, height/2, 20, height);

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
    fill(30)
    ellipse(width/2 - 100, height-35, 85, 60)
    ellipse(width/2 + 100, height-35, 85, 60)
    ellipse(width/2, height-38, 100, 70)
    image(imageFire, width/2, height-60, 100, 100);
    image(imageRight,width/2 + 100, height-50, 80, 80);
    image(imageLeft, width/2 - 100, height-50, 80, 80);
    
    //scoreboard
    textAlign(CENTER);
    textSize(height/40);
    fill(255)
    text("highscore: "+ highscore +"   score: "+ score +"   Lifes: "+ life ,width/2, 0+30 );
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
        if (canonDirection > 30.5)
        canonDirection -= 0.3;
    }
      
    if (keyIsDown(RIGHT_ARROW)) {
        if (canonDirection < 149.6)
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

    if (canonDirection > 30.5 &&
        mouseIsPressed == true && 
        mouseX >= buC - 40 -100 &&
        mouseX <= buC + 40 -100 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        canonDirection -= 0.3;
        }

    if (canonDirection < 149.6 &&
        mouseIsPressed == true && 
        mouseX >= buC - 40 +100 &&
        mouseX <= buC + 40 +100 &&
        mouseY >= buH - 40 &&
        mouseY <= buH + 40)
        {
        canonDirection += 0.3;
        }   
    }
}
//--------------------------------------------------------------------------

function drawstartpage(){
    

}
function drawgameoverpage(){


}

function drawLine(angle){
    
    const rad = (angle+180)/180* Math.PI

    let x0 = width/2;
    let y0 = height-100;

    let x1 = width/2 + height/9 * Math.cos(rad);
    let y1 = height-100 + height/9 * Math.sin(rad);

    line(x0,y0,x1,y1);
}


function drawProj() {
    circle(projX, projY, projsize);
    projX = projX + (projSpeedX * projSpeedMulti);
    projY = projY - (projSpeedY * projSpeedMulti);
    if (projX + projsize/2 >= (width/2+gamewidth/2) || projX - projsize/2 <= (width/2-gamewidth/2)){
        projSpeedX = projSpeedX * -1;
        bouncemultiplier +=1;
    }
    if (projY + projsize/2 >= height-100 || projY - projsize/2 <= wallheight){
        projSpeedY = projSpeedY * -1;
        bouncemultiplier +=1;
    }

    if (projX + projsize/2 >= width/2-((height/6)/2) && projX -projsize/2 <= width/2+((height/6)/2) &&
        projY -projsize/2 >= (height-100)-(height/6)/2 && projY -projsize/2 <= height-100 && bouncemultiplier > 1) {
            projLifeTime = projLifeTimeMax;
        }

    if (projX + projsize/2 >= targetX && projX -projsize/2 <= targetX + targetwidth &&
        projY -projsize/2 >= targetY && projY -projsize/2 <= targetY + targetheight) {
            hit = true;
            projLifeTime = projLifeTimeMax;
        }
    

    projLifeTime ++;

    if (projLifeTime >= projLifeTimeMax){
        if (hit == true){
            score += 1 + score*bouncemultiplier;
            hit = false;
        } else if(hit == false){
            life -= 1;
            if(life == 0){
                gameover = true;
                ingame = false;
                startpage = false;
            }
        }
        bouncemultiplier = 1;
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
    targetX = random((width/2)-(gamewidth/2), (width/2)+(gamewidth/2)-targetwidth)
    targetY = wallheight;
}


