class Sound {
//objects that add sound to the program

  constructor(x,y,image,randomNote) {
    this.x = x;
    this.y = y;
    this.size = 25; //size of new object being created
    this.minSize = 25; //smallest size possible for object
    this.maxSize = 200; //largest size possible for object
    this.image = image; //variable for image displayed for object
    // this.active = false; //if object increases with mousePressed or not
    this.mouseHeld = true;
    this.randomNote = randomNote; //random note chosen from array in script
    this.speed = 5;
    this.vx = random(-this.speed,this.speed);
    this.vy = random(-this.speed,this.speed);

    // Oscillator
    // sound played when object is created and moves
    this.oscillator = new p5.Oscillator(`sine`); //creating a sine oscillator
    this.minFreq = 220; //minimum frequency linked with smallest object size
    this.maxFreq = 440; //maximum frequency linked with largest object size
    this.oscillator.start();
    this.oscillator.amp(0.25); //setting amplitude for ascillator

    // Synth
    // note played when object is created and when bouncing of walls
    this.note = `C4`; //specific note linked to bouncing off walls
    this.synth = new p5.PolySynth();
  }

  move() {
  //movement of each object created and sound associated to it
    this.x += this.vx;
    this.y += this.vy;

    // // Update frequency
    // let d = dist(this.x,this.y,width/2,height/2); //variable for location of object on window
    // let maxDist = dist(0,0,width/2,height/2); //locate when object touches wall
    // // let newFreq = map(d,0,maxDist,this.nearFreq,this.farFreq); //mapping frequency to location on window
    // // this.oscillator.freq(newFreq); //oscillator with be reactive to objects location on window
  }

  bounce() {
  //making the objects bounce and attaching a sound to the bounce
    if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) { //when object touches wall (x-axis)
      this.vx = -this.vx; //go the opposite direction
      this.playNote(); //play a note chosen in function playNote
    }

    if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) { //when object touches wall (y-axis)
      this.vy = -this.vy; //go the opposite direction
      this.playNote(); //play a note chosen in function playNote
    }
  }

  playNote() {
  //setting up the PolySynth to be called
    this.synth.play(this.note,0.4,0,0.1); //play chosen note at select velocity, time, and duration
  }

  newSound() {
  //setting up the sounds played when mouse if pressed
    if(mouseIsPressed && this.mouseHeld) {
      this.currentSize = this.size + 25; //object size increases with time of mouse pressed
      this.currentSize = constrain(this.currentSize, this.minSize, this.maxSize); //constraining object size
      this.size = map(this.currentSize, this.minSize, this.maxSize, this.minFreq, this.maxFreq); //mapping changes in freq with object size
    } else {this.mouseHeld = false;}
  }

  display() {
  //attaching image to object to display
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
    pop();
  }
}
