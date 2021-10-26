class Joy {

  //all perameters for joy
  constructor(x, y, image) {
    this.x = random(300, width-300);
    this.y = random(300, height-300);
    this.vx = 0;
    this.vy = 0;
    this.ax = 0.5;
    this.ay = 0.5;
    this.maxSpeed = 2;
    this.size = 50;
    this.active = true;
    this.image = joyImage;
  }

  //joy moves in random directions around screen
  move() {
    //setting a random direction and angel to the joy object
    this.ax = random(-this.ax, this.ax);
    this.ay = random(-this.ay, this.ay);
    //adding acceleration to movement
    this.vx += this.ax;
    this.vy += this.ay;
    //constraining the acceleration
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    //movement
    this.x += this.vx;
    this.y += this.vy;
    //movement stops once out of frame!
    if (this.y > height || this.y < 0 || this.x > width || this.x < 0) {
      this.active = false;
      this.vx = 0;
      this.vy = 0;
    }
  }

  //joy bounces off of user
  bounce(user) {
    //finding when joy and user interact
    if (this.x > user.x - user.size/2 &&
        this.x < user.x + user.size/2 &&
        this.y + this.size/2 > user.y - user.size/2 &&
        this.y - this.size/2 < user.y + user.size/2) {

      //joy bounces when interacting with user
      let dx = this.x - user.x;
      this.vx = this.vx + map(dx,-user.size/2,user.size/2,-2,2);

      let dy = this.y - user.y;
      this.vy = this.vy + map(dy,-user.size/2,user.size/2,-2,2);
    }
  }

  //joy displayed as ellipse
  display() {
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size,this.size);
  }

  //Stop all movement and reset gameTimer
  reset() {
    this.x = random(200, width-200);
    this.y = random(200, height-200);
    this.active = true;
  }
}
