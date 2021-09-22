"use strict";

/**************************************************
I like to move it move it
Rachel B. Richard

ASSIGNMENT 01
**************************************************/


//**circle
let carl = {
    x: 0,
    y: 500,
    size: 100,
    speed: 2,
    fill: 255,
}

//**triangle
let trisha = {
    x: 0,
    y: 0,
    fill: 255,
}
//**square
let simon = {
    x: 0,
    y: 0,
    maxSize: 300,
    speed: 2,
    fill: 255,
};

let angle = 0;
let angleChange = 0.01;


// setup()
function setup() {
    createCanvas(windowWidth, windowHeight)
}

// draw()
function draw() {
    background (0)
    fill(trisha.fill);

    //circle moving
    carl.x += carl.speed;
    ellipse(carl.x,carl.y,carl.size);

   //**triangle controlling the changing colour
    trisha.fill = map(mouseY,0,width,0,255);
    trisha.fill = constrain(trisha.fill, 0, width)
    triangle(mouseX,mouseY-20,mouseX+20,mouseY+20,mouseX-20,mouseY+20);

    //**square changing size
    simon.x = (windowWidth / 2);
    simon.y = (windowHeight / 2);
    rect(simon.x,simon.y,simon.maxSize*sin(angle));
    angle += angleChange;

}
