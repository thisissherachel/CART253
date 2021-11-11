"use strict";

/**************************************************
Sound Activity
Rachel B. Richard

Shapes sizes chosen by the user that affects the sounds being played.
**************************************************/

// sounds created
let sounds = [];
let soundCreated = false;

// F-minor
let notes = [`F2`,`G2`,`Ab3`,`Bb3`,`C4`,`Db4`,`Eb6`,`F6`];

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

function createSound(x, y) {
  let note = random(notes);
  let sound = new Sound(x,y,note);
  sounds.push(sound);

}
