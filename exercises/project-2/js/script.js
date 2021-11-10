"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02 - PROTOTYPE

includes:
- main page layout including coins that can be dragged to slot to change states
**************************************************/


let backgroundShade = 220; //bakground colour of main page

let slot;
let coins = [];
let coinCount = 6;

let state = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//image for object display
let joyImage;

//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  joyImage = loadImage('assets/images/happy.png');
}


//SETUP
//seting up the coins layout and slot classes for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight);

  //slot creation and positioning with class
  let x = width/2;
  let y = height/2;
  slot = new Slot(x,y);

  //coins creation and positioning with array and class
  for (let i = 0; i < coinCount; i++) {
    let x = random(100, width-100);
    let y = random(100, height-100);
    let name = state[i];
    let coin = new Coin(x, y, image, name);
    coins.push(coin);
  }
}

//DRAW
//for frame by frame program running setup of slot display and coin display/movement
function draw() {
  background(backgroundShade);

  //allows for display and movement of coin using class
  for (let i = 0; i < coinCount; i++) {
    let coin = coins[i];
    coin.display();
    coin.move();
  }
  
  //allows for display and simulation of slot
  slot.display(); //display slot using class
  slot.checkForCoin(coin); //check if coin touched slot
}
