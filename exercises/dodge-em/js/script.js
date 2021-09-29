"use strict";

/**************************************************
Dodge-em
Rachel B. Richard

EXERCISE 02

1. Change the way the user controls their user
2. Add at least one new if-statement (including at least an else)
3. Change the way the simulation looks
4. Use at least one image

Program is about avoiding the negativity. You are happy until you touch the negativity object.
The environment is happy with hearts until you touch object, it switches to darkness and sluggyness.

**************************************************/

let negativity = { //creating the negativity object
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 20,
  image: undefined,
};

let user = { //creating the object for the interactive mouse
  x: 250,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 1,
  maxSpeed: 20,
  image: undefined,
  image2: undefined,
};

function handleInput() { //settings for resetting the game
  if (keyIsPressed(ENTER)) {
    reset();
  }
}

function reset() { //resetting all of properties to starting values
  negativity.x = 0;
  negativity.y = 250;
  negativity.y = 0;

  user.x = 250;
  user.y = 250;
  user.vx = 0;
  user.ax = 1;
}

//PRELOAD
// for images and asets going to be used in the running grogram
function preload(){
  negativity.image = loadImage('assets/images/negativity.png');
  user.image = loadImage('assets/images/happy.png');
  user.image2 = loadImage('assets/images/sad.png');
}

// SETUP()
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  //setting up the negativity settings
  negativity.y = random(0, height); //moving at random y position
  negativity.vx = negativity.speed; //moving horizontally with its speeed

  //removing cursor
  noCursor();
}


// DRAW()
//for frame by frame program running
function draw() {
  background(255,255,255);

  //negativity display
  imageMode(CENTER);
  image(negativity.image,negativity.x,negativity.y,100,100);

  //user display

  imageMode(CENTER);
  image(user.image,user.x,user.y,100,100);

  // movement of negativity
  negativity.x = negativity.x + negativity.speed;

  if (negativity.x > width || negativity.x < 0) { //keep it in the width and continue the random y position
    negativity.speed = -negativity.speed;
    negativity.y = random(0, height);
  }

  //user movement
  if (mouseX < user.x) {   //accelerating towards mouse as you move
    user.ax = -user.acceleration;
  }
  else {
    user.ax = user.acceleration;
  }

  if (mouseY < user.y) {
    user.ay = -user.acceleration;
  }
  else {
    user.ay = user.acceleration;
  }

  user.vx = user.vx + user.ax; //updates users position with acceleration
  user.vx = constrain(user.vx,-user.maxSpeed,user.maxSpeed); //limits the acceleration
  user.vy = user.vy + user.ay;
  user.vy = constrain(user.vy,-user.maxSpeed,user.maxSpeed);

  user.x = user.x + user.vx; //updates users position with velocity
  user.y = user.y + user.vy;

  //check for catching negativity
  let d = dist(user.x,user.y,negativity.x,negativity.y); //finding the distance between user and negativity
  if (d < negativity.size/2 + user.size/2) { //finding when they overlap
    image(user.image2, user.x, user.y,100,100); 
    user.image = user.image2;
    noLoop(); //stop the simulation once above is true
  }
}
