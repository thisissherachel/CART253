class KeepJoy extends Game {

  constructor() {

  }

  display(){

  }

  mousePressed() {

  }

  mouseReleased() {

  }
}

"use strict";

/**************************************************
Jungle Garden
Rachel B. Richard

EXERCISE

1. Add a(nother) form of user-control
2. Add a new class and objects
3. Add at least two endings

You are happy and trying to keep all the happiness within the constraints of the window.
If joy escapes you lose and become sad.
If you manage to keep joy inside for 10s you win.
**************************************************/

let happiness = [];
let numJoy = 10;
let joyImage;

let user;
let userImage = {
  current: undefined,
  happy: undefined,
  sad: undefined
};

let state = `title`; // Can be: title, simulation, yay, awe

let gameTimer = 0; //timer counting the frames during the game
let gameLength = 60 * 10; // 10 seconds till game over

let backgroundShade = (255);

//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  joyImage = loadImage('assets/images/happy.png');
  userImage.happy = loadImage('assets/images/happy.png');
  userImage.sad = loadImage('assets/images/sad.png');
}

//SETUP
//for full program running setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  user = new User();

  for (let i = 0; i < numJoy; i++) {
    let x = random(200, width - 200);
    let y = random(200, height - 200);
    let joy = new Joy(x, y);
    happiness.push(joy);
  }
}

//DRAW
//for frame by frame program running
function draw() {
  background(255);
  handleInput(); //press enter to start and space bar to try again

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  }

  //caught within set time
  if (state === `yay`) {
    yay();
  }

  //caught within set time
  if (state === `awe`) {
    awe();
  }
}


//STATES
//state include: title, simulation, yay, and aye.
function title() {
  userImage.current = userImage.happy;
  //intro display
  user.move(); //movement of user
  user.display(); //displaying user

  for (let i = 0; i < happiness.length; i++) { //creating the joy
    let joy = happiness[i]; //array for joy
    if (joy.active) { //joy is on page i.e: active = true
      joy.move(); //movement of joy
      joy.bounce(user); //interaction of joy and user
      joy.display(); //display of joy
    }
  }

  backgroundShade = `rgba(240, 218, 98, 0.75)`;
  background(backgroundShade);

  push();
  textSize(69);
  fill(0);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text(`enjoy a lil joy!`, width / 2, height / 2);
  pop();

  push(); //instructions
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`Don't let any joy escape!`, width / 2, 2 * height / 3);
  pop();

  push(); //controls intructions
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`Press ENTER to start :)\n(move with mouse)`, width / 2, (2 * height / 3) + 50);
  pop();

  //resets gameTimer before simulation
  gameTimer = 0;
}

function simulation() {
  gameTimer++; //start timer
  if (gameTimer > gameLength) { //checks for when the timer has reached the end
    state = `awe`; //will display gave over and stop timer
  }

  displayTimer(); //display timer

  user.move(); //movement of user
  user.display(); //displaying user

  for (let i = 0; i < happiness.length; i++) { //creating the joy
    let joy = happiness[i]; //array for joy
    if (joy.active) { //joy is on page i.e: active = true
      joy.move(); //movement of joy
      joy.bounce(user); //interaction of joy and user
      joy.display(); //display of joy
    }
  }

  checkForJoy();
}

function yay() {
  user.display(); //displaying user

  background(backgroundShade);
  backgroundShade = `rgba(240, 218, 98, 0.50)`; //overlay background colour

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(0);
  textAlign(CENTER, TOP);
  text(`YAY!! you did it :)`, width / 2, height / 4);
  pop();
}

function awe() {
  userImage.current = userImage.sad;
  user.display(); //displaying user); //displaying user but sad

  backgroundShade = `rgba(255, 129, 94, 0.50)`; //overlay background colour
  background(backgroundShade);

  displayGameOver(); //timer stops and game is over

  push();
  textSize(69);
  fill(0);
  textAlign(CENTER, TOP);
  text(`aweee :( better luck next time`, width / 2, height / 4);
  pop();
}


//USER CONTROLS
function handleInput() {
  //start
  if (keyIsDown(ENTER) && state === `title`) {
    reset();
    state = `simulation`;
  }
  //start over
  if (keyIsDown(32)) {
    state = `title`;
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

//GameOver display
function displayGameOver() {
  push();
  textSize(30);
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text(`GAME OVER\n`, windowWidth / 2, windowHeight / 2);
  pop();

  push();
  textSize(15);
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text(`\n\n(press the space bar to try again!)`, windowWidth / 2, windowHeight / 2);
  pop();
}

//checks how many joys are still active
function checkForJoy() {
  for (let i = 0; i < happiness.length; i++) { //creating the joy
    let joy = happiness[i]; //array for joy

    if (joy.active === false) { //joy is not on page i.e: active = false
      state = `awe`
      reset();
    } else if (gameTimer > gameLength){ //managed to keep some joy after timer ends
      state = `yay`;
      reset();
    }
  }
}

//reset all properties
function reset() {
  //plays te for lop to reset all joys
  for (let i = 0; i < happiness.length; i++) { //creating the joy
    let joy = happiness[i]; //array for joy
      joy.reset(); //reset perameters
    }
}


class Joy {

  //all perameters for joy
  constructor(x, y, image) {
    this.x = random(300, width-300);
    this.y = random(300, height-300);
    this.vx = 0;
    this.vy = 0;
    this.ax = 0.5;
    this.ay = 0.5;
    this.maxSpeed = 2;
    this.size = 50;
    this.active = true;
    this.image = joyImage;
  }

  //joy moves in random directions around screen
  move() {
    //setting a random direction and angel to the joy object
    this.ax = random(-this.ax, this.ax);
    this.ay = random(-this.ay, this.ay);
    //adding acceleration to movement
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the acceleration
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //movement
    this.x += this.vx;
    this.y += this.vy;
    //movement stops once out of frame!
    if (this.y > height || this.y < 0 || this.x > width || this.x < 0) {
      this.active = false;
      this.vx = 0;
      this.vy = 0;
    }
  }

  //joy bounces off of user
  bounce(user) {
    //finding when joy and user interact
    if (this.x > user.x - user.size/2 &&
        this.x < user.x + user.size/2 &&
        this.y + this.size/2 > user.y - user.size/2 &&
        this.y - this.size/2 < user.y + user.size/2) {

      //joy bounces when interacting with user
      let dx = this.x - user.x;
      this.vx = this.vx + map(dx,-user.size/2,user.size/2,-2,2);

      let dy = this.y - user.y;
      this.vy = this.vy + map(dy,-user.size/2,user.size/2,-2,2);
    }
  }

  //joy displayed as ellipse
  display() {
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
  }

  //Stop all movement and reset gameTimer
  reset() {
    this.x = random(200, width-200);
    this.y = random(200, height-200);
    this.active = true;
  }
}
