"use strict";

/**************************************************
Sound Activity
Rachel B. Richard

Shapes sizes chosen by the user that affects the sounds being played.
The larger the shape size the larger the frequency
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
    sound.sounds();
    sound.display();
  }
}

function mousePressed() {
  createSound(mouseX,mouseY);
}

function createSound(x, y) {
  let randomNote = random(notes);
  let image = joyImage;
  let sound = new Sound(x,y,randomNote,image);
  sounds.push(sound);

}
