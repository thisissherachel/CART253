"use strict";

/**************************************************
Inheritance and Polymorphism NOTES
Rachel B. Richard
**************************************************/

// //9.1 Inheritance
// //how to make classes that can inherit properties from one another
//
// // Our cars array and its starting length
// let cars = [];
// let numCars = 5;
// // Our motorcycles
// let motorcycles = [];
// let numMotorcycles = 10;
//
// // Set up the canvas and our cars
// function setup() {
//   createCanvas(600, 600);
//   // Create the correct number of cars and put them in our array
//   for (let i = 0; i < numCars; i++) {
//     let x = random(0, width);
//     let y = random(0, height);
//     let car = new Car(x, y);
//     cars.push(car);
//   }
//   // Create the correct number of motorcycles and put them in our array
//   for (let i = 0; i < numMotorcycles; i++) {
//     let x = random(0, width);
//     let y = random(0, height);
//     let motorcycle = new Motorcycle(x, y);
//     motorcycles.push(motorcycle);
//   }
// }
//
// // Display and move the cars
// function draw() {
//   background(0);
//
//   // Go through all the cars and move, wrap, and display them
//   for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];
//     car.move(); //!!still works because it calls the vehicle class given this is its subclass
//     car.wrap();
//     car.display();
//   }
//   // Go through all the motorcycles and move, wrap, and display them
//   for (let i = 0; i < motorcycles.length; i++) {
//     let motorcycle = motorcycles[i];
//     motorcycle.move();
//     motorcycle.wrap();
//     motorcycle.display();
//   }
// }


// //9.2 Overriding Inheritance
// //how to make subclasses that override some things of the parent class
//
// // Our cars array and its starting length
// let cars = [];
// let numCars = 5;
// // Our motorcycles
// let motorcycles = [];
// let numMotorcycles = 10;
//
// // Set up the canvas and our cars
// function setup() {
//   createCanvas(600, 600);
//   // Create the correct number of cars and put them in our array
//   for (let i = 0; i < numCars; i++) {
//     let x = random(0, width);
//     let y = random(0, height);
//     let car = new Car(x, y);
//     cars.push(car);
//   }
//   // Create the correct number of motorcycles and put them in our array
//   for (let i = 0; i < numMotorcycles; i++) {
//     let x = random(0, width);
//     let y = random(0, height);
//     let motorcycle = new Motorcycle(x, y);
//     motorcycles.push(motorcycle);
//   }
// }
//
// // Display and move the cars
// function draw() {
//   background(0);
//
//   // Go through all the cars and move, wrap, and display them
//   for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];
//     car.move(); //!!still works because it calls the vehicle class given this is its subclass
//     car.wrap();
//     car.display();
//   }
//   // Go through all the motorcycles and move, wrap, and display them
//   for (let i = 0; i < motorcycles.length; i++) {
//     let motorcycle = motorcycles[i];
//     motorcycle.move();
//     motorcycle.wrap();
//     motorcycle.display();
//   }
// }


//9.3 Polymorphism
//using the fact of inheritance to affect multiple objects in draw

// Our vehicles
let vehicles = [];
// How many of each kind
let numCars = 5;
let numMotorcycles = 10;

// Set up the canvas and our vehicles
function setup() {
  createCanvas(600, 600);
  // Create the correct number of cars and put them in our vehicles array
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  // Create the correct number of motorcycles and put them in our vehicles array
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }
}

// Display and move the cars
function draw() {
  background(0);

  // Go through all the vehicles (both cars and motorcycles)
  // and move, wrap, and display them. We can do this because we know
  // that all vehicles have those methods!
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}
