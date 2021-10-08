
/**************************************************
Sounf and Strict NOTES
Rachel B. Richard
**************************************************/

//6.1 Sound

//need sound library for sound in java (p5.sound.min.js)
//sound will only play AFTER user nteraction so it cannot be implemented in setup()

// let music;
//
// // preload()
// function preload(){
//   music = loadSound(`assets/sounds/bark.wav`);
// }
//
// // setup()
// function setup() {
//   createCanvas(500,500);
// }
//
// // draw()
// function draw() {
//   background(0);
// }
//
// // event handlers
// function mousePressed() {
//   // music.play(); //plays the sound everytime the mouse is pressed (different files play on different browsers - mp3 is safest)
//   tryMusic();
// }
//
// function keyPressed() {
//   tryMusic();
// }
//
// function tryMusic() {
//   if (!music.isPlaying()) { //checks if music is playing and if it is dont play it again
//     music.loop(); //loops sound
//   }
// }

//6.2 "use strict"

"use strict";
//very first line of every program
//program still would with no errors in console but it doesnt do what it needs to do.
//program assumes what you want and creates variables for you which isnt always correct.

let circle = {
  x: 0,
  y: 0,
  size: 100,
}

// setup()
function setup() {
  createCanvas(500,500);
}

// draw()
function draw() {
  background(0);
  circle.x = mouseX;
  circley = mouseY; //mistake that the program will assume you want this to create the variable.
  ellipse(circle.x,mouse.y,100);
}
