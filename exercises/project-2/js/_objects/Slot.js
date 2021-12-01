class Slot{
//slot for coins to bedropped in

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
    fill(this.fill+75);
    rectMode(CENTER);
    rect(this.x,this.y,this.w+100,this.h+100);
    pop();

    push();
    noStroke();
    fill(this.fill);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
    pop();


  }

}
