class Button {

  constructor(posx, posy, name) {
    this.posx = posx;
    this.posy = posy;
    this.name = [`Visual Play`, `Sound Play`, `Dodge Sadness`, `Catch Joy`, `Keep Joy`, `Juggle Joy`];
    this.nameNul = 0; //origon value for the display button name array
    this.hoverTint = 0.25; //tint of button on hover
    this.buttonFill = 250; //fill of button
    this.textSize = 15;
    this.textFill = 255;
  }


  hover() {
  //if mouse hovers over button create a true boolean
    if (mouseX > this.posx & mouseX < this.posx + w & mouseY > this.posy & mouseY < this.posy + h)
    return true;
    return false;
  }

  // select() {
  // //if mouseIsPressed over button switch class to corresponding gameplay
  //
  //   // if (this.hover() && mouseIsPressed) { //GO THROUGH GAME PLAY ARRAY?? SWITCH STATE??
  //   //
  //   // }
  // }

  display() {
  //display for button shape, button text, and button hover effect
    if (this.hover()) {
      tint (255, this.hoverTint);
    }
    else {
      tint (255, 0);
    }

    //button shape
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.buttonFill);
    rect(this.posx, this.y, this.width, this.height);
    pop();

    //button text
    push();
    textAlign(CENTER, CENTER);
    textSize(this.textSize);
    fill(this.textFill);
    pop();

    if(displayButtonName) text(buttonName(this.name[this.nameNul]), posx + 20, posy + h/2 +20);

    // this.select();
  }

  buttonName () {
    let buttonName = this.name[this.nameNul]; //setting variable to the array
    this.nameNul = this.nameNul + 1; //allow for it to go through the names with the buttons

    if (this.nameNul > this.name.length) {
      displayName = false; //stop displaying names once array reached end
    }
  }


  // mouseIsPressed() {
  //
  //
  // }
}
