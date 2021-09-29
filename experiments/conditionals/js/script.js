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
//  }
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
//   y: 250
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
//      }
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


//EVENT HANDLERS (mouse inouts)
//
// let circle = {
//   x: 250,
//   y: 250,
//   size:100,
// }
//
// let bg = {
//   r: 0,
//   g: 0,
//   b: 0,
// }
//
// // setup()
// function setup() {
//     createCanvas(500,500);
// }
//
// // draw()
// function draw() {
//     background(bg.r,bg.g,bg.b);
//     ellipse(circle.x,circle.y,circle.size);
// }

// //react to mouse click
// function mousePressed() { //colour chnages with every mouse click
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }

//react to mouse movement
// function mouseMoved() { //colour chnages when mouse moves
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }

//follows movement of mouse when being clicked
// function mouseDragged() { //colour chnages when mouse moves while you click
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }


//MOVEMENT

// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0, //allowing for movement on both x and y axis with velocity
//   vy: 0,
//   // speed: 5,
//   ax: 0, //acceleration on both x and y axis
//   ay: 0,
//   acceleration: 0.25,
//   maxSpeed: 10,
// }
//
// // setup()
// function setup() {
//    createCanvas(500,500);
// }
//
// // draw()
// function draw() {
//    background(0);

    //reactive to mouse positon by following (x-axis)
    // if (mouseX < circle.x) {
    //   circle.vx = -circle.speed;
    // }
    // else {
    //   circle.vx = circle.speed;
    // }

    //reactive to mouse positon by following (y-axis)
    // if (mouseY < circle.y) {
    //   circle.vy = -circle.speed;
    // }
    // else {
    //   circle.vy = circle.speed;
    // }

    //accelerating towards mouse as you move
    // if (mouseX < circle.x) {
    //   circle.ax = -circle.acceleration;
    // }
    // else {
    //   circle.ax = circle.acceleration;
    // }
    //
    // if (mouseY < circle.y) {
    //   circle.ay = -circle.acceleration;
    // }
    // else {
    //   circle.ay = circle.acceleration;
    // }
    //
    // circle.vx = circle.vx + circle.ax; //updates  circles position with acceleration
    // circle.vx = constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed); //limits the acceleration
    // circle.vy = circle.vy + circle.ay;
    // circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);
    //
    // circle.x = circle.x + circle.vx; //updates circles position with velocity
    // circle.y = circle.y + circle.vy;

    // ellipse(circle.x,circle.y,circle.size);
// }



//INTERMEDIATE DRAWING

let angle = 0;
let rectScale = 0;

// setup()
function setup() {
  createCanvas(500,500);
}

// draw()
function draw() {
  background(0);

//isolating settings to shapes
  // push(); //push and pop functions allows to save and restore settings so that it solely affect whats inside
  // fill(255,0,0);
  // stroke(0,255,255);
  // strokeWeight(10);
  // rect(100,100,100,100);
  // pop();
  //
  // push();
  // fill(0,0,255);
  // rect(300,100,100,100);
  // pop();

//tranformation shapes using translation (moving the origin)
  // push();
  // fill(0,0,255);
  // rect(0,0,100,100);
  // pop();
  //
  // push();
  // translate(200,100); //specifies where to move the shape
  // fill(0,255,0);
  // rect(0,0,100,100);
  // pop();
  //
  // push();
  // translate(0,200);
  // fill(0,255,0);
  // rect(0,0,100,100);
  // pop();

//tranforming shapes without using translation
  push();
  fill(0,0,255);
  rectMode(CENTER);
  translate(width/2,height/2); //making the origin to the center of the canvas
  rotate(angle); //rotates shapes using radians can be done using PI/4 or radians(degree)
  scale(rectScale); //allows us to increase size
  rect(0,0,100,100);
  pop();

  angle = angle + 0.01; //angle increases over time
  rectScale = rectScale + 0.1; //scale increases over time

}
