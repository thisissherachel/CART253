"use strict";

/**************************************************
Variables experiment
Rachel B Richard
**************************************************/

//**variables
let backgroundShade = 0;
// let circleX = 0;
// let circleY = 250;
// let circleSize = 200;
// let circleSpeed = 2;
// let circleAcceleration = 0.25;

//**objects with properties
let circle = {
    x: 0,
    y: 250,
    size: 200,
    speed: 1,
}

// setup()
function setup() {
    createCanvas(500, 500);
}

// draw()

//**change position with mouse
// function draw() {
//     background(255,0,0);
//     rectMode(CENTER);
//     rect(mouseX,mouseY,100,100);

//**change size with mouse
// function draw() {
//     background(255,0,0);
//     rectMode(CENTER);
//     rect(width/2,height/2,mouseX,mouseY);

//**change colour with mouse
// function draw() {
//     background(mouseX,mouseY,0);
//     rectMode(CENTER);
//     rect(width/2,height/2,100,100);

//**assigning variables
// function draw() {
//     background(backgroundShade);
//     ellipse(circleX,circleY,circleSize);

//**changing variables
// function draw() {
//     background(backgroundShade);
//     // circleSize = circleSize + 1
//     // circleY = circleY - 1
//     circleX += circleSpeed;
//     // circleSpeed += circleAcceleration;
//     ellipse(circleX,circleY,circleSize);

//**working with objects
// function draw() {
//     background(backgroundShade);
//     circle.x += circle.speed;
//     ellipse(circle.x,circle.y,circle.size);

//**introducing random numbers
function draw() {
    background(backgroundShade);
    circle.speed = random()
    circle.x += circle.speed;
    ellipse(circle.x,circle.y,circle.size);

    // let randomNumber = random(1,10);
    // console.log(randomNumber);


}
