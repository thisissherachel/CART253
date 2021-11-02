class SportsCar extends Car {
  // Create a new SportsCar object, make it faster than a Car
  constructor(x, y) {
    // Call the super class (Car) constructor
    super(x, y);
    this.vx = 15; // So fast!
  }

  // Display the sports car by first displaying the regular car
  // then added our racing stripes
  display() {
    push();

    // Call the super class (Car) display() method to display the standard
    // car shape (note that this will also call the Vehicle version of display()!)
    super.display();

    //Changing the colour
    push();
    rectMode(CENTER);
    noStroke();
    fill(0, 0, 255);
    rect(this.x, this.y, this.width, this.height);
    pop();

    // Add our racing stripes!
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 0);
    rect(this.x, this.y - this.height / 10, this.width, this.height / 10)
    rect(this.x, this.y + this.height / 10, this.width, this.height / 10)
    pop();
  }
}
