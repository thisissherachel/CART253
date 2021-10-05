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
Press ENTER to start over.
**************************************************/


let negativity = { //creating the negativity object
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 20,
};

let negativityTwo = { //creating another negativity object
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 10,
};

let negativityThree = { //creating another negativity object
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 30,
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
  currentImage: undefined,
  happyImage: undefined,
  sadImage: undefined,
  caught: false,
};


//PRELOAD
// for images and asets going to be used in the running grogram
function preload(){
  negativity.image = loadImage('assets/images/negativity.png');
  negativityTwo.image = loadImage('assets/images/negativity.png');
  negativityThree.image = loadImage('assets/images/negativity.png');
  user.happyImage = loadImage('assets/images/happy.png');
  user.sadImage = loadImage('assets/images/sad.png');
}



// SETUP()
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  //setting up the negativity settings
  negativity.y = random(0, height); //moving at random y position
  negativity.vx = negativity.speed; //moving horizontally with its speeed

  negativityTwo.y = random(0, height);
  negativityTwo.vx = negativityTwo.speed;

  negativityThree.y = random(0, height);
  negativityThree.vx = negativityThree.speed;

  //removing cursor
  noCursor();
}



// DRAW()
//for frame by frame program running
function draw() {

  background(254, 255, 173);

  handleInput()


  //negativity displays
  imageMode(CENTER);
  image(negativity.image,negativity.x,negativity.y,100,100);
  image(negativityTwo.image,negativityTwo.x,negativityTwo.y,100,100);
  image(negativityThree.image,negativityThree.x,negativityThree.y,100,100);

  //user display
  user.currentImage = user.happyImage;

  // movement of negativity
  negativity.x = negativity.x + negativity.speed;

  if (negativity.x > width || negativity.x < 0) { //keep it in the width and continue the random y position
    negativity.speed = -negativity.speed;
    negativity.y = random(0, height);
  }

  negativityTwo.x = negativityTwo.x + negativityTwo.speed;

  if (negativityTwo.x > width || negativityTwo.x < 0) {
    negativityTwo.speed = -negativityTwo.speed;
    negativityTwo.y = random(0, height);
  }

  negativityThree.x = negativityThree.x + negativityThree.speed;

  if (negativityThree.x > width || negativityThree.x < 0) {
    negativityThree.speed = -negativityThree.speed;
    negativityThree.y = random(0, height);
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
  let d = dist(user.x, user.y, negativity.x, negativity.y); //finding the distance between user and negativity
  if (d < negativity.size / 2 + user.size / 2) { //finding when they overlap
    user.currentImage = user.sadImage;
    user.caught = true;
  }

  let d2 = dist(user.x, user.y, negativityTwo.x, negativityTwo.y);
  if (d2 < negativityTwo.size / 2 + user.size / 2) {
    user.currentImage = user.sadImage;
    user.caught = true;
  }

  let d3 = dist(user.x, user.y, negativityThree.x, negativityThree.y);
  if (d3 < negativityThree.size / 2 + user.size / 2) {
    user.currentImage = user.sadImage;
    user.caught = true;
  }


  //user display
  imageMode(CENTER);
  image(user.currentImage,user.x,user.y,100,100);

  if (user.caught) {
    negativity.speed = 0;
    negativityTwo.speed = 0;
    negativityThree.speed = 0;
    user.vx = 0;
    user.vy = 0;
    user.acceleration = 0;
  }
}



function handleInput() { //settings for resetting the game
  if (keyIsDown(ENTER)) {
    reset();
  }
}

function reset() { //resetting all of properties to starting values

  negativity.x = 0;
  negativity.y = random(0, height);
  negativity.speed = 20;

  negativityTwo.x = 0;
  negativityTwo.y = random(0, height);
  negativityTwo.speed = 10;

  negativityThree.x = 0;
  negativityThree.y = random(0, height);
  negativityThree.speed = 30;

  user.x = 250;
  user.y = 250;
  user.vx = 0;
  user.ax = 1;
  user.acceleration = 1;
  user.vx = 0;
  user.vy = 0;
  user.caught = false;
}
