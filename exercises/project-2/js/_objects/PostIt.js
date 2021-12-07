class PostIt {
//display for info in intro state

  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.size = 2*height/3;
    this.fill = color(`rgb(255, 253, 140)`);
    this.text1 =
`Welcome to an achive of an intro
to the p5 java library!

This world is creative, fun, and joyful.`;
    this.text2 =
`Navigate around the menu by dragging coins to the
slot and discovering where they bring you.`;

    this.text3 =
`click to enter :)`;
}

  display() {
    //info (yellow post it note with text)

    push(); //post-it
    rectMode(CENTER);
    noStroke();
    fill(this.fill);
    rect(this.x,this.y,this.size,this.size);
    pop();

    push(); //intro text in post-it
    textSize(40);
    fill(0);
    textAlign(CENTER,CENTER);
    text(this.text1,this.x,this.y-100);
    pop();

    push(); //navigation text in post-it
    textSize(20);
    fill(0);
    textAlign(CENTER,CENTER);
    text(this.text2,this.x,this.y+100);
    pop();

    push(); //start text
    textSize(30);
    fill(0);
    textAlign(CENTER,CENTER);
    text(this.text3,this.x,this.y+200);
    pop();

  }

}
