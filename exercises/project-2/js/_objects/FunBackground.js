class FunBackground {
//display for background in intro state

  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 40;
    this.h = this.w; //square
    this.black = (color(`rgb(0,0,0)`));
}

  displaySmiles() {
      //setting up for loop for smileys across window
      for (let x = 5; x < width-5; x+=50) { //setting grid for smileys on x-axis
        for (let y = 5; y < height-5; y+=50) { //setting grid for smileys on y-axis
          //base
          push();
          stroke(this.black);
          strokeWeight(5);
          noFill();
          ellipse(x+20,y+20,this.w,this.h);
          pop();
          //eyes
          push();
          fill(this.black);
          noStroke();
          ellipse(x+12,y+14,this.w/8,this.h/8);
          ellipse(x+28,y+14,this.w/8,this.h/8);
          pop();
          //mouth
          push();
          stroke(this.black);
          strokeWeight(5);
          noFill();
          arc(x+20,y+20,25,25,0,PI,OPEN);
          pop();
        }
      }
  }
}
