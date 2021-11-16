class Sound {
//objects that add sound to the program

  constructor(x, y, randomNote, image) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.minSize = 25; //smallest size possible for object
    this.maxSize = 500; //largest size possible for object
    this.image = image; //variable for image displayed for object
    this.active = false; //if object increases with mousePressed or not
    this.randomNote = randomNote; //random note chosen from array in script
    this.speed = 5;
    this.vx = random(-this.speed,this.speed);
    this.vy = random(-this.speed,this.speed);

    // Oscillator
    // sound played when object is created and moves
    this.oscillator = new p5.Oscillator(`triangle`); //creating a sine oscillator
    this.minAmp = -2; //minimum frequency linked with smallest object size
    this.maxAmp = 2; //maximum frequency linked with largest object size
    this.nearFreq = 220; //minimum frequency linked with smallest object size
    this.farFreq = 660; //maximum frequency linked with largest object size
    this.oscillator.start();

    // Synth
    // note played when object is created and when bouncing of walls
    this.note = `C4`; //specific note linked to bouncing off walls
    this.synth = new p5.PolySynth();
  }

  move() {
  //movement of each object created and sound associated to it
    this.x += this.vx;
    this.y += this.vy;

    // Update frequency
    let d = dist(this.x,this.y,width/2,height/2); //variable for location of object on window
    let maxDist = dist(0,0,width/2,height/2); //locate when object touches wall
    let newFreq = map(d,0,maxDist,this.nearFreq,this.farFreq); //mapping frequency to location on window
    this.oscillator.freq(newFreq); //oscillator with be reactive to objects location on window
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

  sounds() {
  //setting up the sounds played when mouse if pressed
    if(this.active) { //when mouse is pressed, shape of object can be chosen which choosen the sound
      this.size = this.size + 25; //object size increases with time
      this.size = constrain(this.size, this.minSize, this.maxSize) //constraining object size

      let newAmp = map(this.size, this.minSize, this.maxSize, this.minAmp, this.maxAmp) //mapping changes in amp with object size
      this.oscillator.amp(newAmp); //amplitude for ascillator
    }

    if(mouseIsPressed) { //when moused pressed is when chnages in sound can happen
      this.active = true;
    } else this.active = false;

  }

  display() {
  //attaching image to object to display
    push(); //attaching image to object
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
    pop();
  }

}
