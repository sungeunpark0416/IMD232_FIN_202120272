let font;
let pts;
let xz = 0;
let yz = 1000;
let pg;

function preload() {
  font = loadFont('NotoSansKR-Bold.otf');
}

function setup() {
  setCanvasContainer('canvas', 2, 2, true);
  // createCanvas(windowWidth, windowHeight);

  pts = font.textToPoints('반짝', 0, 0, 250, {
    sampleFactor: 0.9,
    simplifyThreshold: 0,
  });

  mouseX = 2500;
  mouseY = 2500;

  interaction = new Interaction();
  interaction.setup();
}

function ns(x, y, z, scale_, min_, max_) {
  return map(noise(x * scale_, y * scale_, z * scale_), 0, 1, min_, max_);
}

function draw() {
  background('black');

  interaction.draw();

  noStroke();
  translate(width / 2, height / 2);

  for (let i = 0; i < pts.length; i++) {
    let xoff = ns(pts[i].x, pts[i].y, xz, 0.005, -50, 50);
    let yoff = ns(pts[i].y, pts[i].x, yz, 0.005, -50, 50);

    let radius = map(sin(frameCount * 0.05), -1, 1, 5, 50);
    let alpha = map(sin(frameCount * 0.1), -1, 1, 50, 255);

    fill(255, alpha);
    ellipse(pts[i].x + xoff, pts[i].y + yoff, radius, radius);
  }

  xz += 0.02;
  yz += 0.02;
}

function mousePressed() {
  interaction.mousePressed();
}
