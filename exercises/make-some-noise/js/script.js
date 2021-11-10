"use strict";

/**************************************************
Sound Activity
Rachel B. Richard

A program that plays music based on primitive physics.
Balls appear once you click and sound is affected with it's position
**************************************************/

// sounds created
let sounds = [];

// F-minor
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

//image for object display
let joyImage;

//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  joyImage = loadImage('assets/images/happy.png');
}

//SETUP
// Just creates the canvas.
function setup() {
  createCanvas(windowWidth,windowHeight);

  userStartAudio();
}

//DRAW
// Description of draw() goes here.
function draw() {
  background(255);

  for (let i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    sound.move();
    sound.bounce();
    sound.display();
  }
}

function mousePressed() {
  createSound(mouseX,mouseY);
}

function createSound(x, y, size, minSize, maxSize) {
  let note = map(notes,size,maxSize,notes[0],notes.length);
  let sound = new Sound(x,y,note);
  sounds.push(sound);
}
