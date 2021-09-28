"use strict";

/**************************************************
Dodge-em
Rachel B. Richard

EXERCISE 02

1. Change the way the user controls their circle
2. Add at least one new if-statement (including at least an else)
3. Change the way the simulation looks
4. Use at least one image

Program is about avoiding the negativity. You are happy until you touch the negativity object.
The environment is happy with hearts until you touch object, it switches to darkness and sluggyness.

**************************************************/

let nagativity = { //creating the negativity object
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  }
};

let user = { //creating the object for the interactive mouse
  x: 250,
  y: 250,
  size:100,
  fill: 100,
};


//PRELOAD
//for images and asets goign to be used in the running grogram
function preload(){
  negativity = loadImage('assets/images/negativity.jpg')
  user = loadImage('assets/images/happy.jpg')
}

// SETUP()
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  //setting up the negativity settings
  negativity.y = random(0,height); //moving at random y position
  negativity.vx = negativity.speed; //moving horizontally with its speeed

  //removing cursor
  noCursor();
}


// DRAW()
//for frame by frame program running
function draw() {
  background(0);

  //negativity display
  imageMode(CENTER);
  image(negativity, width, height);

  //user display
  imageMode(CENTER);
  image(user, width, height);

  //negativity  movement
  negativity.x += negativity.vx; //standard moving property
  negativity.y += negativity.vy;

  if (negativity.x > width) { //keep it in the width and continue the random y position
    negativity.x = 0;
    negativity.y = random(0,height);
  }

  //user movement
  user.x = mouseX; //setting user position to the mouse position
  user.y = mouseY;

  //check for catching Covid19
  let d = dist(user.x,user.y,negativity.x,negativity.y); //finding the distance between user and Covid19
  if (d < negativity.size/2 + user.size/2) { //finding when they overlap
    noLoop(); //stop the simulation once above is true
  }

  //display negativity
  fill(negativity.fill.r,negativity.fill.g,negativity.fill.b);
  ellipse(negativity.x,negativity.y,negativity.size);

  //display user
  fill(user.fill);
  ellipse(user.x,user.y,user.size);
}
