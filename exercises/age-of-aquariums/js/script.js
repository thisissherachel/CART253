"use strict";

/**************************************************
Age of Aquariums
Rachel B. Richard

EXERCISE 04
1. Add a user-controlled shape (or image)
2. Make the user interact with the joy (or whatever they are in userr simulation)
3. Change the joy (or whatever) creation
4. Add at least two endings

A bunch of joy for you to catch before the timer ends!
**************************************************/

let user = { //user controlled object
  x: 500,
  y: 500,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 1,
  speed: 20,
  maxSpeed: 20,
  currentImage: undefined,
  sadImage: undefined,
  joyImage: undefined,
  darnImage: undefined,
};

let joy = {
  image: undefined,
}

let happiness = [];
let happinessNum = 20;

let state = `title`; // Can be: title, simulation, yay, awe.
let music;
let backgroundShade;

let gameTimer = 0; //timer counting the frames during the game
let gameLength = 60 * 10; // 10 seconds till game over

//PRELOAD
// for images and assets going to be used in the running grogram
function preload() {
  joy.image = loadImage('assets/images/joy.png');
  user.sadImage = loadImage('assets/images/sad.png');
  user.joyImage = loadImage('assets/images/joy.png');
  user.darnImage = loadImage('assets/images/cry.png');

  music = loadSound('assets/sounds/happysong.mp3');
}

//SETUP
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  user.currentImage = user.sadImage; //base image for user

  for (let i = 0; i < happinessNum; i++) { //creating a for loop for the index of the array
    happiness[i] = createJoy(random(0, width), random(0, height)); // Create joy, positioned randomly
    let joy = createJoy(random(0, width), random(0, height)); //OR use .push function to just add one everytime
  }

  // creates variable with properties and returns joy
  function createJoy(x, y) {
    let joy = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size:20,
      speed: 20,
      caught: false,
    };
    return joy;
  }
}

//DRAW
//for frame by frame program running
function draw() {
  background(255);
  handleInput(); //press enter to start and user controls

  if (state === `title`) {
    title();
    user.currentImage = user.sadImage;
  } else if (state === `simulation`) {
    simulation();
  }

  //caught within set time
  if (state === `yay`) {
    joyCaught();
  }

  //past set time
  if (state === `awe`) {
    joyNotCaught();
  }
}

//SOUNDS
function mousePressed() {
  tryMusic();
}

function tryMusic() {
  //Play music if this is the first interaction
  if (!music.isPlaying()) {
    music.loop();
  }
}

//STATES
function title() {
  //intro display
  displayUser(); //interactive element
  movementUser(); // movement of interactive element

  backgroundShade = `rgba(235, 232, 52, 0.75)`;
  background(backgroundShade);

  push();
  textSize(69);
  fill(0);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text(`catch some joy baby!`, width / 2, height / 2);
  pop();

  push(); //instructions
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`Press ENTER to start :)\n`, width / 2, 2 * height / 3);
  pop();

  push(); //controls intructions
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`(move with userr mouse to catch all the joy)`, width / 2, (2 * height / 3)+20);
  pop();

  push(); //instructions to set the ambiance
  textSize(12);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`(click anywhere to set to game mode :D)`, width / 2, (2 * height / 3)+40);
  pop();

  //resets gameTimer before simulation
  gameTimer = 0;
}

function simulation() {
  gameTimer++; //start timer
  if (gameTimer > gameLength) { //checks for when the timer has reached the end
    state = `awe`; //will display gave over and stop timer
  }

  for (let i = 0; i < happiness.length; i++) {
    displayJoy(happiness[i]); //moving objects
    movementJoy(happiness[i]); //movement of moving object
  }
  displayTimer(); //display timer element
  displayUser(); //interactive element
  movementUser(); // movement of interactive element
  checkForJoyCaught(); //checks for interaction between user and joy and reacts
}

function joyCaught() {
  displayJoy(joy); //freeze display joy image
  displayUser(user.size = 150); //freese display user image
  user.currentImage = user.happyImage; //change image to in joy

  push(); //displat game length frozen
  textSize(30);
  fill(0);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(`you have ${(gameTimer)/60} seconds left`, 100, 100);
  pop();

  backgroundShade = `rgba(235, 232, 52, 0.50)`; //overlay background colour
  background(backgroundShade);

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(0);
  textAlign(CENTER, TOP);
  text(`omg user did it!! :D`, width/2, height/4);
  pop();
}

function joyNotCaught() {
  displayJoy(joy); //freese display joy image
  displayUser(); //freese display user image
  user.currentImage = user.darnImage; //change image to in joy

  backgroundShade = `rgba(255, 78, 38, 0.50)`; //overlay background colour
  background(backgroundShade);

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(255, 47, 0);
  textAlign(CENTER, TOP);
  text(`aweee :'(  better luck next time`, width / 2, height / 4);
  pop();
}


//DISPLAY
function displayJoy(joy) {
  if (!joy.caught) {
    //joy objects displayed with image
    image(joy.image, joy.x, joy.y, 200, 200);
  }
}

function displayUser() {
  //user displayed with image
  image(user.currentImage, user.x, user.y, 200, 200);
}


//MOVEMENT
function movementJoy(joy) {
  //making joy objects randomly move around the canvas
  let change = random(0, 1);
  if (change < 0.1) { //10% chances of the time the joy will move
    joy.vx = random(-joy.speed, joy.speed);
    joy.vy = random(-joy.speed, joy.speed);
  }
  //constrain to convas
  joy.x = constrain(joy.x, 100, windowWidth - 100);
  joy.y = constrain(joy.y, 100, windowHeight - 100);
  //movement
  joy.x += joy.vx;
  joy.y += joy.vy;
}

function movementUser() {
  //user controls for user
  if (mouseX < user.x) {   //accelerating towards mouse as user move
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

  //constrain to convas
  user.x = constrain(user.x, 100, windowWidth - 100);
  user.y = constrain(user.y, 100, windowHeight - 100);

  //movement
  user.x += user.vx;
  user.y += user.vy;
}


//USER CONTROLS
function handleInput() {
  //start
  if (keyIsDown(ENTER) && state === `title`) {
    reset(); //reset values before simluation starts
    state = `simulation`;
  }

  //start over
  if (keyIsDown(32)) {
    state = `title`;
  }
}


//check fro interactions etween user and joy and react
function checkForJoyCaught(joy) {

  if (!joy.caught) { //finding the distance between user and joy
    let d = dist(user.x, user.y, joy.x, joy.y);
    if (d < user.size / 2 + joy.size / 2 && gameTimer < gameLength) {
      joy.caught = true;
      state = `yay`;
      gameStop();
    }
  } else if (gameTimer > gameLength) { //caught within gameLength
      state = `awe`;
      gameStop();
  }
}

//timer countdown display
function displayTimer() {
  if (gameTimer < gameLength) {
    push();
    textSize(30);
    fill(0);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(`you have ${(gameTimer)/60} seconds left`, 100, 100);
    pop();
  } else {
    displayGameOver();
  }
}

function displayGameOver() {
  push();
  textSize(30);
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text(`GAME OVER\n`, windowWidth/2, windowHeight/2);
  pop();

  push();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text(`\n\n(press the space bar to try again!)`, windowWidth/2, windowHeight/2);
  pop();
}

//Stop all movement and reset gameTimer
function gameStop() {
  joy.vx = 0;
  joy.vy = 0;
  joy.speed = 0;
  user.vx = 0;
  user.vy = 0;
  user.speed = 0;
}

//reset values to origin
function reset() {
  joy.x = 100;
  joy.y = 100;
  user.x = windowWidth/2;
  user.y = windowHeight/2;
}
