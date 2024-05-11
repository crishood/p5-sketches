function setup() {
  createCanvas(windowWidth, windowHeight);

  //noLoop();
}

function draw() {
  frameRate(random([60, 4, 12, 1, 24, 30]));
  let totalWidth = 6 * 100;
  let startX = (width - totalWidth) / 2;
  background(CH_PALETTE.MINT_BLUE);
  for (let i = 0; i < 6; i++) {
    dice(startX + i * 100, height / 2, 80);
  }
  granulate(25);
}

function dice(posX, posY, size) {
  let diceValue = int(random(1, 7));
  let dotSize = size / 8;
  let spacing = size / 4;
  noFill();
  rectMode((mode = CENTER));
  rect(posX, posY, size, size, size / 5);
  stroke(CH_PALETTE.DARK_BLUE);
  strokeWeight(1);
  drawDots(posX, posY, dotSize, diceValue, spacing);
}

function drawDots(posX, posY, dotSize, diceValue, spacing) {
  push();
  strokeWeight(dotSize);
  switch (diceValue) {
    case 1:
      point(posX, posY);
      break;
    case 2:
      point(posX - spacing, posY - spacing);
      point(posX + spacing, posY + spacing);
      break;
    case 3:
      point(posX - spacing, posY - spacing);
      point(posX, posY);
      point(posX + spacing, posY + spacing);
      break;
    case 4:
      point(posX - spacing, posY - spacing);
      point(posX + spacing, posY - spacing);
      point(posX - spacing, posY + spacing);
      point(posX + spacing, posY + spacing);
      break;
    case 5:
      point(posX - spacing, posY - spacing);
      point(posX + spacing, posY - spacing);
      point(posX, posY);
      point(posX - spacing, posY + spacing);
      point(posX + spacing, posY + spacing);
      break;
    case 6:
      point(posX - spacing, posY - spacing);
      point(posX + spacing, posY - spacing);
      point(posX - spacing, posY);
      point(posX + spacing, posY);
      point(posX - spacing, posY + spacing);
      point(posX + spacing, posY + spacing);
      break;
  }
  pop();
}

/* Gorilla Grain ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function granulate(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 8) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + gA;
    pixels[i + 3] = pixels[i + 3] + gA * 5;
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
