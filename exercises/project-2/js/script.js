"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02
Program made that allows one to begin a game by dragging a coin into a slot
**************************************************/

//background colour of main page
let backgroundShade = 255;

//objects
let slot;
let coins = [];
let coinCount = 6;

//state option are `intro`, `simulation`, and `game` which is linked to all the games linked to the coins
let state = `intro`;

//name for the game that will be stored in coins
let gameName = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//images
let happyImage;
let coinImage;

//fonts
let font;


//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  happyImage = loadImage(`assets/images/happy.png`)
  coinImage = loadImage(`assets/images/coin.png`);
  font = loadFont(`https://use.typekit.net/af/932699/0000000000000000773597c2/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3`); //loading an adobe font
}


//SETUP
//seting up the states, the coins and slot layout, and classes for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //input WEBGL for 3D
  ortho(); //setting camera angle for 3D
  textFont(font); //calling font variable

  //slot creation and positioning with class
  let x = width/2;
  let y = height/2;
  slot = new Slot(x, y);

  //coins creation and positioning with array and class
  for (let i = 0; i < coinCount; i++) {
    let x = random(100, width-100); //random x position on window
    let y = random(100, height-100); //random y position on window

    //REPOSITION IF RANDOM POSITION IS ON SLOT
      let d = dist(x, y, width/2, height/2); // Calculate the distance between coin and slot
      while (d < 200) { //check if overlap with where slot is positioned
        // If it does, try a different random position
        x = random(0, width-100);
        y = random(0, height-100);
        // Recalculate the distance for the next time through the loop
        d = dist(x, y, width/2, height/2);
      }

    let image = coinImage;
    let font = textFont;
    let name = gameName[i];
    let state = undefined;
    let coin = new Coin(x, y, image, font, name, state);
    coins.push(coin);
  }
}


//DRAW
//for frame by frame program running setup of slot display and coin display/movement
function draw() {
  background(backgroundShade);
  translate(-width/2,-height/2)

  if (state === `intro`) {
    intro();
  }

  else if (state === `simulation`) {
    simulation();
  }
}


//STATES
//compartmentalizing what happens where. (intro vs. coin menu simulation)
function intro() {
  //setting user arrow to pointer to allow user to notice their clicking ability
  cursor(`pointer`);

  // //background interactivity
  // interactiveBackground();

  //text
  push();
  textSize(100);
  fill(0);
  textAlign(CENTER,CENTER);
  text(`Just have some fun!`,width/2,height/3);
  pop();

  push();
  textSize(20);
  fill(0);
  textAlign(CENTER,CENTER);
  text(`
    Welcome to an achive of an intro to the p5 java library!
    This world is creative, fun, and joyful.

    Navigate around the menu by dragging coins to the slot and discovering where they bring you.`
    ,width/2,height/3+100);
  pop();

  push();
  textSize(30);
  fill(0);
  textAlign(CENTER,CENTER);
  text(`click to enter :)`,width/2,height/3+200);
  pop();
}

function simulation() {
  //setting user arrow to hand to allow user to notice their grabbing ability
  cursor(`grab`);

  //allows for display of slot
  slot.display(); //display slot using class

  //allows for display and movement of coin using class
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.display();
    coin.drag(); //interaction with mouse being pressed
  }
}


//USER INTERACTION
//allowing for dragging
function mousePressed() {
  //load menu page
   if (state === `intro`) {
    state = `simulation`;
  }

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.mousePressed();
  }
}
//allowing for dropping
function mouseReleased() {
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.mouseReleased();
    coin.checkForSlot(slot); //check if coin is touching slot
  }
}


//INTERACTIVE BACKGROUND
//fun interactive background that reacts to the movement of the users mouse
function interactiveBackground() {
  //setting up for loop for smileys across window
  let smileWidth = 40; //setting smiley size
  let smileHeight = smileWidth; //square
  let mouseColor = color(`rgb(255, 255, 0)`); //smiley color

  for (let x = 5; x < width-5; x+=50) { //setting grid for smileys on x-axis
    for (let y = 5; y < height-5; y+=50) { //setting grid for smileys on y-axis
      //base
      push();
      stroke(mouseColor);
      strokeWeight(5);
      noFill();
      ellipse(x+20,y+20,smileWidth,smileHeight);
      pop();
      //eyes
      push();
      fill(mouseColor);
      noStroke();
      ellipse(x+12,y+14,smileWidth/8,smileWidth/8);
      ellipse(x+28,y+14,smileWidth/8,smileWidth/8);
      //mouth
      push();
      stroke(mouseColor);
      strokeWeight(5);
      noFill();
      arc(x+20,y+20,25,25,0,PI,OPEN);
      pop();
    }
  }

}
