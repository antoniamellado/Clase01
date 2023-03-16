 function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index', -1);
   createA("https://github.com/antoniamellado","hola chicos siganme","_blank").id("mio");
   textSize(50);

}

function draw() {
  text ("⚽",mouseX,mouseY);
  }

function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
  }