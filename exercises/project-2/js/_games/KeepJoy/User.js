class User {

  //all parameters for user
  constructor(image) {
    this.x = 0;
    this.y = 0;
    this.size = 100;
    this.image = userImage.current;
  }

  //movement of user
  move() {
    //movement controlled by mouse
    this.x = mouseX;
    this.y = mouseY;
  }

  //user displayed as a rectangle
  display() {
    imageMode(CENTER);
    image(userImage.current,this.x,this.y,this.size,this.size);
  }
}
