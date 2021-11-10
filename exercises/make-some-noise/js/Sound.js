class Sound {

  constructor(x,y,note) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.maxSize = 25*6;
    this.fill = {
      r: random(0,255),
      g: random(0,255),
      b: random(0,255)
    };
    this.speed = 3;
    this.vx = random(-this.speed,this.speed);
    this.vy = random(-this.speed,this.speed);

    // Oscillator
    this.oscillator = new p5.Oscillator();
    this.nearFreq = 220;
    this.farFreq = 340;
    this.oscillator.amp(0.025);
    this.oscillator.start();

    // Synth
    this.rate = 0;
    this.currentRate = undefined;
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
    let currentRate = map(this.size, this.size, this.maxSize, -3, 3);
    this.rate = this.currentRate;

    this.synth.play(this.note,0.8,0,0.1);
  }

  display() {
    push();
    noStroke();
    fill(this.fill.r,this.fill.g,this.fill.b);
    ellipse(this.x,this.y,this.size);
    pop();
  }

  mouseIsPressed () {
    this.size = this.size + 25;
    constrain(this.size, this.size, this.maxSize);
  }

}
