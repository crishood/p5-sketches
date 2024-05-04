// Colors

const DARK_BLUE = '#012C37';
const YELLOW = '#FFF128';
const GREEN_FOREST = '#009000';
const LEMON_GREEN = '#C2DF38';
const MINT_GREEN = '#9FFFCC';
const MINT_BLUE = '#24E5FF';
const MINT_PURPLE = '#8092FF';
const MINT_YELLOW = '#ECEBB3';

const CH_PALETTE = {
  DARK_BLUE,
  YELLOW,
  MINT_GREEN,
  MINT_BLUE,
  GREEN_FOREST,
  MINT_PURPLE,
  MINT_YELLOW,
  LEMON_GREEN,
};

// Fonts
let futuraLight;
let futuraLightItalic;
let futuraRegular;
let futuraRegularItalic;
let futuraMedium;
let futuraMediumItalic;
let futuraBold;
let futuraBoldItalic;
let FONT_FUTURA;
function preload() {
  futuraLight = loadFont('assets/fonts/futura/FUTURA45LIGHT.TTF');
  futuraLightItalic = loadFont('assets/fonts/futura/FUTURA46LIGHTITALIC.TTF');
  futuraRegular = loadFont('assets/fonts/futura/FUTURA55REGULAR.TTF');
  futuraRegularItalic = loadFont('assets/fonts/futura/FUTURA56ITALIC.TTF');
  futuraMedium = loadFont('assets/fonts/futura/FUTURA65MEDIUM.TTF');
  futuraMediumItalic = loadFont('assets/fonts/futura/FUTURA66MEDIUMITALIC.TTF');
  futuraBold = loadFont('assets/fonts/futura/FUTURA75BOLD.TTF');
  futuraBoldItalic = loadFont('assets/fonts/futura/FUTURA76BOLDITALIC.TTF');
  FONT_FUTURA = [
    futuraLight,
    futuraLightItalic,
    futuraRegular,
    futuraRegularItalic,
    futuraMedium,
    futuraMediumItalic,
    futuraBold,
    futuraBoldItalic,
  ];
}
