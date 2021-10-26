class Flower {

// //8.1
// //constructor allows you to make properties to an object called this.
//   constructor() {
//     // Position and size information
//     this.x = random(0, width);
//     this.y = random(0, height);
//     this.size = 50;
//     this.stemLength = 75;
//     this.stemThickness = 10;
//     this.petalThickness = 10;
//     // Color information
//     this.stemColor = {
//       r: 50,
//       g: 150,
//       b: 50
//     };
//     this.petalColor = {
//       r: 200,
//       g: 50,
//       b: 50
//     };
//     this.centreColor = {
//       r: 50,
//       g: 0,
//       b: 0
//     };
//   }
//
//   //display allows you to draw an object called this.
//   display() {
//     push();
//     // Set the stroke weight for the petals and the stem
//     strokeWeight(this.stemThickness);
//     // Draw a line for the stem
//     stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
//     line(this.x, this.y, this.x, this.y + this.stemLength);
//     // Draw a circle with a heavy outline for the flower
//     strokeWeight(this.petalThickness);
//     fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
//     stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
//     ellipse(this.x, this.y, this.size);
//     pop();
//   }
// }

// //8.2
// //assigning variables
// //constructor allows you to make properties to an object called this.
//   constructor(x, y, size, stemLength, petalColor) {
//     // Position and size information
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.stemLength = stemLength;
//     this.stemThickness = 10;
//     this.petalThickness = 10;
//     // Color information
//     this.stemColor = {
//       r: 50,
//       g: 150,
//       b: 50
//     };
//     this.petalColor = petalColor
//     this.centreColor = {
//       r: 50,
//       g: 0,
//       b: 0
//     }
//   }
//
// //display allows you to draw an object called this.
//   display() {
//     push();
//     // Draw a line for the stem
//     strokeWeight(this.stemThickness);
//     stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
//     line(this.x, this.y, this.x, this.y + this.stemLength);
//     // Draw a circle with a heavy outline for the flower
//     strokeWeight(this.petalThickness);
//     fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
//     stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
//     ellipse(this.x, this.y, this.size);
//     pop();
//   }
// }

//8.3
//assigning events to a class
//constructor allows you to make properties to an object called this.
  constructor(x, y, size, stemLength, petalColor) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.stemLength = stemLength;
    this.stemThickness = 10;
    this.petalThickness = 10;
    // Color information
    this.stemColor = {
      r: 50,
      g: 150,
      b: 50
    };
    this.petalColor = petalColor
    this.centreColor = {
      r: 50,
      g: 0,
      b: 0
    };
  }

//display allows you to draw an object called this.
  display() {
    push();
    // Draw a line for the stem
    strokeWeight(this.stemThickness);
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // Draw a circle with a heavy outline for the flower
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

//adding an event
  mousePressed() {
    // Calculate the distance between this flower and the mouse
    let d = dist(this.x,this.y,mouseX,mouseY);
    // Check if the distance is less than the head of the flower
    if (d < this.size/2 + this.petalThickness) {
      // If it is, this flower was clicked, so increase its stem length
      this.stemLength = this.stemLength + 5;
      // And also change its y position so it grows upward! (If we didn't do this
      // the then stem would grow downward, which would look weird.)
      this.y = this.y - 5;
    }
  }
}
