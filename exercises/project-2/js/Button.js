class Button {

  constructor(x, y) {
    this.x = 0,
    this.y = 20,
    this.width = 100,
    this.height = 75,

  }

  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(250);
    rect(this.x, this.y, this.width, this.height);
    pop();


    button = createButton(buttons[];);
    button.position(CENTER);
    button.mousePressed(buttonEffect);
  }
