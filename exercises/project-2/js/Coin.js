class Coin {

  constructor(x, y, image, name) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.active = false;
    this.image = joyImage;
    this.name = name;
    this.textSize = 20;
    this.textFill = color(255,0,0);
  }

  move() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    if(mouseIsPressed && d < this.size) {
      this.active = true;
    }

    if (this.active) {
      cursor(HAND);
      this.x = mouseX;
      this.y = mouseY;
    } return false;
  }

  display() {
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);

    push();
    textSize(this.textSize);
    fill(this.textFill);
    textAlign(CENTER,CENTER);
    text(this.name,this.x,this.y);
    pop();
  }

}
