"use strict";

/**************************************************
Debugging activity
Rachel B. Richard

ACTIVITY 05:

dubug the code!

**************************************************/

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  userSize: 100
};

let buffet = [];
let foodNum = 6;

// Food objects
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < foodNum; i++) { //!!creating a for loop for the index of the array
    buffet[i] = createFood(50,300);
  }

  function createFood(x,y) {
    let food = {
      x: x + 50,
      y: y,
      size: 50,
      eaten: false,
    };
    return food;
  }
}

function draw(){
  background(0);

  // Move the user (with the mouse)
  moveUser();

  //display user
  displayUser();

  for (let i = 0; i < buffet.length; i++) {
  // Check whether the user has eaten either food
    checkFood(buffet[i]);
    displayFood(buffet[i]);
  }
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Checks if the user overlaps the food object and eats it if so
function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}

// Draw the food as a circle
function displayFood(food) {
  // Check if the food is still available to be eaten
  if (!food.eaten) {
    // Display the food as its position and with its size
    push();
    fill(255, 100, 100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
