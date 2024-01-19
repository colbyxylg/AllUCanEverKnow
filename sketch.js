//AUDIO
//define sound variables, where each variable is a Logic track
let atC1_LI;
let aD1_LI;
let aD1_Sp;
let bE1_LI;
let bE1_Sp;
let cF1_LI;
let cF1_Sp;
let dG1_LI;
let dG1_Sp;
let eA1_LI;
let eA1_Sp;
let fB1_LI;
let fB1_Sp;
let gC2_LI;
let gC2_Sp;
let hD2_LI;
let hD2_Sp;
let iE2_LI;
let iE2_Sp;
let jF2_LI;
let jF2_Sp;
let kG2_LI;
let kG2_Sp;
let lA2_LI;
let lA2_Sp;
let mB2_LI;
let mB2_Sp;
let nC3_LI;
let nC3_Sp;
let oD3_Sp;
let pE3_LI;
let pE3_Sp;
let qF3_LI;
let rG3_LI;
let rG3_Sp;
let sA3_LI;
let sA3_Sp;
let tB3_LI;
let tB3_Sp;
let uC4_Sp;
let vD4_LI;
let wE4_LI;
let wE4_Sp;
let yF4_LI;
let yF4_Sp;
let zG4_Sp;

let periodP;
let questionP;
let exclamationP;
let colonP;
let commaP;
let deleteP;
let returnP;
let plusP;
let andP;
let hashtagP;

let fontLI;
let fontSp;

//define even and odd numbers for second() as element of randomness
let evenSec;

//in setup, i will load all my sounds
//also include bounce of whole song upon setup? then ppl can interact - or does this give it away too much
function setup() {
  //load LI and Sp fonts
  fontLI = loadFont("fonts/SourceSansPro-Reg.ttf");
  fontSp = loadFont("fonts/GothamMedium.otf");

  //load my sounds
  atC1_LI = loadSound("sounds/atC1_LI.mp3");
  aD1_LI = loadSound("sounds/aD1_LI.mp3");
  aD1_Sp = loadSound("sounds/aD1_Sp.mp3");
  bE1_LI = loadSound("sounds/bE1_LI.mp3");
  bE1_Sp = loadSound("sounds/bE1_Sp.mp3");
  cF1_LI = loadSound("sounds/cF1_LI.mp3");
  cF1_Sp = loadSound("sounds/cF1_Sp.mp3");
  dG1_LI = loadSound("sounds/dG1_LI.mp3");
  dG1_Sp = loadSound("sounds/dG1_Sp.mp3");
  eA1_LI = loadSound("sounds/eA1_LI.mp3");
  eA1_Sp = loadSound("sounds/eA1_Sp.mp3");
  fB1_LI = loadSound("sounds/fB1_LI.mp3");
  fB1_Sp = loadSound("sounds/fB1_Sp.mp3");
  gC2_LI = loadSound("sounds/gC2_LI.mp3");
  gC2_Sp = loadSound("sounds/gC2_Sp.mp3");
  hD2_LI = loadSound("sounds/hD2_LI.mp3");
  hD2_Sp = loadSound("sounds/hD2_Sp.mp3");
  iE2_LI = loadSound("sounds/iE2_LI.mp3");
  iE2_Sp = loadSound("sounds/iE2_Sp.mp3");
  jF2_LI = loadSound("sounds/jF2_LI.mp3");
  jF2_Sp = loadSound("sounds/jF2_Sp.mp3");
  kG2_LI = loadSound("sounds/kG2_LI.mp3");
  kG2_Sp = loadSound("sounds/kG2_Sp.mp3");
  lA2_LI = loadSound("sounds/lA2_LI.mp3");
  lA2_Sp = loadSound("sounds/lA2_Sp.mp3");
  mB2_LI = loadSound("sounds/mB2_LI.mp3");
  mB2_Sp = loadSound("sounds/mB2_Sp.mp3");
  nC3_LI = loadSound("sounds/nC3_LI.mp3");
  nC3_Sp = loadSound("sounds/nC3_Sp.mp3");
  oD3_Sp = loadSound("sounds/oD3_Sp.mp3");
  pE3_LI = loadSound("sounds/pE3_LI.mp3");
  pE3_Sp = loadSound("sounds/pE3_Sp.mp3");
  qF3_LI = loadSound("sounds/qF3_LI.mp3");
  rG3_LI = loadSound("sounds/rG3_LI.mp3");
  rG3_Sp = loadSound("sounds/rG3_Sp.mp3");
  sA3_LI = loadSound("sounds/sA3_LI.mp3");
  sA3_Sp = loadSound("sounds/sA3_Sp.mp3");
  tB3_LI = loadSound("sounds/tB3_LI.mp3");
  tB3_Sp = loadSound("sounds/tB3_Sp.mp3");
  uC4_Sp = loadSound("sounds/uC4_Sp.mp3");
  vD4_LI = loadSound("sounds/uD4_LI.mp3");
  wE4_LI = loadSound("sounds/wE4_LI.mp3");
  wE4_Sp = loadSound("sounds/wE4_Sp.mp3");
  yF4_LI = loadSound("sounds/yF4_LI.mp3");
  yF4_Sp = loadSound("sounds/yF4_Sp.mp3");
  zG4_Sp = loadSound("sounds/zG4_Sp.mp3");
  periodP = loadSound("punctuation/periodP.mp3");
  questionP = loadSound("punctuation/questionP.mp3");
  exclamationP = loadSound("punctuation/exclamationP.mp3");
  colonP = loadSound("punctuation/colonP.mp3");
  commaP = loadSound("punctuation/commaP.mp3");
  deleteP = loadSound("punctuation/deleteP.mp3");
  returnP = loadSound("punctuation/returnP.mp3");
  plusP = loadSound("punctuation/plusP.mp3");
  andP = loadSound("punctuation/andP.mp3");
  hashtagP = loadSound("punctuation/hashtagP.mp3");

  //make a canvas to fit however big the user's window is
  createCanvas(windowWidth, windowHeight);
  //background to a specific color that contrasts white
  background(51);
  //draw a search bar (rounded rectangle), center origin
  rectMode(RADIUS);
  noFill();
  stroke(100);
  rect(
    windowWidth / 2,
    windowHeight / 2 - 10,
    windowWidth / 6,
    windowHeight / 22,
    20,
    20,
    20,
    20
  );
  //prompt instructions for the searcher - grey text: don't confuse with the same text as key typing
  textSize(25);
  stroke(100);
  fill(100);
  textAlign(CENTER);
  text("Search the web", windowWidth / 2, windowHeight / 2);
}

// VISUAL PART

// IN PROCESS //
// A BLINKING TEXT CURSOR APPEARS WHEN MOUSE PRESSED
// function mousePressed() {
//   // Run the cursor flashing code when the mouse is pressed
//   runCursorFlashing();
// }

// var isCursorVisible = true;
// var speed = 220;
// function runCursorFlashing() {
//   setInterval(() => {
//     if (isCursorVisible) {
//       document.getElementById("cursor").style.opacity = 0;
//       isCursorVisible = false;
//     } else {
//       document.getElementById("cursor").style.opacity = 1;
//       isCursorVisible = true;
//     }
//   }, speed);
// }

// A STATIC LINE APPEARS WHEN YOU BEGIN TO TYPE
// NEED TO SCALE BETTER? WORKS OK FOR FULLSCREEN
let drawLine = false;
function draw(){
  // Check if the line should be drawn
  if (drawLine) {
    flashingLine((width/(2.6)), (height/(1.95)), (width/(2.6)), (height/2.15), 100);
//     console.log(drawLine);
  }
}

function mousePressed() {
  // Toggle the drawLine variable when the mouse is pressed
  drawLine = !drawLine;
}

// A FLASHING LINE APPEARS WHEN YOU BEGIN TO TYPE
// https://codepen.io/bharat-gupta/pen/gZMOQO

// function mousePressed() {
//   if (second() / 2 === 0) {
//     flashingLine(width / 2 - 75, 310, width / 2 - 75, 335, 100);
//     console.log(second() % 2);
//   } else {
//     flashingLine(width / 2 - 75, 310, width / 2 - 75, 335, 51);
//   }
// }

function flashingLine(x1, y1, x2, y2, lineColor) {
  push();
  // Set the line color
  stroke(lineColor);
  line(x1, y1, x2, y2);
  pop();
}

//Play the letter-sound if that letter (or key) is typed
function keyTyped() {
  //set font size and color
  textSize(25);
  stroke(255);
  fill(255);

  //if second is even (0 remainder) and TRUE aka 1, will play LI sound. if odd, will play the Sp sound
  if (second() % 2 === 0) {
    evenSec = 1;
  } else {
    evenSec = 0;
  }

  //the letter appears in random place within the dimmensions of the window, with 25pixels of margin
  if (key === "@") {
    atC1_LI.play();
    textFont(fontLI);
    text("@", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "a" && evenSec === 1) {
    aD1_LI.play();
    textFont(fontLI);
  } else if (key === "a" && evenSec === 0) {
    aD1_Sp.play();
    textFont(fontSp);
    text("a", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "b" && evenSec === 1) {
    bE1_LI.play();
    textFont(fontSp);
    text("b", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "b" && evenSec === 0) {
    bE1_Sp.play();
    textFont(fontSp);
    text("b", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "c" && evenSec === 1) {
    cF1_LI.play();
    textFont(fontLI);
    text("c", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "c" && evenSec === 0) {
    cF1_Sp.play();
    textFont(fontSp);
    text("c", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "d" && evenSec === 1) {
    dG1_LI.play();
    textFont(fontLI);
    text("d", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "d" && evenSec === 0) {
    dG1_Sp.play();
    textFont(fontSp);
    text("d", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "e" && evenSec === 1) {
    eA1_LI.play();
    textFont(fontLI);
    text("e", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "e" && evenSec === 0) {
    eA1_Sp.play();
    textFont(fontSp);
    text("e", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "f" && evenSec === 1) {
    fB1_LI.play();
    textFont(fontLI);
    text("f", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "f" && evenSec === 0) {
    fB1_Sp.play();
    textFont(fontSp);
    text("f", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "g" && evenSec === 1) {
    gC2_LI.play();
    textFont(fontLI);
    text("g", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "g" && evenSec === 0) {
    gC2_Sp.play();
    textFont(fontSp);
    text("g", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "h" && evenSec === 1) {
    hD2_LI.play();
    textFont(fontLI);
    text("h", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "h" && evenSec === 0) {
    hD2_Sp.play();
    textFont(fontSp);
    text("h", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "i" && evenSec === 1) {
    iE2_LI.play();
    textFont(fontLI);
    text("i", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "i" && evenSec === 0) {
    iE2_Sp.play();
    textFont(fontSp);
    text("i", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "j" && evenSec === 1) {
    jF2_LI.play();
    textFont(fontLI);
    text("j", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "j" && evenSec === 0) {
    jF2_Sp.play();
    textFont(fontSp);
    text("j", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "k" && evenSec === 1) {
    kG2_LI.play();
    textFont(fontLI);
    text("k", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "k" && evenSec === 0) {
    kG2_Sp.play();
    textFont(fontSp);
    text("k", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "l" && evenSec === 1) {
    lA2_LI.play();
    textFont(fontLI);
    text("l", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "l" && evenSec === 0) {
    lA2_Sp.play();
    textFont(fontSp);
    text("l", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "m" && evenSec === 1) {
    mB2_LI.play();
    textFont(fontLI);
    text("m", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "m" && evenSec === 0) {
    mB2_Sp.play();
    textFont(fontSp);
    text("m", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "n" && evenSec === 1) {
    nC3_LI.play();
    textFont(fontLI);
    text("n", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "n" && evenSec === 0) {
    nC3_Sp.play();
    textFont(fontSp);
    text("n", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "o") {
    oD3_Sp.play();
    textFont(fontLI);
    text("o", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "p" && evenSec === 1) {
    pE3_LI.play();
    textFont(fontLI);
    text("p", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "p" && evenSec === 0) {
    pE3_Sp.play();
    textFont(fontSp);
    text("p", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "q") {
    qF3_LI.play();
    textFont(fontLI);
    text("q", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "r" && evenSec === 1) {
    rG3_LI.play();
    textFont(fontLI);
    text("r", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "r" && evenSec === 0) {
    rG3_Sp.play();
    textFont(fontSp);
    text("r", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "s" && evenSec === 1) {
    sA3_LI.play();
    textFont(fontLI);
    text("s", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "s" && evenSec === 0) {
    sA3_Sp.play();
    textFont(fontSp);
    text("s", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "t" && evenSec === 1) {
    tB3_LI.play();
    textFont(fontLI);
    text("t", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "t" && evenSec === 0) {
    tB3_Sp.play();
    textFont(fontSp);
    text("a", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "u") {
    uC4_Sp.play();
    textFont(fontSp);
    text("u", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "v") {
    vD4_LI.play();
    textFont(fontLI);
    text("v", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "w" && evenSec === 1) {
    wE4_LI.play();
    textFont(fontLI);
    text("w", random(windowWidth) - 25, random(windowHeight) - 25);
  } else if (key === "w" && evenSec === 0) {
    wE4_Sp.play();
    textFont(fontSp);
    text("w", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "y" && evenSec === 1) {
    yF4_LI.play();
    textFont(fontLI);
    text("y", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "y" && evenSec === 0) {
    yF4_Sp.play();
    textFont(fontSp);
    text("y", random(windowWidth) - 25, random(windowHeight) - 25);
  } else if (key === "z") {
    zG4_Sp.play();
    textFont(fontSp);
    text("z", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === ".") {
    periodP.play();
    textFont("Georgia");
    text(".", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key == "?") {
    questionP.play();
    textFont("Georgia");
    text("?", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "!") {
    exclamationP.play();
    textFont("Georgia");
    text("!", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === ":") {
    colonP.play();
    textFont("Georgia");
    text(":", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === ",") {
    commaP.play();
    textFont("Georgia");
    text(",", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (keyCode === BACKSPACE) {
    deleteP.play();
    textFont("Georgia");
    text("del", random(windowWidth) - 25, random(windowHeight) - 25);
    //console.log("BACKSPACE key pressed");
  } else if (keyCode === RETURN) {
    returnP.play();
    textFont("Georgia");
    text("ent", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
    //console.log("RETURN key pressed");
  } else if (key === "+") {
    plusP.play();
    textFont("Georgia");
    text("+", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "&") {
    andP.play();
    textFont("Georgia");
    text("&", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  } else if (key === "#") {
    hashtagP.play();
    textFont("Georgia");
    text("#", random(0, windowWidth) - 25, random(0, windowHeight) - 25);
  }
  //return default browser
  return false;
}

//pause all sounds if space bar pressed
function keyPressed() {
  if (keyCode === 32) {
    atC1_LI.pause();
    aD1_LI.pause();
    aD1_Sp.pause();
    bE1_LI.pause();
    bE1_Sp.pause();
    cF1_LI.pause();
    cF1_Sp.pause();
    dG1_LI.pause();
    dG1_Sp.pause();
    eA1_LI.pause();
    eA1_Sp.pause();
    fB1_LI.pause();
    fB1_Sp.pause();
    gC2_LI.pause();
    gC2_Sp.pause();
    hD2_LI.pause();
    hD2_Sp.pause();
    iE2_LI.pause();
    iE2_Sp.pause();
    jF2_LI.pause();
    jF2_Sp.pause();
    kG2_LI.pause();
    kG2_Sp.pause();
    lA2_LI.pause();
    lA2_Sp.pause();
    mB2_LI.pause();
    mB2_Sp.pause();
    nC3_LI.pause();
    nC3_Sp.pause();
    oD3_Sp.pause();
    pE3_LI.pause();
    pE3_Sp.pause();
    qF3_LI.pause();
    rG3_LI.pause();
    rG3_Sp.pause();
    sA3_LI.pause();
    sA3_Sp.pause();
    tB3_LI.pause();
    tB3_Sp.pause();
    uC4_Sp.pause();
    vD4_LI.pause();
    wE4_LI.pause();
    wE4_Sp.pause();
    yF4_LI.pause();
    yF4_Sp.pause();
    zG4_Sp.pause();

    periodP.pause();
    questionP.pause();
    exclamationP.pause();
    colonP.pause();
    commaP.pause();
    deleteP.pause();
    returnP.pause();
    plusP.pause();
    andP.pause();
    hashtagP.pause();
  }
}
