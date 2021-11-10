"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02 - PROTOTYPE

includes:
- main page layout including buttons linked to games
- core concepts of each game

**************************************************/

let backgroundShade = 220; //bakground colour of main page

let buttons = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];
let buttonCol = 3;
let buttonRow = 2;

//SETUP
//seting up the buttons layout for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the correct number of motorcycles and put them in our vehicles array


  //BUTTON CLASS
  for (let b = 0; b < buttonCol; b++) {
    let x = 25%;
    let y = 50%;
    let button = new Button(x, y);
    buttons.push([]);
  }

  for (let b = 0; b < buttonCol; b++) {
    let x = 25%;
    let y = 75%;
    let button = new Button(x, y);
    buttons.push([]);
  }
}

//DRAW
//for frame by frame program running setup
function draw() {
  // headerAnimation();
}
