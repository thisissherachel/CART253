"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02
Program made that allows one to begin a game by dragging a coin into a slot
**************************************************/

//MADE MY DRAGGINGN NOT WORK
// //framerate at which the colours change
// let fr = 1;

//objects
let funBackground;
let postIt;
let slot;
let coins = [];
let coinCount = 6;

//state option are `intro`, `simulation`, and `game` which is linked to all the games linked to the coins
let state = `intro`;

//name for the game that will be stored in coins
let gameName = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//images
let header;
let happyImage;
let coinImage;

//fonts
let font;


//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  header = loadImage(`assets/images/justhavesomefun.png`);
  happyImage = loadImage(`assets/images/happy.png`);
  coinImage = loadImage(`assets/images/coin.png`);
  font = loadFont(`https://use.typekit.net/af/932699/0000000000000000773597c2/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3`); //loading an adobe font
}


//SETUP
//seting up the states, the coins and slot layout, and classes for the multi-game situation
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //input WEBGL for 3D
  translate(-width/2,-height/2); // setting origin point to center for WEBGL
  ortho(); //setting camera angle for 3D
  textFont(font); //calling font variable

  // //NOT A GREAT METHOD
  // frameRate(fr); //allow for rotation of colours in background
  background(random(255),random(255),random(255)); //background colour a random colour

  //background creation and positioning with class
  funBackground = new FunBackground();
  funBackground.displaySmiles();

  //postIt creation and positioning with class
  postIt = new PostIt();

  //slot creation and positioning with class
  slot = new Slot();

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
    let gameState = undefined;
    let coin = new Coin(x, y, image, font, name, gameState);
    coins.push(coin);
  }
}


//DRAW
//for frame by frame program running setup of slot display and coin display/movement
function draw() {
    translate(-width/2,-height/2); // setting origin point to center with WEBGL again for draw.

  if (state === `intro`) {
    intro();
  }

  else if (state === `simulation`) {
    simulation();
  }

  else if (state === `game`) {
    game();
  }
}


//STATES
//compartmentalizing what happens where. (intro vs. coin menu simulation)

function intro() {
  //setting user arrow to pointer to allow user to notice their clicking ability
  cursor(`pointer`);

  //allows for display of post-it
  postIt.display(); //display post-it using class

  //header (image in top left corner)
  push();
  let headerAR = header.width / header.height; //setting a value for the header's aspect ratio
  let headerWidth = 3*width/4;
  let headerHeight = headerWidth/headerAR;
  image(header,0.05*width,0.1*height,headerWidth,headerHeight);
  pop();
}


function simulation() {
  //setting user arrow to hand to allow user to notice their grabbing ability
  cursor(`grab`);

  background(255);

  //allows for display of slot
  slot.display(); //display slot using class

  //allows for display and movement of coin using class
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    let gameState =
    coin.display();
    coin.drag(); //interaction with mouse being pressed

    //loading the game state on to each coin
    if (coin.gameState === `CatchJoy`) {
      state = `game`;
    }
    if (coin.gameState === `DodgeSadness`) {
      state = `game`;
    }
    if (coin.gameState === `KeepJoy`) {
      state = `game`;
    }
    if (coin.gameState === `SoundPlay`) {
      state = `game`;
    }
    if (coin.gameState === `VisualPlay`) {
      state = `game`;
    }
  }
}

function game() {
  //creating a canvas for the game to play inside
  createCanvas(windowWidth*0.8,windowHeight*0.8);

  //creating a button to go back to simulation state
  gobackButton();

  //allows for display and movement of coin using class
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.display();
    coin.drag(); //interaction with mouse being pressed

    //loading the game state on to each coin
    if (gameState === `CatchJoy`) {
      state = `game`;
    }
    if (gameState === `DodgeSadness`) {
      state = `game`;
    }
    if (gameState === `KeepJoy`) {
      state = `game`;
    }
    if (gameState === `SoundPlay`) {
      state = `game`;
    }
    if (gameState === `VisualPlay`) {
      state = `game`;
    }
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
//a button to go back to simulation state while in game state
function gobackButton() {

  let gobackButton = {
    x: windowWidth -100,
    y: windowHeight*1.0 - 100,
    size: 100,
    image: coinImage,
    text: `< GO BACK`,
  };

  push();
  //display for image
  imageMode(CENTER);
  image(gobackButton.image,gobackButton.x,gobackButton.y,gobackButton.size,gobackButton.size);
  //display for text
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(gobackButton.text,0,this.size/2);
  pop();
}
