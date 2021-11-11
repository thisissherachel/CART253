class Coin {

  constructor(x, y, image, name) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.hover = false; //if mouse is hovering over coin
    this.grabbed = false; //if coin interacts with mouse
    this.active = true; //if coin should be displayed
    this.image = joyImage; //display image
    this.name = name; //coin name i.e loaded states
    this.textSize = 20;
    this.textFill = color(255,0,0);
  }

  //checking if coin interacts with slot
  checkForSlot(slot) {
    if (this.x > slot.x - slot.w/2 &&
        this.x < slot.x + slot.w/2 &&
        this.y > slot.y - slot.h/2 &&
        this.y < slot.y + slot.h/2) {
      this.active = false;
    }
  }


  //movement for coin connected to mouseIsPressed
  mouseInteraction() {
    let d = dist(mouseX, mouseY, this.x, this.y); //when mouse is hovering



    // //check when mouse is hovering over coin
    // if (this.x > this.x - this.size/2 &&
    //     this.x < this.x + this.size/2 &&
    //     this.y > this.y - this.size/2 &&
    //     this.y < this.y + this.size/2) {
    //
    //     this.hover = true;
    // } return false;

    //when mouse presses
    if(mouseIsPressed && d < this.size) {
      this.grabbed = true;
    }

    //change coin position when grabbed
    if (this.grabbed) {
      cursor('grab')
      this.x = mouseX;
      this.y = mouseY;
    } else {
      return false
      cursor(ARROW);
      }

    // //when mouse hovers for cursor changes
    // if(this.hover) {
    //   cursor('grab');
    // } else cursor(ARROW);
    //
    // //when mouse holds down a press on coin
    // if(mouseIsPressed && this.hover) {
    //   this.grabbed = this.hover;
    // }
    //
    // //drop coin when mouse press released
    // if(mouseReleased) {
    //   this.grabbed = null;
    // }
    //
    // //change coin position
    // if(mouseDragged && this.grabbed) {
    //   this.x = mouseX;
    //   this.y = mouseY;
    // }
  }

  //allows to rotation of coins
  rotateCoin() {
    rotateY(millis()/1000);
  }

  //display image and text as coin
  display() {
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
    pop();

    push();
    textSize(this.textSize);
    fill(this.textFill);
    textAlign(CENTER,CENTER);
    text(this.name,this.x,this.y);
    pop();
  }

}
