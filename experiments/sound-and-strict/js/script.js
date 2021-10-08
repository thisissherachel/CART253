"use strict";

/**************************************************
Sounf and Strict NOTES
Rachel B. Richard
**************************************************/

//6.1 Sound

//need sound library for sound in java (p5.sound.min.js)
//sound will only play AFTER user nteraction so it cannot be implemented in setup()

let music;

// preload()
function preload(){
  music = loadSound(`assets/sounds/bark.wav`);
}

// setup()
function setup() {
  createCanvas(500,500);
}

// draw()
function draw() {
  background(0);
}

// event handlers
function mousePressed() {
  // music.play(); //plays the sound everytime the mouse is pressed (different files play on different browsers - mp3 is safest)
  tryMusic();
}

function keyPressed() {
  tryMusic();
}

function tryMusic() {
  if (!music.isPlaying()) { //checks if music is playing and if it is dont play it again
    music.loop(); //loops sound
  }
}
