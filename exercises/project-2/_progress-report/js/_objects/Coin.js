class Coin {

  constructor(x, y, image, font, name, state) {
    this.x = x;
    this.y = y;
    this.size = 150;
    this.angle = 0;
    this.beingDragged = false;
    this.active = true; //if coin should be displayed
    this.image = image; //display image
    this.font = font; //importing external font
    this.name = name; //coin name i.e loaded states
    this.state = undefined;
    this.textSize = 20;
    this.textFill = color(0,0,0);
  }

  //coin and slot interaction
  checkForSlot(slot) {
    let d = dist(slot.x, slot.y, this.x, this.y); //finding when coin is hovering over slot

    //making coin dissapear when coin is touching the slot and starting a game state asscociated with coin
    //VISUAL PLAY
    if (d < this.size/2 && this.name === `Visual Play`) {
      console.log(`starting game Visual Play...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Visual Play`;
    }
    //SOUND PLAY
    else if (d < this.size/2 && this.name === `Sound Play`) {
      console.log(`starting game Sound Play...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Sound Play`;
    }
    //DODGE SADNESS
    else if (d < this.size/2 && this.name === `Dodge Sadness`) {
      console.log(`starting game Dodge Sadness...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Dodge Sadness`;
    }
    //CATCH JOY
    else if (d < this.size/2 && this.name === `Catch Joy`) {
      console.log(`starting game Catch Joy...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Catch Joy`;
    }
    //KEEP JOY
    else if (d < this.size/2 && this.name === `Keep Joy`) {
      console.log(`starting game Keep Joy...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Keep Joy`;
    }
    //JUGGLE JOY
    else if (d < this.size/2 && this.name === `Juggle Joy`) {
      console.log(`starting game Juggle Joy...`);
      this.active = false;
      //start state associated to gameName
      this.state = `Juggle Joy`;
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

  //controlling dragging
  mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y); //finding when mouse is hovering over the object

    //drag object when mouse is pressed
    if (d < this.size/2) {
      this.beingDragged = true;
    }
  }

  //controlling dropping object
  mouseReleased() {
    this.beingDragged = false;
  }

  //display image and text as coin
  display() {
    if (this.active) { //only display if not dropped in slot
      push();
      //allowing for rotation
      translate(this.x,this.y);
      rotateY(radians(this.angle));
      //base shape with image mapped as texture
      push();
      noStroke();
      fill(0,0,0);
      texture(this.image);
      ellipse(0,0,this.size,this.size);
      pop();
      //display for text
      textSize(this.textSize);
      fill(this.textFill);
      textAlign(CENTER,CENTER);
      text(this.name,0, -(this.size/2+20));
      pop();

      this.angle += 1; //allows for rotation of object
    }
  }

}
