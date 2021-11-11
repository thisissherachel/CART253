class Slot{

  constructor(x, y, w, h) {
    this.x = 0;
    this.y = 0;
    this.w = 20;
    this.h = 150;
    this.fill = 100;
  }

  display() {
    //display for slot
    push();
    noStroke();
    fill(slot.fill);
    rectMode(CENTER);
    rect(width/2,height/2,slot.w,slot.h);
    pop();
  }

}
