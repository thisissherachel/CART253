"use strict";

/**************************************************
Alien
Rachel B. Richard
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
    createCanvas(500, 500)
    background(66, 66, 66);

    noStroke()
    //body
    fill(74, 176, 144);
    ellipse(250,500,350,250);
    //head
    fill(60, 122, 103);
    ellipse(250,270,260,360);
    //eyes
    fill(0, 0, 0);
    ellipse(190,260,90,200);
    ellipse(310,260,90,200);
    //nostrils
    ellipse(230,370,10,10);
    ellipse(270,370,10,10);
    //smile
    stroke(255, 148, 250);
    strokeWeight(5);
    rectMode(CENTER);
    rect(250,410,30,10,0,0,10,10);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}