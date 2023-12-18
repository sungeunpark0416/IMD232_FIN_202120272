class blink {
  update() {
    pg = createGraphics(windowWidth, windowHeight);
    //   setCanvasContainer('canvas', 1, 1, true);

    pg.background(255);

    background(0);
    noStroke();
    smooth();
  }

  draw() {
    fill(255);

    fill(255);
    ellipse(mouseX, mouseY, windowWidth / 4);

    blendMode(MULTIPLY);
  }
}
