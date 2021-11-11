class Sound {

  constructor(x, y, note, image) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.newSoundSize = 25;
    this.maxSize = 75;
    this.image = joyImage;
    this.active = false;
    this.speed = 5;
    this.vx = random(-this.speed,this.speed);
    this.vy = random(-this.speed,this.speed);

    // Oscillator
    this.oscillator = new p5.Oscillator();
    this.nearFreq = 220;
    this.farFreq = 440;
    this.oscillator.amp(0.025);
    this.oscillator.start();

    // Synth
    this.note = note;
    this.synth = new p5.PolySynth();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Update frequency
    let d = dist(this.x,this.y,width/2,height/2);
    let maxDist = dist(0,0,width/2,height/2);
    let newFreq = map(d,0,maxDist,this.nearFreq,this.farFreq);
    this.oscillator.freq(newFreq);
  }

  bounce() {
    if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
      this.vx = -this.vx;
      this.playNote();
    }

    if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
      this.vy = -this.vy;
      this.playNote();
    }
  }

  playNote() {
    this.synth.play(this.note,0.4,0,0.1);
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
    pop();

    if(this.active) {
      this.size = constrain(this.size, this.size, this.maxSize); //ISNT WORKING?
      this.size = this.size + 25;

      this.oscillator.freq(map(this.size, this.size, this.maxSize, 220, 800));
    }

    if(mouseIsPressed) {
      this.active = true;
    } else this.active = false;
  }

}
