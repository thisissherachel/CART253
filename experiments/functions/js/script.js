"use strict";

/**************************************************
functions NOTES
Rachel B. Richard
**************************************************/

//5.1 Defining functions (modularity)

// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 1,
//   vy: 0,
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
//
// function draw() {
//   background(0);
//
//   move();
//   wrap();
//   display();
// }
//
// function move() { //organize code with functions (refactoring)
//   circle.x += circle.vx; //movement
//   circle.y += circle.vy;
// }
//
// function wrap() { //organize code with functions (refactoring)
//   if(circle.x > width) { //starts back at origin
//     reset();
//   }
// }
//
// function display() { //organize code with functions (refactoring)
//   fill(0,0,255);
//   ellipse(circle.x,circle.y,circle.size);
// }
//
// function reset(){ //create a function for code that is seen often. you can now call the function instead of copy/paste
//   circle.x = 0; //back to origin
//   circle.vx += + 2; //increase velocity
//   circle.size += +5; //increase size
// }
//
// function mousePressed() {
//   reset();
// }


//5.2 Defining functions wih paraemters

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  parallels(0,50,10,2,10,10);
  parallels(0,150,20,3,15,20);
  parallels(0,250,30,5,20,30);
  parallels(0,350,40,7,25,40);
  parallels(0,450,50,9,30,50);

  function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing) {//creating a bunch of parallel lines with all these variables used in the function
    for(let i=0; i < numLines; i++) { //for loop that starts at 0, continues till 100 and goes up by one
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x,y,lineWidth,lineHeight);
      x += + lineSpacing; //draw rect to the left each time
  }
  }
}
