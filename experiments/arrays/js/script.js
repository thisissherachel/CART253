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
//
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


function setup() {

}

// draw()
//for frame by frame program running
function draw() {

}
