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
If you dont manage to catch it within the frames "awe </3 better luck next time"

**************************************************/

let love = { //program controlled object
  x: 100,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 50,
};

let you = { //user controlled object
  x: 500,
  y: 500,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 20,
  currentImage: undefined,
  lookingImage: undefined,
  inloveImage: undefined,
  darnImage: undefined,
  gotit: false,
  gotitfast: false,
  toolate: false,
};

let state = `title`; // Can be: title, simulation, fastinlove, inlove, toolate

//PRELOAD
// for images and asets going to be used in the running grogram
function preload(){
  love.image = loadImage('assets/images/heart.png');
  you.searchingImage = loadImage('assets/images/eyes.png');
  you.inloveImage = loadImage('assets/images/inlove.png'); //DIDNT MANAGE TO MAKE THE IMAGES CHANGE
  you.darnImage = loadImage('assets/images/darn.png');
}


//SETUP
//for full program running setup
function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
}

//DRAW
//for frame by frame program running
function draw() {
  background(255);
  handleInput();

   if (state === `title`) {
     title();
   }
   else if (state === `simulation`) {
     simulation();
     frameCounter();
   }

   //within 60*2 frames
   if (you.gotitfast) {
     you.currentImage = you.inloveImage; //change image //!!IMAGES DONT CHANGE AND IDK WHY
     state === `fastinlove`
     fastinlove(); //displays text
   }
   //within 60*5 frames
   else if (you.gotit) {
     you.currentImage = you.inloveImage; //change image
     state === `inlove`
     inlove(); //displays text
   }
   //past 60*5 frames
   else if (you.toolate) {
     you.currentImage = you.darnImage; //change image
     state === `toolate`
     nolove(); //displays text
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
  text(`Press ENTER to start :) \r\n (use arrow keys to move)`,width/2,2*height/3); //!!DONT KNOW HOW TO CENTER JUSTIFY WHILE CENTER POSITIONED
  pop();
}

function simulation() {
  displayLove();
  displayYou();
  movementLove();
  movementYou();
  checkforFastinlove();
  checkforInlove();
  checkforToolate();
}

function fastinlove() {
  push();
  textSize(69);
  fill(255,150,150);
  textAlign(CENTER,TOP);
  text(`whoa that was fast! lucky you <3 <3 <3`,width/2,height/4);
  pop();
}

function inlove() {
  push();
  textSize(69);
  fill(255,150,150);
  textAlign(CENTER,TOP);
  text(`YAY <3`,width/2,height/4);
  pop();
}

function toolate() {
  push();
  textSize(69);
  fill(150,150,255);
  textAlign(CENTER,TOP);
  text(`aweee </3 better luck next time`,width/2,height/4);
  pop();
}

//DISPLAY
function displayLove() {
  //love displayed with image
  image(love.image,love.x,love.y,200,200);
}

function displayYou() {
  //user displayed with image
  you.currentImage = you.searchingImage;
  image(you.currentImage,you.x,you.y,200,200);
}


//MOVEMENT
function movementLove() {
  //making love randomly move around the canvas
  let change = random();
  if (change < 0.1) { //5% chances of the time the love will move
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

function movementYou() {
  handleInput()
  //constrain to convas
  you.x = constrain(you.x,100,windowWidth-100);
  you.y = constrain(you.y,100,windowHeight-100);
  //movement
  you.x += you.vx;
  you.y += you.vy;
}


//USER CONTROLS

function handleInput() {
  //start
   if (keyIsDown(ENTER)) {
    state = `simulation`;
  }

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


//check for catching love fast
function checkforFastinlove() {
  let d = dist(you.x, you.y, love.x, love.y); //finding the distance between user and love
  if (d < love.size / 2 + you.size / 2 && frameCount < 60*5) { //finding when they overlap and check the frame count
    you.gotitfast = true;
    gamestop();
  }
}

//check for catching love fast
function checkforInlove() {
  let d = dist(you.x, you.y, love.x, love.y); //finding the distance between user and love
  if (d < love.size / 2 + you.size / 2 && frameCount < 60*10) { //caught within a certain amount of frames and check the frame count
    you.gotit = true;
    gamestop();
  }
}

//check when it is too late
function checkforToolate() {
  if (frameCount > 60*10) { //caught within a certain amount of frames
    you.toolate = true;
    gamestop();
  }
}


//frame count display
function frameCounter() {
  if (frameCount < 60*10){
    push();
    textSize(69);
    fill(0);
    textStyle(BOLD);
    textAlign(LEFT,TOP);
    text(`${frameCount}`,100,100);
    pop();
  }
  else if (frameCount > 60*10 || state === `inlove` || state === `fastinlove` || state === `toolate`) { //!!DOESNT WORK FOR WHEN IT IS IN FINISHED STATES
    push();
    textSize(69);
    fill(0);
    textStyle(BOLD);
    textAlign(LEFT,TOP);
    text(`game over`,100,100);
    pop();
  }
}

//Stop all movement
function gamestop() {
  love.vx = 0;
  love.vy = 0;
  love.speed = 0;
  you.vx = 0;
  you.vy = 0;
  you.speed = 0;
}

//reset
function mousePressed() {
  if (state === `inlove` || state === `fastinlove` || state === `toolate`) { //!!DOESNT WORK AND IDK WHY
    state === `title`;
  }
}
