"use strict";

/**************************************************
p5.sound NOTES
Rachel B. Richard
**************************************************/

// //10.1 Reintroducing p5 sound
// //exploring the API for sound (p5 reference) : rate
//
// let barkSFX;
//
// function preload() {
//   barkSFX = loadSound(`assets/sounds/bark.wav`);
// }
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
// }
//
// function draw() {
//   background(0);
//
//   // We can calculate the rate we should set the sound to by mapping
//   // the mouse's x position to our desired range..
//   let newRate = map(mouseX, 0, width, -3, 3);
//   // And then set the rate of our sound file to the new rate
//   // Note how we can do this while the sound is still playing!
//   barkSFX.rate(newRate);
// }
//
// function mousePressed() {
//   // Since we'll be playing around with the sound, it makes sense to loop it
//   // so it doesn't stop.
//   barkSFX.loop();
// }

//10.2 Oscillators
//creating music with a computer

let siren; // To store our oscillator
let angle = 0; // The angle we'll use to oscillate the siren
let angleIncrease = 0.1; // How much to increase the angle each frame

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Create a new oscillator
  siren = new p5.Oscillator(0, `sine`);
  // Set its amplitude down a bit or this could hurt
  siren.amp(0.25);
}

function draw() {
  background(0);

  // Increase the angle
  angle += angleIncrease;
  // Calculate the result of the sine of the current angle
  let sinAngle = sin(angle);
  // Map the result (between -1 and 1) to a frequency range
  let newFreq = map(sinAngle, -1, 1, 440, 880);

  // Set the frequency of the oscillator based on the sin calculation
  siren.freq(newFreq);
}

// mousePressed() starts our siren
function mousePressed() {
  siren.start();
}
