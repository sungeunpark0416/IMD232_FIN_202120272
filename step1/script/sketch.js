// Original Code from: https://youtu.be/_gz8FMduwRc?si=9GeyHhhAg_esjaPs

const PARTICLE_SIZE = 80;
const RESOLUTION = 80;

const MAX_FORCE = 15;
const MIN_FORCE = 0;

let imgUrl = './script/1.png';
let img;
let particles = [];

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  spawnParticles();

  window.addEventListener('resize', handleResize);

  mouseX = 2500;
  mouseY = 2500;
}

function draw() {
  image(img, 0, 0, width, height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}

function spawnParticles() {
  for (let i = 0; i < width; i += RESOLUTION) {
    for (let j = 0; j < height; j += RESOLUTION) {
      particles.push(
        new Particle(
          i + PARTICLE_SIZE / 2,
          j + PARTICLE_SIZE / 2,
          color(0, 0, 0)
        )
      );
    }
  }
}

function handleResize() {
  setCanvasContainer('canvas', 1, 1, true);
  spawnParticles();
}
