/**
This is the Mona Lisa.
Rachel B. Richard

PLAN:
x create a canvas
x fill the background
- add detail to background
- block out the basic shapes (face, body, smile, hair, mountains, water)

"use strict";


/**
Description of preload
*/
function preload() {

}


function setup() {
    createCanvas (240, 350);
}

function draw() {
    //background
    background(144, 191, 122);
    //hair
    fill(61, 54, 35);
    ellipse(120, 90, 100, 120);
    //face
    noStroke();
    fill(201, 175, 101);
    ellipse(120, 85, 60, 80);
    //body
    noStroke();
    fill(201, 175, 101);
    ellipse(120, 220, 185, 200);
    //clothes
    fill(61, 54, 35);
    rect(27, 180, 185, 200, 20, 20);
    //smile
    stroke(0);
    line(100, 90, 120, 95);
    line(140, 90, 120, 95);
    //eyes
    noStroke()
    fill(61, 54, 35);
    ellipse(128, 75, 5, 5);
    ellipse(108, 75, 5, 5);     

}