"use strict";

/**************************************************
Object Oriented Programmming NOTES
Rachel B. Richard
**************************************************/

//8.1 Introducing Object Oriented Programming
//create a program using class to tidy away your objects

// Our garden
// let garden = {
//   // An array to store the individual flowers
//   flowers: [],
//   // How many flowers in the garden
//   numFlowers: 20,
//   // The color of the grass (background)
//   grassColor: {
//     r: 120,
//     g: 180,
//     b: 120
//   }
// };
//
// // setup() creates the canvas and the flowers in the garden
// function setup() {
//   createCanvas(600, 600);
//
//   // Create our flowers by counting up to the number of the flowers
//   for (let i = 0; i < garden.numFlowers; i++) {
//     // Create a new flower
//     let flower = new Flower(); //!!how to call a class constructor
//     // Add the flower to the array of flowers
//     garden.flowers.push(flower);
//   }
// }
//
// // draw()
// // Displays our flowers
// function draw() {
//   // Display the grass
//   background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
//
//   // Loop through all the flowers in the array and display them
//   for (let i = 0; i < garden.flowers.length; i++) {
//     let flower = garden.flowers[i];
//     flower.display(); //!! how to call a class display
//   }
// }

// //8.2 Constructors with parameters
// //how to use a class to make an object with different forms
//
// // Our garden
// let garden = {
//   // An array to store the individual flowers
//   flowers: [],
//   // How many flowers in the garden
//   numFlowers: 20,
//   // The color of the grass (background)
//   grassColor: {
//     r: 120,
//     g: 180,
//     b: 120
//   }
// };
//
// // setup() creates the canvas and the flowers in the garden
// function setup() {
//   createCanvas(600, 600);
//
//   // Create our flowers by counting up to the number of the flowers
//   for (let i = 0; i < garden.numFlowers; i++) {
//     let x = random(0, width); //!! set assigned variables
//     let y = random(0, height);
//     let size = random(50, 80);
//     let stemLength = random(50, 100);
//     let petalColor = {
//       r: random(100, 255),
//       g: random(100, 255),
//       b: random(100, 255)
//     };
//     // Create a new flower
//     let flower = new Flower(x, y, size, stemLength, petalColor); //!!how to call a assigned properties in class constructor
//     // Add the flower to the array of flowers
//     garden.flowers.push(flower);
//   }
// }
//
// // draw()
// // Displays our flowers
// function draw() {
//   // Display the grass
//   background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
//
//   // Loop through all the flowers in the array and display them
//   for (let i = 0; i < garden.flowers.length; i++) {
//     let flower = garden.flowers[i];
//     flower.display();
//   }
// }

//8.3 object oriented Programming and p5 events
//adding events to a class

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 20,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    };
    // Create a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor); //!! how to call a assigned properties in class constructor
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }
}

// draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.display(); //!! how to call a class display
  }
}

//!! create a functio to call the class event
function mousePressed() {
  // Loop through all the flowers in the array to check if it was pressed
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.mousePressed(); //!! how to call a event in a class
  }
}
