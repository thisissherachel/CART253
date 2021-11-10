class Coin {

  constructor(x, y, image) {
    this.x = 0;
    this.y = 0;
    this.size = 50;
    this.image = joyImage;
    this.textSize = 15;
    this.textFill = 255;
  }

  display() {
    this.x = random(this.x, 50, width-50);
    this.y = random(this.y, 50, height-50);

    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);

    push();
    textSize(this.textSize);
    fill(this.textFill);
    textAlign(CENTER,CENTER);
    text(`coin`,width/2,height/2);
    pop();
  }
}
