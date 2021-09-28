"use strict";

/**************************************************
Conditionals NOTES
Rachel B. Richard
**************************************************/

//CONDITIONALS INTRO

// let backgroundShade = 0
//
// let circle = {
//     x: 0,
//     y: 250,
//     size: 100,
//     speed: 5,
// }
//
// // setup()
// function setup() {
//     createCanvas(500,500);
//
// // draw()
// function draw() {
//     background(backgroundShade);

// //turns around at right of canvas
//     circle.x = circle.x + circle.speed;
//
//     if (circle.x > width) {
//         circle.speed = -circle.speed;
//     }
// //turns around at left of canvas
//     if (circle.x < 0) {
//         circle.speed = -circle.speed;
//     }

// //goes red with mouse at top of canvas
//     if (mouseY < height/2) {
//         fill(255,0,0);
//     }
// //goes red with mouse at bottom of canvas
//     if (mouseY > height/2) {
//         fill(0,0,255);
//     }

// //using else for when you conditional is false
//     if (mouseX < width/2) {
//       fill(255,0,0);
//     }
//     else {
//       fill(0,255,0);
//     }

// //using else if when you need multiple backup plans
//     if (mouseX < width/3) {
//       fill(255,0,0);
//     }
//     else if (mouseX < 2 * width/3) {
//       fill(0,255,0);
//     }
//     else {
//       fill(0,0,255);
//     }

// //using multiple conditionals
//     fill(255,255,255);
//
//     if (mouseX > width/3) {
//       if(circle.x < 2* width/3) {
//         fill(255,0,0);
//       }
//     }

// //using logic to have two conditonals where only one needs to be true
//     fill(255,255,255);
//
//     if (circle.x < width/3 || circle.x > 2 * width/3) {
//       fill(255,0,0);
//     }

// //using logic with negative conditionals
//     fill(255,255,255);
//
//     if (!(circle.x < width/3)) {
//       fill(255,0,0);
//     }

// //true/false conditionals (booleans)
//     if (mouseIsPressed === true){ // "===" always true
//       background(255);
//     }
//     else {
//       background(0);
//     }

// ellipse(circle.x,circle.y,circle.size);
// }


//LOOPS

// let caterpillar = {
//   x: 100,
//   y: 250,
//   segmentSize: 50,
// }
//
// // setup()
// function setup() {
//     createCanvas(500,500);
//
// // draw()
// function draw() {
//     background(backgroundShade);
//
// //counting loops
//     background(0);
//     noStroke();
//     fill(100,200,100);
//
// // while loops (one frame)
//     let x = caterpillar.x;
//     let numSegments = 5;
//     let segmentsDrawn = 0;
//
//     while(segmentsDrawn < numSegments){
//       ellipse(x,caterpillar.y,caterpillar.segmentSize);
//       x = x + 40;
//       segmentsDrawn++; //aka segmentsDrawn = segmentsDrawn + 1
//     }
//
// //for loops when you want to do something a set number of times (one frame)
//     let x = caterpillar.x;
//     let numSegments = 5;
//
//     for (let i = 0; i < numSegments; i++) { // aka "let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++"
//       ellipse(x,caterpillar.y,caterpillar.segmentSize);
//       x = x + 40;
//     }
// }

// //loops that continues to do somehing until it does what we want
//
// let theCircle = {
//   x: undefined,
//   y: undefined,
//   size: 100,
// }
//
// let dangerZone = {
//   x: 250,
//   y: 250,
//   size: 150,
// }
//
// // setup()
// function setup() {
//     createCanvas(500,500);
//
//     theCircle.x = random(0,width);
//     theCircle.y = random(0,height);
//
//     let d = dist(theCircle.x,theCircle.y,dangerZone.x,dangerZone.y); //variable of circle in danger zone
//     while(d < theCircle.size/2 + dangerZone.size/2) { //when the circle is in danger zone..
//       theCircle.x = random(0,width);
//       theCircle.y = random(0,height);
//       d = dist(theCircle.x,theCircle.y,dangerZone.x,dangerZone.y); //reposition and place somewhere else if in danger zone
//     }
// }
//
// // draw()
// function draw() {
//     background(0);
//
//     //dangerZone
//     noFill();
//     stroke(255,0,0);
//     ellipse(dangerZone.x,dangerZone.y,dangerZone.size);
//
//     fill(255);
//     noStroke();
//     ellipse(theCircle.x,theCircle.y,theCircle.size);
//
// }
