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

// //10.2 Oscillators
// //creating music with a computer
//
// let siren; // To store our oscillator
// let angle = 0; // The angle we'll use to oscillate the siren
// let angleIncrease = 0.1; // How much to increase the angle each frame
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create a new oscillator
//   siren = new p5.Oscillator(0, `sine`);
//   // Set its amplitude down a bit or this could hurt
//   siren.amp(0.25);
// }
//
// function draw() {
//   background(0);
//
//   // Increase the angle
//   angle += angleIncrease;
//   // Calculate the result of the sine of the current angle
//   let sinAngle = sin(angle);
//   // Map the result (between -1 and 1) to a frequency range
//   let newFreq = map(sinAngle, -1, 1, 440, 880);
//
//   // Set the frequency of the oscillator based on the sin calculation
//   siren.freq(newFreq);
// }
//
// // mousePressed() starts our siren
// function mousePressed() {
//   siren.start();
// }

// //10.3 PolySynth
// //creating a synthesizer
//
// // Our synthesizer
// let synth;
// // musical notes ("b" means "flat" if you haven't seen it before)
// let notes = [`F2`, `G2`, `Ab3`, `Bb3`, `C4`, `Db4`, `Eb4`, `F5`];
// // The current note to play, start at the beginning
// let currentNote = 0;
// // To track the interval that plays note
// let interval;
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create the synthesizer
//   synth = new p5.PolySynth();
// }
//
// function draw() {
//   background(0);
// }
//
// // mousePressed() starts and stops our piano playing
// function mousePressed() {
//   // First check that the piano isn't already playing
//   // The interval will be undefined if it hasn't started
//   if (interval === undefined) {
//     // Start our interval, calling playNextNote every 500 milliseconds
//     // Assign the result to interval to remember the interval
//     interval = setInterval(playNextNote, 500);
//   }
//   else {
//     // If they click when it's playing, clear the interval and set interval
//     // back to undefined to stop play
//     clearInterval(interval);
//     interval = undefined;
//   }
// }
//
// // playNextNote() plays the next note in our array
// function playNextNote() {
//   // Chose the note at the current position
//   let note = notes[currentNote];
//   // Play it
//   synth.play(note, 0.2, 0, 0.4);
//   // Increase the current position and go back to 0 when we reach the end
//   currentNote = currentNote + 1;
//   if (currentNote === notes.length) {
//     currentNote = 0;
//   }
// }

// //10.4 p5.AudioIn
// //how to make a program interactive with sound
//
// // The microphone
// let mic;
// // A ghost
// let ghost;
// // A clown image
// let clownImage;
//
// function preload() {
//   clownImage = loadImage(`assets/images/clown.png`);
// }
//
// function setup() {
//   createCanvas(600, 600);
//
//   // Create our AudioIn object
//   mic = new p5.AudioIn();
//   // Try to connect to the user's microphone
//   mic.start();
//   // Create our ghost
//   ghost = createGhost(clownImage);
// }
//
// // Create a ghost in the center of the screen with various
// // ghostly properties
// function createGhost(ghostImage) {
//   let ghost = {
//     x: width / 2,
//     y: height / 2,
//     vx: 0,
//     vy: 0,
//     happySpeed: 1, // How fast the ghost moves when happy
//     scaredSpeed: 25, // How fast the ghost moves when scared
//     image: ghostImage, // The image to display
//     alpha: 50, // How transparent is the ghost,
//     state: `happy`, // How does the ghost feel right now?,
//     scaredThreshold: 0.2 // How loud a sound makes the ghost afraid?
//   };
//   return ghost;
// }
//
// function draw() {
//   background(0);
//
//   // Get the current level of sound going into the microphone
//   let level = mic.getLevel();
//
//   // Check if the ghost gets scared
//   if (level > ghost.scaredThreshold) {
//     ghost.state = `afraid`;
//     // The ghost should run away to the right
//     ghost.vx = ghost.scaredSpeed;
//   }
//
//   // Check if the ghost is happy at the moment
//   if (ghost.state === `happy`) {
//     // If the ghost is happy, it moves around randomly
//     let r = random(0, 1);
//     if (r < 0.1) {
//       ghost.vx = random(-ghost.happySpeed, ghost.happySpeed);
//       ghost.vy = random(-ghost.happySpeed, ghost.happySpeed);
//     }
//   }
//
//   // Move the ghost
//   ghost.x += ghost.vx;
//   ghost.y += ghost.vy;
//
//   // Display the ghost
//   push();
//   tint(255, ghost.alpha);
//   image(ghost.image, ghost.x, ghost.y);
//   pop();
// }
