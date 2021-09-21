"use strict";

/**************************************************
Variables experiment
Rachel B Richard
**************************************************/
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 100;
let circleSpeed = 2;
let circleAcceleration = 0.25;

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
function draw() {
    background(backgroundShade);
    circleSize = circleSize + 1
    circleY = circleY - 1
    circleX += circleSpeed;
    circleSpeed += circleAcceleration;
    ellipse(circleX,circleY,circleSize);


}
