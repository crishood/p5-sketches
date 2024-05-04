// Randomness in typography
let word = 'Aleatorio';

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(10);
  frameRate(4);
}

function draw() {
  background(CH_PALETTE.MINT_BLUE);
  let space = 40;
  let x = (width - word.length * space) / 2;
  let y = height / 2;
  let animationInfluence = random(0, word.length);

  for (let i = animationInfluence; i < word.length; i++) {
    let size = random(40, 80);
    let spacing = random(-20, 5);
    fill(CH_PALETTE.DARK_BLUE);
    text(word.charAt(i), x + i * space + spacing, y + i * 0.2);
    textSize(size);
    textFont(random(FONT_FUTURA));
  }
}
