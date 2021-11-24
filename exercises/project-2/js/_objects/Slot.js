class Slot{

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 200;
    this.fill = 100;
  }

  display() {
    //display for slot
    push();
    noStroke();
    // translate(this.x,this.y)
    fill(this.fill);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
    pop();
  }

}
