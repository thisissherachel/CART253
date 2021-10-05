"use strict";

/**************************************************
Love, actually
Rachel B. Richard

EXERCISE 03
1. Allow the user to control one of the circles
2. Make the non-user circle move differently
3. Add at least one extra function
4. Add at least one extra ending

Try to catch love. You have a limited time to catch it.
If you catch it fast "whoa that was fast! lucky you <3"
If you catch it "YAY <3"
If you dont manage to catch it within the frames "aweeeee </3"

**************************************************/

let love = { //program controlled object
  x: 100,
  y: 100,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 50,
};

let you = { //user controlled object
  x: 500,
  y: 500,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 20,
  currentImage: undefined,
  lookingImage: undefined,
  inloveImage: undefined,
  darnImage: undefined,
  gotit: false,
};

let state = `title`; // Can be: title, simulation, yay, wow, awe

//PRELOAD
// for images and asets going to be used in the running grogram
function preload(){
  love.image = loadImage('assets/images/heart.png');
  you.searchingImage = loadImage('assets/images/eyes.png');
  you.inloveImage = loadImage('assets/images/inlove.png');
  you.darnImage = loadImage('assets/images/darn.png');
}


//SETUP
//for full program running setup
function setup() {
  createCanvas(windowWidth,windowHeight);

  // //setting up love object
  // catchMe();

  // //removing cursor
  // noCursor();
}

//DRAW
//for frame by frame program running
function draw() {
  background(255);

   if (state === `title`) {
     title();
   }
   else if (state === `simulation`) {
     simulation();
   }
   else if (state === `wow`) {
     fastinlove();
   }
   else if (state === `yay`) {
     inlove();
   }
   else if (state === `awe`) {
     nolove();
   }
}


//STATES
function title() {
  push();
  textSize(69);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  textStyle(ITALIC);
  text(`catch some love baby!`,width/2,height/2);
  pop();

  push();
  textSize(20);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`(use arrow keys to move)`,width/2,2*height/3);
  pop();
}

function simulation() {
  movementLove();
  displayLove();
  movementYou();
  displayYou();
  game();
}

function fastinlove() {
  push();
  textSize(69);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`wow that was fast!`,width/2,height/2);
  pop();
}

function inlove() {
  push();
  textSize(69);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`YAY <3`,width/2,height/2);
  pop();
}

function nolove() {
  push();
  textSize(69);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`awe </3`,width/2,height/2);
  pop();
}


//CONTROLS FOR START
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}


//LOVE DISPLAY/MOVEMENT
function movementLove() {
  //making love randomly move around the canvas
  let change = random();
  if (change < 0.025) { //5% chances of the time the love will move
    love.vx = random(-love.speed,love.speed);
    love.vy = random(-love.speed,love.speed);
  }
  //constrain to convas
  love.x = constrain(love.x,100,windowWidth-100);
  love.y = constrain(love.y,100,windowHeight-100);
  //movement
  love.x += love.vx;
  love.y += love.vy;
}

function displayLove() {
  //love displayed with image
  imageMode(CENTER);
  image(love.image,love.x,love.y,200,200);
}


//YOU DISPLAY/MOVEMENT
function movementYou() {
  handleInput()
  //constrain to convas
  you.x = constrain(you.x,100,windowWidth-100);
  you.y = constrain(you.y,100,windowHeight-100);
  //movement
  you.x += you.vx;
  you.y += you.vy;
}

function displayYou() {
  //user displayed with image
  you.currentImage = you.searchingImage;
  imageMode(CENTER);
  image(you.searchingImage,you.x,you.y,200,200);
}


//USER CONTROLS
function handleInput() {
  //user controls for the eyes
  if (keyIsDown(LEFT_ARROW)) {
    you.vx = -you.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    you.vx = you.speed;
  }
  else { //if neither of the above are true
    you.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    you.vy = -you.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    you.vy = you.speed;
  }
  else { //if neither of the above are true
    you.vy = 0;
  }
}


//GAME
function game() {
  //check for catching love
  let d = dist(you.x, you.y, love.x, love.y); //finding the distance between user and love
  if (d < love.size / 2 + you.size / 2) { //finding when they overlap
    you.gotit = true;
  }
  //stopping when true
  if (you.gotit) {
    love.speed = 0;
    inlove(); //display state
    you.currentImage = you.inloveImage; //change image
  }
}
