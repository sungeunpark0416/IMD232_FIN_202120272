class Interaction {
  constructor() {
    this.r = 0;
    this.g = 242;
    this.b = 125;
    this.fade = 150;
    this.circles = [];
  }

  setup() {
    // createCanvas(800, 600); // Adjust canvas size as needed
    setCanvasContainer('canvas', 2, 2, true);
  }

  draw() {
    clear();

    this.circles.push({ x: mouseX, y: mouseY });

    let dimming = 0;

    for (let i = this.circles.length - 1; i >= 0; i--) {
      this.variableEllipse(this.circles[i].x, this.circles[i].y, 50 - dimming);
      dimming += 1;
    }

    if (this.circles.length > 50) {
      this.circles = this.circles.slice(-50, -1);
    }
  }

  // Brush
  variableEllipse(x, y, opacity) {
    fill(this.r, this.g, this.b, opacity);
    noStroke(); // Removed stroke for this example, adjust as needed
    ellipse(x, y, 80, 80);
  }

  mousePressed() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
}
