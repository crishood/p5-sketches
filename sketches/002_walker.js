// Based on The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(CH_PALETTE.MINT_BLUE);
  frameRate(120);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(CH_PALETTE.DARK_BLUE);
    strokeWeight(2);
    point(this.x, this.y);
  }

  step() {
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep * 3;
    this.y += ystep * 3;
  }
}
