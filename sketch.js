let t;

function setup() {
  createCanvas(400, 400);
  t = 0;
}

function draw() {
  background(0);
  // speed
  frameRate(20);

  // color var: black and white
  let r = 255;
  let g = 255;
  let b = 255;
  let a = 100;

  if (mouseIsPressed) {
    // color var: mixed colors
    r = 255 * noise(t + 10);
    g = 255 * noise(t + 15);
    b = 255 * noise(t + 20);
    a = 255;
    frameRate(100);
  } else {
    // color var: black and white
    r = 255;
    g = 255;
    b = 255;
  }

  // array of lines: x def
  for (let x = 25; x < 400; x += 25) {
    // array of lines: y def
    for (let y = 25; y < 400; y += 25) {
      stroke(r, g, b, a);
      strokeWeight(5);

      line(x, y, x + random(-10, 10), y + random(-10, 10));
      t = t + 0.01;
    }
  }
}
