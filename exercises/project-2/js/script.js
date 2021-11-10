"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02 - PROTOTYPE

includes:
- main page layout including coins that can be dragged to slot to change states
**************************************************/


let backgroundShade = 220; //bakground colour of main page

let coins = [];
let coinsCount = 6;

let coinsName = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//image for object display
let joyImage;

//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  joyImage = loadImage('assets/images/happy.png');
}


//SETUP
//seting up the coins layout for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < coinsCount; i++) {
    let x = random(10,width-10);
    let y = random(10,height-10);
    let coin = new Coin(x,y);
    coins.push(coin);
}

//DRAW
//for frame by frame program running setup
function draw() {
  background(backgroundShade);

  for (let i = 0; i < coinsCount; i++) {
    let coin = coins[i];
    coin.display(x,y);
  }
}
