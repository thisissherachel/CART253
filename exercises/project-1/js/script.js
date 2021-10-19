"use strict";

/**************************************************
Can you find love?
Rachel B. Richard

PROJECT 01
- At least two moving elements
- Interactivity
- Aesthetic, conceptual, and procedural harmony
- Beginning, middle, and end

Try to catch love. You have a limited time to catch it.
If you catch it fast "whoa that was fast! lucky you <3"
If you catch it "YAY <3"
If you dont manage to catch it within the frames "awe </3 better luck next time"

WHAT CHANGED SINCE LOVE, ACTUALLY ASSIGNMENT:
x added backgrounds to states
x added timer element rather than frame counter
x displays game over with state changes
x images now change with states
x SPACE BAR to start over
x added sound
x added rest features

**************************************************/

let love = { //interactive element
  x: 100,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 50,
};

let you = { //user controlled object
  x: 800,
  y: 200,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 20,
  currentImage: undefined,
  searchingImage: undefined,
  inLoveImage: undefined,
  darnImage: undefined,
  gotIt: false,
  gotItFast: false,
  tooLate: false,
};

let state = `title`; // Can be: title, simulation, fastInLove, inLove, tooLate

let gameTimer = 0; //timer counting the frames during the game
let gameLength = 60 * 10; // 10 seconds till game over

let backgroundShade = (255);

let simulationSound;

//PRELOAD
// for images and assets going to be used in the running grogram
function preload() {
  love.image = loadImage('assets/images/heart.png');
  you.searchingImage = loadImage('assets/images/eyes.png');
  you.inLoveImage = loadImage('assets/images/inlove.png');
  you.darnImage = loadImage('assets/images/darn.png');

  simulationSound = loadSound('assets/sounds/love.mp3');
}


//SETUP
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  you.currentImage = you.searchingImage; //base image for user

//ambiance music on loop
  simulationSound.loop();
}

//DRAW
//for frame by frame program running setup
function draw() {
  background(255);
  handleInput(); //press enter to start and user controls


  if (state === `title`) {
    title();
    you.currentImage = you.searchingImage;
  } else if (state === `simulation`) {
    simulation();
  }

  //caught within set time
  if (state === `fastInLove`) {
    fastInLove();
  }

  //caught within set time
  if (state === `inLove`) {
    inLove();
  }

  //past set time
  if (state === `tooLate`) {
    tooLate();
  }
}

//STATES
function title() {
  //intro display
  displayLove(); //moving objects
  displayYou(); //interactive element
  movementLove(love.speed = 10); //movement of moving object
  movementYou(you.speed = 20); // movement of interactive element

  backgroundShade = `rgba(255, 222, 254, 0.75)`;
  background(backgroundShade);

  push();
  textSize(69);
  fill(255, 74, 86);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text(`catch some love baby!`, width / 2, height / 2);
  pop();

  push(); //instructions
  textSize(20);
  fill(255, 74, 86);
  textAlign(CENTER, CENTER);
  text(`Press ENTER to start :)\n`, width / 2, 2 * height / 3);
  pop();

  push(); //controls intructions
  textSize(15);
  fill(255, 74, 86);
  textAlign(CENTER, CENTER);
  text(`(use arrow keys to move)`, width / 2, (2 * height / 3)+20);
  pop();

  push(); //instructions to set the ambiance
  textSize(12);
  fill(255, 74, 86);
  textAlign(CENTER, CENTER);
  text(`(click anywhere to set the ambiance <3)`, width / 2, (2 * height / 3)+40);
  pop();

  //resets gameTimer before simulation
  gameTimer = 0;
}

function simulation() {
  gameTimer++; //start timer
  if (gameTimer > gameLength) { //checks for when the timer has reached the end
    state = `tooLate`; //will display gave over and stop timer
  }

  displayTimer();
  displayLove(); //moving objects
  displayYou(); //interactive element
  movementLove(love.speed = 30); //movement of moving object
  movementYou(you.speed = 20); // movement of interactive element
  checkForInlove(); //checks for interaction between you and love and reacts
}

function fastInLove() {
  displayLove(); //freeze display love image
  displayYou(); //freese display user image
  you.currentImage = you.inLoveImage; //change image to in love

  push(); //displat game length frozen
  textSize(30);
  fill(0);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(`you have ${(gameTimer)/60} seconds left`, 100, 100);
  pop();

  backgroundShade = `rgba(255, 79, 194, 0.50)`; //overlay background colour
  background(backgroundShade);

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(255, 10, 170);
  textAlign(CENTER, TOP);
  text(`whoa that was fast! lucky you <3 <3 <3`, width/2, height/4);
  pop();
}

function inLove() {
  displayLove(); //freese display love image
  displayYou(); //freese display user image
  you.currentImage = you.inLoveImage; //change image to in love

  push(); //displat game length frozen
  textSize(30);
  fill(0);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(`you have ${(gameTimer)/60} seconds left`, 100, 100);
  pop();

  background(backgroundShade);
  backgroundShade = `rgba(255, 209, 239, 0.50)`; //overlay background colour

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(255, 158, 221);
  textAlign(CENTER, TOP);
  text(`YAY <3`, width / 2, height / 4);
  pop();
}

function tooLate() {
  displayLove(); //freese display love image
  displayYou(); //freese display user image
  you.currentImage = you.darnImage; //change image to in love

  backgroundShade = `rgba(68, 149, 242, 0.50)`; //overlay background colour
  background(backgroundShade);

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(125, 185, 255);
  textAlign(CENTER, TOP);
  text(`aweee </3 better luck next time`, width / 2, height / 4);
  pop();
}

//DISPLAY
function displayLove() {
  //love objects displayed with image
  image(love.image, love.x, love.y, 200, 200);
}

function displayYou() {
  //user displayed with image
  image(you.currentImage, you.x, you.y, 200, 200);
}

//MOVEMENT
function movementLove() {
  //making love objects randomly move around the canvas
  let change = random();
  if (change < 0.1) { //5% chances of the time the love will move
    love.vx = random(-love.speed, love.speed);
    love.vy = random(-love.speed, love.speed);
  }
  //constrain to convas
  love.x = constrain(love.x, 100, windowWidth - 100);
  love.y = constrain(love.y, 100, windowHeight - 100);
  //movement
  love.x += love.vx;
  love.y += love.vy;
}

function movementYou() {
  handleInput();
  //constrain to convas
  you.x = constrain(you.x, 100, windowWidth - 100);
  you.y = constrain(you.y, 100, windowHeight - 100);
  //movement
  you.x += you.vx;
  you.y += you.vy;
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

  //user controls looking for love
  if (keyIsDown(LEFT_ARROW)) { //horizontal movement
    you.vx = -you.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    you.vx = you.speed;
  } else { //if neither of the above are true
    you.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) { //vertical movement
    you.vy = -you.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    you.vy = you.speed;
  } else { //if neither of the above are true
    you.vy = 0;
  }
}


//check fro interactions etween you and love and react
function checkForInlove() {
  let d = dist(you.x, you.y, love.x, love.y); //finding the distance between user and love

  if (d < love.size / 2 + you.size / 2 && gameTimer < gameLength/2) { //caught within gameLength/2
    state = `fastInLove`;
    gameStop();
  } else if (d < love.size / 2 + you.size / 2) { //caught within gameLength
    state = `inLove`;
    gameStop();
  } else if (gameTimer > gameLength) { //caught within gameLength
    state = `tooLate`;
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
  love.vx = 0;
  love.vy = 0;
  love.speed = 0;
  you.vx = 0;
  you.vy = 0;
  you.speed = 0;
}

//reset values to origin
function reset() {
  love.x = 100;
  love.y = 100;
  you.x = windowWidth/2;
  you.y = windowHeight/2;
}
