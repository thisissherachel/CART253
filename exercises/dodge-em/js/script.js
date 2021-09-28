"use strict";

/**************************************************
Dodge-em
Rachel B. Richard

ACTICITY 04

1. Display the COVID-19 circle and move it across the screen, starting at a random y
2. Make the COVID-19 circle move back to the left if it goes off the right side
3. Display the user circle at the mouse location
4. Check if the two circles overlap and, if they do, stop the program
5. Display random static in the background for a visual flourish
6. Hide the mouse cursor

**************************************************/

let covid19 = { //creating the covid19 circle object
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: { //creating the red fill property with object inside of object
    r: 255,
    g: 0,
    b: 0,
  }
};

let user = { //creating the object fro the interactive mouse
  x: 250,
  y: 250,
  size:100,
  fill: 100,
};

let numStatic = 1000; //creating variable for the display static

// SETUP()
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  //setting up the covid19 settings
  covid19.y = random(0,height); //moving at random y position
  covid19.vx = covid19.speed; //moving horizontally with its speeed

  //removing cursor
  noCursor();
}


// DRAW()
//for frame by frame program running
function draw() {
  background(0);

  //display static
  for (let i = 0; i < numStatic; i++){ //a for loop saying it starts at 0, goes up to a number, and goes up by 1 ever time
    //genrating a point randomly on the window
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

  //covid19  movement
  covid19.x += covid19.vx; //standard moving property
  covid19.y += covid19.vy;

  if (covid19.x > width) { //keep it in the width and continue the random y position
    covid19.x = 0;
    covid19.y = random(0,height);
  }

  //user movement
  user.x = mouseX; //setting user position to the mouse position
  user.y = mouseY;

  //check for catching Covid19
  let d = dist(user.x,user.y,covid19.x,covid19.y); //finding the distance between user and Covid19
  if (d < covid19.size/2 + user.size/2) { //finding when they overlap
    noLoop(); //stop the simulation once above is true
  }

  //display covid19
  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  ellipse(covid19.x,covid19.y,covid19.size);

  //display user
  fill(user.fill);
  ellipse(user.x,user.y,user.size);
}
