"use strict";

/**************************************************
Just have fun.
Rachel B. Richard

PROJECT 02
Program made that allows one to begin a game by dragging a coin into a slot
**************************************************/

//background
let cnv; //canvas variable
let backgroundColor; //background colour variable
let funBackground; //variable for smilies background class

//objects
let postIt; //post it note for intro info
let slot; //slot for coing to interact with
let coin; //coin associate to game
let coins = []; //coins array for association to games array
let coinCount = 6; //number of coins/games

//state option are `intro`, `simulation`, and `game` which is linked to all the games linked to the coins
let state = `intro`;

//name for the game that will be stored in coins
let gameName = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];

//images
let header; //graphic
let coinImage; //object
let happyImage; //user option
let sadImage; //user option
let cryImage; //user option
let joyImage; //object option
let sadnessImage; //object option

//fonts
let font;


//PRELOAD
// for images and asets going to be used in the running grogram
function preload() {
  header = loadImage(`assets/images/justhavesomefun.png`);
  coinImage = loadImage(`assets/images/coin.png`);
  happyImage = loadImage(`assets/images/happy.png`);
  sadImage = loadImage(`assets/images/sad.png`);
  cryImage = loadImage(`assets/images/cry.png`);
  joyImage = loadImage(`assets/images/joy.png`);
  sadnessImage = loadImage(`assets/images/sadness.png`);
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

  //random colour for background
  backgroundColor = (color(random(255),random(255),random(255)));
  background(backgroundColor);

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
    coin = new Coin(x, y, image, font, name);
    coins.push(coin);
  }

  let gameTimer = 0; //timer counting the frames during the game
  let gameLength = 60 * 10; // 10 seconds till game over
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

//INTRO STATE explains game
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

//SIMULATION STATE is the coin slot machine simulatin
function simulation() {
  //creating a canvas for the simulation to be inside
  let cnv = createCanvas(windowWidth*0.95,windowHeight*0.95);
  cnv.position(windowWidth*0.05/2,windowHeight*0.05/2); //centering canvas
  ortho(); //setting camera angle for 3D

  //background colour setup
  colorBackground();
  background(backgroundColor);

  //allows for display of slot
  slot.display(); //display slot using class

  //allows for display and movement of coin using class
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    coin.display();
    coin.drag(); //interaction with mouse being pressed
  }
}

//GAME STATE is the setup for the game play
function game() {
  //creating a canvas for the game to play inside
  let cnv = createCanvas(windowWidth*0.95,windowHeight*0.95);
  cnv.position(windowWidth*0.05/2,windowHeight*0.05/2); //centering canvas
  background(255);

  console.log(`game state`);

  }

//   //creating a button to go back to simulation state
//   gobackButton(); {
//
// }



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
    coin.checkForSlot(slot); //check if coin is touching slot and chand gameState to the name of the coin
  }

  //NOT WORKING
  //check if check for slot occured
  if(coin.checkForSlot(slot)) {
    //loading the game state on to each coin
    if (!coin.gameState === `CatchJoy`) {
      console.log(`game state`);
      state = `game`;
    }
    else if (!coin.gameState === `DodgeSadness`) {
      state = `game`;
    }
    else if (!coin.gameState === `KeepJoy`) {
      state = `game`;
    }
    else if (!coin.gameState === `SoundPlay`) {
      state = `game`;
    }
    else if (!coin.gameState === `VisualPlay`) {
      state = `game`;
    }
  }
}


function colorBackground() {
  //making a function to change the background colour with frame counts
  if (frameCount % 90 === 0) {
    console.log(`change colour`);
    //change the random colour
    backgroundColor = (color(random(255),random(255),random(255)));
  }

}

// //a button to go back to simulation state while in game state
// function gobackButton() {
//
//   let gobackButton = {
//     x: width-100,
//     y: height*1.0 - 100,
//     size: 100,
//     image: coinImage,
//     text: `< GO BACK`,
//   };
//
//   push();
//   //display for image
//   imageMode(CENTER);
//   image(gobackButton.image,gobackButton.x,gobackButton.y,gobackButton.size,gobackButton.size);
//   //display for text
//   textSize(30);
//   fill(255);
//   textAlign(CENTER,CENTER);
//   text(gobackButton.text,0,this.size/2);
//   pop();
// }
