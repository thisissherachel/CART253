class Coin {

  constructor(x, y, image, font, name) {
    this.x = x;
    this.y = y;
    this.size = 150;
    this.angle = 0;
    this.beingDragged = false;
    this.active = true; //if coin should be displayed
    this.image = image; //display image
    this.font = font;
    this.name = name; //coin name i.e loaded states
    this.textSize = 20;
    this.textFill = color(255,0,0);
  }

  //coin and slot interaction
  checkForSlot(slot) {
    let d = dist(slot.x, slot.y, this.x, this.y); //finding when coin is hovering over slot

    //make coin disapear when coin is touching the slot
    if (d < this.size/2) {
      console.log(`you found the slot!`);
      this.active = false;
    }
  }


  //mouse and object interation
  drag() {
    if (this.beingDragged) {
        console.log(`you're dragging!`);
        cursor(`grabbing`); //change cursor to hand

        //update objects position with mouse
        this.x = mouseX;
        this.y = mouseY;
    } else cursor(`grab`);
  }

  mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y); //finding when mouse is hovering over the object

    //drag object when mouse is pressed
    if (d < this.size/2) {
      this.beingDragged = true;
    }
  }

  mouseReleased() {
    this.beingDragged = false;
  }

  //display image and text as coin
  display() {
    if (this.active) { //only display if not dropped in slot
      push();
      //display for image
      imageMode(CENTER);
      translate(this.x,this.y)
      rotateY(radians(this.angle))
      fill(0,0,0,0);
      image(this.image,0,0,this.size,this.size);
      //display for text
      textSize(this.textSize);
      fill(this.textFill);
      textAlign(CENTER,CENTER);
      text(this.name,0,0);
      pop();

      this.angle += 1; //allows for rotation of object
    }
  }

}
