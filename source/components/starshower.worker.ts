interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

let canvas: OffscreenCanvas;
let width = 0;
let height = 0;
let dpr = 1;
let stars: Star[] = [];
let meteors: Meteor[] = [];
let rafId: number;

function initStars() {
  stars = [];
  const starCount = Math.floor((width * height) / 15000);
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    });
  }
}

function createMeteor() {
  const startX = Math.random() * width * 2 - width;
  const startY = -100;
  const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);

  meteors.push({
    x: startX,
    y: startY,
    length: Math.random() * 100 + 40,
    speed: Math.random() * 12 + 8,
    angle: angle,
    opacity: Math.random() * 0.5 + 0.3,
  });
}

function draw() {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.scale(dpr, dpr);

  ctx.fillStyle = "#FFF";
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.opacity += star.speed;
    if (star.opacity > 1 || star.opacity < 0.2) {
      star.speed = -star.speed;
    }

    ctx.globalAlpha = Math.abs(star.opacity);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = meteors.length - 1; i >= 0; i--) {
    const meteor = meteors[i];
    meteor.x += meteor.speed * Math.cos(meteor.angle);
    meteor.y += meteor.speed * Math.sin(meteor.angle);
    meteor.opacity -= 0.008;

    if (meteor.opacity <= 0 || meteor.x > width || meteor.y > height) {
      meteors.splice(i, 1);
      continue;
    }

    const endX = meteor.x - meteor.length * Math.cos(meteor.angle);
    const endY = meteor.y - meteor.length * Math.sin(meteor.angle);

    const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.globalAlpha = 1;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(meteor.x, meteor.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  ctx.restore();

  if (Math.random() < 0.08) {
    createMeteor();
  }

  rafId = requestAnimationFrame(draw);
}

self.onmessage = (e: MessageEvent) => {
  const { type, payload } = e.data;

  if (type === "init") {
    canvas = payload.canvas;
    width = payload.width;
    height = payload.height;
    dpr = payload.dpr || 1;
    initStars();
    for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
      createMeteor();
    }
    draw();
  } else if (type === "resize") {
    const oldWidth = width;
    const oldHeight = height;
    width = payload.width;
    height = payload.height;
    dpr = payload.dpr || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    for (let i = 0; i < stars.length; i++) {
      stars[i].x = (stars[i].x / oldWidth) * width;
      stars[i].y = (stars[i].y / oldHeight) * height;
    }
    
    if (stars.length === 0) initStars();
  } else if (type === "stop") {
    cancelAnimationFrame(rafId);
  }
};
