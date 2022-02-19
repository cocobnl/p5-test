function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  textSize(50)
  text('Width = ' + windowWidth,50,50)
  text('Height = ' + windowHeight,50,100)
}