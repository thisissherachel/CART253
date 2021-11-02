"use strict";

/**************************************************
Inheritance Activity
Rachel B. Richard

ACTIVITY

Here is a suggested plan:

1. Write a main script with states
2. Create a basic Pedestrian class and integrate it into the main script
3. Create a Vehicle class
4. Create Car, Truck, and Motorcycle classes that extend the Vehicle class
5. Add cars, trucks, and motorcycles to the main script
6. Add success and failure conditions

The user will control a circular pedestrian at the bottom of the canvas. Cars, trucks, and motorcycles will be moving left and right across the canvas.
If the pedestrian collides with any of the vehicles, they die. If they make it to the other side, they succeeded. Just like life!
**************************************************/

let state = `simulation`;

let pedestrian;

let vehicles = [];
let numCars = 20;
let numTrucks = 15;
let numMotorcycles = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);

  let x = width/2;
  let y = height;
  pedestrian = new Pedestrian(x,y);

  for (let i = 0; i < numCars; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let car = new Car(x,y);
    vehicles.push(car);
  }

  for (let i = 0; i < numTrucks; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let truck = new Truck(x,y);
    vehicles.push(truck);
  }

  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let motorcycle = new Motorcycle(x,y);
    vehicles.push(motorcycle);
  }

  // Set random directions
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    let r = random(0,1);
    if (r < 0.5) {
      vehicle.vx = -vehicle.speed;
    }
    else {
      vehicle.vx = vehicle.speed;
    }
  }
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `success`) {
    success();
  }
  else if (state === `dead`) {
    dead();
  }
}

function title() {
  displayText(`PEDESTRIAN PALAVER!`);
}

function simulation() {
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();

    pedestrian.checkHit(vehicle);
  }

  if (!pedestrian.alive) {
    state = `dead`;
  }

  if (pedestrian.y < 0) {
    state = `success`;
  }
}

function success() {
  displayText(`YOU MADE IT!`);
}

function dead() {
  displayText(`YOU DIED! SO SAD!`);
}

function displayText(string) {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(string,width/2,height/2);
  pop();
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
