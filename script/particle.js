class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.baseColor = color;
    this.color = color;
    this.targetX = x;
    this.targetY = y;
  }

  update() {
    let mouseVector = createVector(mouseX, mouseY);
    let currentVector = createVector(this.x, this.y);
    let targetVector = createVector(this.targetX, this.targetY);

    let fromMouseToParticle = p5.Vector.sub(currentVector, mouseVector);
    let distanceToMouse = fromMouseToParticle.mag();

    let fromParticleToTarget = p5.Vector.sub(targetVector, currentVector);
    let distanceToTarget = fromParticleToTarget.mag();

    let totalForce = createVector(0, 0);

    if (distanceToMouse < 200) {
      let repulsionForce = map(distanceToMouse, 0, 200, MAX_FORCE, MIN_FORCE);
      fromMouseToParticle.setMag(repulsionForce);
      totalForce.add(fromMouseToParticle);

      let gradientFactor = map(distanceToMouse, 0, 200, 0, 1);
      let gradientColor = lerpColor(
        color('lightgray'),
        color('#2B2B2B'),
        gradientFactor
      );
      this.color = gradientColor;
    } else {
      this.color = this.baseColor;
    }

    if (distanceToTarget > 0) {
      let attractionForce = map(distanceToTarget, 0, 200, MIN_FORCE, MAX_FORCE);
      fromParticleToTarget.setMag(attractionForce);
      totalForce.add(fromParticleToTarget);
    }

    this.x += totalForce.x;
    this.y += totalForce.y;
  }

  draw() {
    fill(this.color);

    noStroke();
    rect(this.x, this.y, PARTICLE_SIZE);
  }
}
