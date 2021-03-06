"use strict";

/**************************************************
Sound Activity
Rachel B. Richard

A program that plays music based on primitive physics.
Balls appear once you click and sound is affected with it's position
**************************************************/

// sounds created
let balls = [];

// F-minor
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

// setup()
//
// Just creates the canvas.
function setup() {
  createCanvas(windowWidth,windowHeight);

  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y) {
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
