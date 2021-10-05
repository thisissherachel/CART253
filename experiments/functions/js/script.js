"use strict";

/**************************************************
functions NOTES
Rachel B. Richard
**************************************************/

//5.1 Defining functions (modularity)

// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 1,
//   vy: 0,
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
//
// function draw() {
//   background(0);
//
//   move();
//   wrap();
//   display();
// }
//
// function move() { //organize code with functions (refactoring)
//   circle.x += circle.vx; //movement
//   circle.y += circle.vy;
// }
//
// function wrap() { //organize code with functions (refactoring)
//   if(circle.x > width) { //starts back at origin
//     reset();
//   }
// }
//
// function display() { //organize code with functions (refactoring)
//   fill(0,0,255);
//   ellipse(circle.x,circle.y,circle.size);
// }
//
// function reset(){ //create a function for code that is seen often. you can now call the function instead of copy/paste
//   circle.x = 0; //back to origin
//   circle.vx += + 2; //increase velocity
//   circle.size += +5; //increase size
// }
//
// function mousePressed() {
//   reset();
// }


//5.2 Defining functions wih paraemters

// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(0);
//
//   parallels(0,50,10,2,10,10);
//   parallels(0,150,20,3,15,20);
//   parallels(0,250,30,5,20,30);
//   parallels(0,350,40,7,25,40);
//   parallels(0,450,50,9,30,50);
//
//   function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing) {//creating a bunch of parallel lines with all these variables used in the function
//     for(let i=0; i < numLines; i++) { //for loop that starts at 0, continues till 100 and goes up by one
//       noStroke();
//       fill(255);
//       rectMode(CENTER);
//       rect(x,y,lineWidth,lineHeight);
//       x += + lineSpacing; //draw rect to the left each time
//   }
//   }
// }


//5.3 Return values

// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
// }
//
// function setup() {
//   createCanvas(500,500);
//
// //   let hotCelsius = toCelsius(100); //calls variable in function so we can see it working
// //   console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees celsius.`); //writes value is console
// //
// //   let coldCelsius = toCelsius(10);
// //   console.log(`100 degrees Fahrenheit is ${coldCelsius} degrees celsius.`); //writes value is console
// // }
//
//   reset();
// }
//
// function draw() {
//   background(0);
//
//   // let x = random(0,width); //random is a value that returns us a value (return value: calculates something for us)
//   // let y = random(0,height);
//   //
//   // ellipse(x,y,100); //theoretically cyou could call function inside the variables here instead of before
// // }
//
//   //creating a return values
//   // function toCelsius(fahrenheit) { //function that calculates celcius from a fahrenheit value
//   //   let celsius = (fahrenheit - 32) * 5/9; //calculates
//   //   return celsius; //returns value
// //   }
// // }
//
//   //return values in booleans
//     move();
//     checkOffscreen();
//     display();
//   }
//
//   function move() { //movement of circle
//     circle.x += circle.vx;
//     circle.y += circle.vy;
//   }
//
//   function checkOffscreen() {
//     if (checkIsOffscreen()){ //function returns boolean which decides if reset function is a go ro not
//       reset();
//     }
//   }
//
//   function checkIsOffscreen() {
//     if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) { //check all possibilities of being off screen
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//
//
//   function display() { //display circle
//     ellipse(circle.x,circle.y,circle.size);
//   }
//
//   function reset() { //reset all values
//     circle.x = 250; //back to center
//     circle.y = 250;
//     circle.vx = random(-10,10); //random speed and angle
//     circle.vy = random(-10,10);
//   }


//5.4 text
//
// //template strings
// let name = "Rachel";
// let state = "happy";
// let string = `Hello I'm ${name} and I said "I am so ${state}"`;
//
// let thisisme = {
//   string: `${string}`,
//   x: 250,
//   y: 250,
//   vx: 2,
//   vy: 1,
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(255);
//
//   thisisme.x += thisisme.vx;
//   thisisme.y += thisisme.vy;
//
//   fill(0,0,255);
//   stroke(200,50,200);
//
//   textAlign(CENTER,CENTER);
//   textSize(20);
//   textStyle(BOLD);
//
//   text(thisisme.string,thisisme.x,thisisme.y);
// }


//5.5 states

// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// }
//
// let state = `title`; //using string as variable where the possibilities are `title`, `animation`, and `end`
//
//
// function setup() {
//   createCanvas(500,500);
//   circle.vx = circle.speed;
//
//   textSize(20); //setting defaults for title screens
//   textAlign(CENTER,CENTER);
// }
//
// function draw() {
//   background(0);
//
//   if (state === `title`) {
//     title();
//   }
//
//   else if(state === `animation`) {
//     animation();
//   }
//
//   else if(state === `end`) {
//     end();
//   }
// }
//
// function title() {
//   //title
//   fill(255);
//   text(`Life.`,width/2,height/2);
// }
//
// function animation() {
//   //animation
//   circle.x += circle.vx; //movement
//   circle.y += circle.vy;
//
//   if (circle.x > width) {
//     state = `end`;
//   }
//
//   ellipse(circle.x,circle.y,circle.size); //display
// }
//
// function end() {
//   //end
//   fill(255);
//   text(`That's that.`,width/2,height/2);
// }
//
// function keyPressed() { //allows you to switch states with a key being pressed
//   if (state === `title`) {
//     state = `animation`;
//   }
//   if (state === `end`) {
//     state = `title`;
//   }
// }


// 5.6 keyboard inputs

let bg = 0;

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(bg);

// //display what key is pressed adn have it attaches to events
//   textAlign(CENTER,CENTER);
//   textSize(20);
//   textStyle(BOLD);
//   stroke(255);
//   text(key,width/2,height/2); //displays in text the key you pressed
//   // text(keyCode,width/2,height/2) //from the 's keycode set' fing the correspondance on google
//
// function keyPressed() {
//   if (key === 'a') { //reads if youpressed the key 'a' to then react
//     bg = 0;
//   }
//   else if (key === 'b') {
//     bg = 127;
//   }
//   else if (key === 'c') {
//     bg = 255;
//   }
// }

//   //display rectangle when key is held down
//   if (keyIsDown(65)) { //with key code 65=a
//     rectMode(CENTER);
//     rect(250,250,100,100);
//   }
// }

//allow for program to read what is pressed on keyboard
  handleInput(); //dealing with user input
  move();
  display();
}

  function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      circle.vx = -circle.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      circle.vx = circle.speed;
    }
    else { //if neither of the above are true
      circle.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      circle.vy = -circle.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      circle.vy = circle.speed;
    }
    else { //if neither of the above are true
      circle.vy = 0;
    }
  }

  function move() { //movement of circle
    circle.x += circle.vx;
    circle.y += circle.vy;
  }
  function display() { //display circle
    ellipse(circle.x,circle.y,circle.size);
  }
