"use strict";

/**************************************************
Arrays NOTES
Rachel B. Richard
**************************************************/

// //7.1 Intermediate functions
// //how to deal with reated codes (set variables, set properties, use the chnaging variables with functions)
//
// // Our user, to move with the mouse
// let user = {
//   x: 0,
//   y: 0,
//   size: 100
// };
//
// //!! foods variables (setting the variables)
// let food1;
// let food2;
// let food3;
// let food4;
// let food5;
//
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   //!! set properties to variables for below function to use
//   food1 = createFood(150, windowHeight/2)
//   food2 = createFood(250, windowHeight/2);
//   food3 = createFood(350, windowHeight/2);
//   food4 = createFood(450, windowHeight/2);
//   food5 = createFood(550, windowHeight/2);
//
//   //!! function that creates the food for all variables with above properties
//   function createFood(x,y) {
//     let food = {
//       x: x,
//       y: y,
//       size: 50,
//       eaten: false // We want to track whether the user has eaten the food
//     };
//     return food; //return a variable to be used in functions
//   }
// }
//
// function draw() {
//   background(0);
//
//   // Move the user (with the mouse)
//   moveUser();
//
//   //Check whether the user has eaten either food !!using variables
//   checkFood(food1);
//   checkFood(food2);
//   checkFood(food3);
//   checkFood(food4);
//   checkFood(food5);
//
//   //Display the user and foods !!using variables
//   displayUser();
//   displayFood(food1);
//   displayFood(food2);
//   displayFood(food3);
//   displayFood(food4);
//   displayFood(food5);
//
// }
//
// // Sets the user position to the mouse position
// function moveUser() {
//   user.x = mouseX;
//   user.y = mouseY;
// }
//
// // Checks if the user overlaps the food object and eats it if so !!using returned variable
// function checkFood(food) {
//   // We only want to check for an overlap if food hasn't been eaten yet
//   if (!food.eaten) {
//     let d = dist(user.x, user.y, food.x, food.y);
//     if (d < user.size / 2 + food.size / 2) {
//       food.eaten = true;
//     }
//   }
// }
// //
// // Draw the user as a circle
// function displayUser() {
//   push();
//   fill(255);
//   ellipse(user.x, user.y, user.size);
//   pop();
// }
//
// // Draw food as a circle !!using returned variable
// function displayFood(food) {
//   // We don't want to display food if it's been eaten
//   if (!food.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food.x, food.y, food.size);
//     pop();
//   }
// }


// //7.2 Introducing arrays
// //storing multiple variables in one variable (creates variables starting from index 0 and counts up)
// //.push continues to add to the index eveytime its called.
//
// //!!array variable
// let school = [];
// let schoolSize = 10;
//
// function setup() {
//   createCanvas(600, 600);
//
//   for (let i = 0; i < schoolSize; i++) { //!!creating a for loop for the index of the array
//     // school[i] = createFish(random(0, width), random(0, height)); // Create fish, positioned randomly
//     let fish = createFish(random(0, width), random(0, height)); //OR use .push function to just add one everytime
//     school.push(fish);
//   }
// }
//
// // createFish(x,y)
// // Creates a new JavaScript Object describing a fish and returns it
// function createFish(x, y) {
//   let fish = {
//     x: x,
//     y: y,
//     size: 50,
//     vx: 0,
//     vy: 0,
//     speed: 2
//   };
//   return fish;
// }
//
// // draw()
// // Moves and displays our fish
// function draw() {
//   background(0);
//
//   for (let i = 0; i < school.length; i++) { //!!creating a for loop for the index of the array that continues till array is done
//     moveFish(school[i]);
//     displayFish(school[i]);
//   }
// }
//
// // moveFish(fish)
// // Chooses whether the provided fish changes direction and moves it
// function moveFish(fish) {
//   // Choose whether to change direction
//   let change = random(0, 1);
//   if (change < 0.05) {
//     fish.vx = random(-fish.speed, fish.speed);
//     fish.vy = random(-fish.speed, fish.speed);
//   }
//
//   // Move the fish
//   fish.x = fish.x + fish.vx;
//   fish.y = fish.y + fish.vy;
//
//   // Constrain the fish to the canvas
//   fish.x = constrain(fish.x, 0, width);
//   fish.y = constrain(fish.y, 0, height);
// }
//
// // displayFish(fish)
// // Displays the provided fish on the canvas
// function displayFish(fish) {
//   push();
//   fill(200, 100, 100);
//   noStroke();
//   ellipse(fish.x, fish.y, fish.size);
//   pop();
// }
//
// function mousePressed() { //!! creates fish when mouse is clicked
//   let fish = createFish(mouseX,mouseY);
//   school.push(fish); //!! increases index at the end of the existing array
// }


//7.3 more arrays

// // ARRAYS IN RANDOM
// //using array with pre-determined indexes where they are randomly taken
//
// // Our array of fortunes, each of which is a string
// // Note that we still use square brackets around the array,
// // but now we list the elements the array should start with
// // separated by commas.
// // As here, we can put each element on a separate line for clarity.
// let fortunes = [
//   `It's not looking great.`,
//   `You will trip over an apple today.`,
//   `Beware of over-friendly cats.`,
//   `Bank error in your favor, collect $200.`,
//   `Start your Korean skincare regime.`,
//   `You will feel better than 20 years ago.`,
//   `David Lynch will call you on your birthday.`,
//   `Happiness is just around the corner.`,
//   `You will make it look easy today.`,
//   `Your future is cloudy.`
// ];
//
// // We need a variable to store the chosen fortune so we can
// // display it in draw()
// let chosenFortune = `I am looking into your soul...`;
//
// // setup() gets basic styling ready
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   fill(255);
// }
//
// // draw() displays the current fortune
// function draw() {
//   background(0);
//   text(chosenFortune, width / 2, height / 2);
// }
//
// // mousePressed() chooses a random fortune from the fortunes array
// function mousePressed() {
//   // By passing the fortunes array as an argument to random() we get back
//   // a RANDOM ELEMENT in the array (one of the fortune strings) which we
//   // can then store in the chosenFortune variable for displaying
//   chosenFortune = random(fortunes);
// }


// ARRAYS IN ORDER
//using array with pre-determined indexes where they are taken in order and stop.

// Our array of lines from one of Hamlet's soliloquys (a sequence
// where he essentially talks to himself). We will want to display
// each line one after the other as the user clicks.
let soliloquy = [
  `To be, or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by opposing end them.`
];

// We need a variable to store the current line we want to display
// It should start at ZERO because that's the first index in the array
let currentLine = 0;

// setup() gets basic styling ready
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

// draw() displays the current line
function draw() {
  background(0);
  // Get the element in the array at the CURRENT index (starts at 0 and goes up)
  let dialog = soliloquy[currentLine];
  // Display the string in that element on the canvas
  text(dialog, width / 2, height / 2);
}

// mousePressed() moves to the next line in the soliloquy unless we've reached the end
function mousePressed() {
  // Go to the next line in the soliloquy
  currentLine = currentLine + 1;
  // Check if we've reached the LENGTH of the array
  // If we have, we've gone past the end because we started counting at 0
  // The LENGTH of our array is 8, but the final element is at index 7
  if (currentLine === soliloquy.length) {
    // If we've gone past the end, go back one to the last real element
    currentLine = soliloquy.length - 1;
  }
}


//TRAILS
//using array to store information during program (allows you to have a trail while keeping a background and manipulate index)

let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [], // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
  trailSize: 20 //max of arrray
}

// setup() the canvas ready
function setup() {
  createCanvas(600, 600);
}

// draw() draws a circle with a trails
function draw() {
  background(0);

  // Use a for loop to go through each element in the circle's trail array in order
  for (let i = 0; i < circle.trail.length; i++) {
    // Get the element at the index indicated by i (0, then 1, then 2, etc.)
    let element = circle.trail[i];
    // Draw an ellipse the same size as the circle at that position
    ellipse(element.x, element.y, circle.size);
  }

  // Move the circle to the mouse position
  circle.x = mouseX;
  circle.y = mouseY;

  // Draw the circle
  ellipse(circle.x, circle.y, circle.size);

  // Create a new position object that stores where the circle is now
  // which we can add to the trail to trace the path of the circle
  let newTrailPosition = {
    x: circle.x,
    y: circle.y
  };
  // Add the position to the circle's trail array
  circle.trail.push(newTrailPosition);

  if (circle.trail.length > circle.trailSize) {
    circle.trail.shift(); //!!removes first index and shift back to 0
  }
}









//TEST
// let user = { //user controlled object
//   x: 500,
//   y: 500,
//   size: 50,
//   vx: 0,
//   vy: 0,
//   ax: 0,
//   ay: 0,
//   acceleration: 1,
//   speed: 20,
//   maxSpeed: 20,
//   currentImage: undefined,
//   sadImage: undefined,
//   joyImage: undefined,
//   darnImage: undefined,
// }
//
// let joy = {
//   image: undefined,
//   caught: false,
// }
//
// let happiness = [];
// let joyNum = 20;
//
// //PRELOAD
// // for images and assets going to be used in the running grogram
// function preload() {
//   joy.image = loadImage('assets/images/joy.png');
//   user.sadImage = loadImage('assets/images/sad.png');
//   user.joyImage = loadImage('assets/images/joy.png');
//   user.darnImage = loadImage('assets/images/cry.png');
//
//   // music = loadSound('assets/sounds/happysong.mp3');
// }
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   for (let i = 0; i < joyNum; i++) { //!!creating a for loop for the index of the array
//     happiness[i] = createJoy(random(0, width), random(0, height)); // Create joy, positioned randomly
//     let joy = createJoy(random(0, width), random(0, height)); //OR use .push function to just add one everytime
//   }
// }
//
// // createJoy(x,y)
// // Creates a new JavaScript Object describing a fish and returns it
// function createJoy(x, y) {
//   let joy = {
//     x: x,
//     y: y,
//     size: 50,
//     vx: 0,
//     vy: 0,
//     speed: 10,
//     image: undefined,
//     caught: false,
//   };
//   return joy;
// }
//
// // draw()
// // Moves and displays our joy
// function draw() {
//   background(0);
//
//   movementUser();
//   displayUser();
//
//
//   for (let i = 0; i < happiness.length; i++) { //!!creating a for loop for the index of the array that continues till array is done
//     movementJoy(happiness[i]);
//     displayJoy(happiness[i]);
//   }
// }
//
// // movementJoy(joy)
// // Chooses whether the provided joy changes direction and moves it
// function movementJoy(joy) {
//   // Choose whether to change direction
//   let change = random(0, 1);
//   if (change < 0.05) {
//     joy.vx = random(-joy.speed, joy.speed);
//     joy.vy = random(-joy.speed, joy.speed);
//   }
//
//   // Move the fish
//   joy.x += joy.vx;
//   joy.y += joy.vy;
//   // Constrain the fish to the canvas
//   joy.x = constrain(joy.x, 0, width);
//   joy.y = constrain(joy.y, 0, height);
// }
//
// function movementUser() {
//   //user controls for user
//   if (mouseX < user.x) {   //accelerating towards mouse as user move
//     user.ax = -user.acceleration;
//   }
//   else {
//     user.ax = user.acceleration;
//   }
//
//   if (mouseY < user.y) {
//     user.ay = -user.acceleration;
//   }
//   else {
//     user.ay = user.acceleration;
//   }
//
//   user.vx = user.vx + user.ax; //updates users position with acceleration
//   user.vx = constrain(user.vx,-user.maxSpeed,user.maxSpeed); //limits the acceleration
//   user.vy = user.vy + user.ay;
//   user.vy = constrain(user.vy,-user.maxSpeed,user.maxSpeed);
//
//   //constrain to convas
//   user.x = constrain(user.x, 100, windowWidth - 100);
//   user.y = constrain(user.y, 100, windowHeight - 100);
//
//   //movement
//   user.x += user.vx;
//   user.y += user.vy;
// }
//
// // displayJoy(joy)
// // Displays the provided fish on the canvas
// function displayJoy(joy) {
//   // imageMode(CENTER);
//   // image(joy.image, joy.x, joy.y, 100, 100);
//   if (!joy.caught === true) {
//     // image(joy.image, joy.x, joy.y, 200, 200);
//     push();
//     fill(200, 100, 100);
//     noStroke();
//     ellipse(joy.x, joy.y, joy.size);
//     pop();
//   }
// }
//
// function checkForJoyCaught(joy) {
//   // We only want to check for an overlap if food hasn't been eaten yet
//   if (!joy.caught) {
//     let d = dist(user.x, user.y, joy.x, joy.y);
//     if (d < user.size / 2 + joy.size / 2) {
//       joy.caught = true;
//     }
//   }
// }
//
// // Draw the user as a circle
// function displayUser() {
//   push();
//   fill(255);
//   ellipse(user.x, user.y, user.size);
//   pop();
// }


let user = {
  x: 0,
  y: 0,
  size: 50
};

//!! foods variables (setting the variables)
let happiness = [];
let joyNum = 20;

let joy = {
  x: x,
  y: y,
  size: 50,
  caught: false,
};


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < joyNum; i++) { //!!creating a for loop for the index of the array
    happiness[i] = createJoy(random(0, width), random(0, height)); // Create joy, positioned randomly
  }

  // createJoy(x,y)
  // Creates a new JavaScript Object describing a fish and returns it
  function createJoy(x,y) {
    let joy = {
      x: x,
      y: y,
      size: 50,
      caught: false,
    };
    return joy;
  }
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  //Check whether the user has eaten either food !!using variables
  checkForJoyCaught(joy);

  //Display the user and foods !!using variables
  displayUser();
  displayJoy(joy);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food object and eats it if so !!using returned variable
function checkForJoyCaught(joy) {
  // We only want to check for an overlap if food hasn't been eaten yet
  if (!joy.caught) {
    let d = dist(user.x, user.y, joy.x, joy.y);
    if (d < user.size / 2 + joy.size / 2) {
      joy.caught = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw food as a circle !!using returned variable
function displayJoy(joy) {
  // We don't want to display food if it's been eaten
  if (!joy.caught) {
    push();
    fill(255, 100, 100);
    ellipse(joy.x, joy.y, joy.size);
    pop();
  }
}
