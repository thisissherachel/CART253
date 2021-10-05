"use strict";

/**************************************************
functions NOTES
Rachel B. Richard
**************************************************/

//5.1 Defining functions

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
}

function setup() {
  createCanvas(500,500);
}


function draw() {
  background(0);

  move();
  wrap();
  display();
}

function move() { //organize code with functions (refactoring)
  circle.x += circle.vx; //movement
  circle.y += circle.vy;
}

function wrap() { //organize code with functions (refactoring)
  if(circle.x > width) { //starts back at origin
    reset();
  }
}

function display() { //organize code with functions (refactoring)
  fill(0,0,255);
  ellipse(circle.x,circle.y,circle.size);
}

function reset(){ //create a function for code that is seen often. you can now call the function instead of copy/paste
  circle.x = 0; //back to origin
  circle.vx += + 2; //increase velocity
  circle.size += +5; //increase size
}

function mousePressed() {
  reset();
}
