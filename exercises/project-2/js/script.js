"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02 - PROTOTYPE

includes:
- main page layout including buttons linked to games
- core concepts of each game

**************************************************/

//Make an array with a for loop for buttons in a 3x2 grid.
//Array holds the names of the games that will be displayed on the button?
//Button is a class?
//make button using button createButton?
//phone compatibility using % fro screen sizes??
//how to center a grid?
//how would i structure an array that hold both a title and a state..?
//can i use html?

let backgroundShade = 220; //bakground colour of main page

let layout = {
  x: 100,
  y: 800,
  h: 200,
  w: h * 2,
  col: 3,
  row: 2,
  offset: 10,
  displayButtonName: true,
}

let buttons = [];


//SETUP
//seting up the buttons layout for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonLayout();
}

function buttonLayout() {
  //BUTTON CREATION FOR ARRAY
  for (let b = 0; b < layout.col; b++) {
    let posx = x + (b % layout.col) * (w + layout.offset);
    let posy = y + (floor(b/layout.col) * (h + layout.offset); //?? what does floor mean //Uncaught SyntaxError: Unexpected token ';'??
    buttons.push(new Button(posx, posy, name));
  }
}



//DRAW
//for frame by frame program running setup
function draw() {
  background(backgroundShade);

  buttonDisplay();
}

function buttonDisplay() {
  //BUTTON DISPLAY
  for (let b = 0; b < row; b++) buttons[b].display();
}
