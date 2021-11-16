"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02 - PROTOTYPE

includes:
- main page layout including coins that can be dragged to slot to change states
**************************************************/

//background colour of main page
let backgroundShade = 220;

//objects
let slot;
let coins = [];
let coinCount = 6;

let state = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//images
let joyImage;

//fonts
let font;


//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  joyImage = loadImage(`assets/images/happy.png`);
  font = loadFont(`assets/fonts/yoster.ttf`)
}


//SETUP
//seting up the coins layout and slot classes for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //input WEBGL for y axis rotation
  ortho();
  cursor(`grab`);
  textFont(font);

  //slot creation and positioning with class
  let x = width/2;
  let y = height/2;
  slot = new Slot(x, y);

  //coins creation and positioning with array and class
  for (let i = 0; i < coinCount; i++) {
    let x = random(100, width-100); //random position on window
    let y = random(100, height-100); //random position on window
    let image = joyImage;
    let font = textFont;
    let name = state[i];
    let coin = new Coin(x, y, image, font, name);
    coins.push(coin);
  }
}

//DRAW
//for frame by frame program running setup of slot display and coin display/movement
function draw() {
  background(backgroundShade);
  translate(-width/2,-height/2)

  //allows for display of slot
  slot.display(); //display slot using class

  //allows for display and movement of coin using class
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.display();
    // coin.rotateCoin();
    coin.drag(); //interaction with mouse being pressed
  }
}

function mousePressed() {
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.mousePressed();
  }
}

//for when coin is about to interact with slot
function mouseReleased() {
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.mouseReleased();
    coin.checkForSlot(slot); //check if coin touched slot
  }
}
