import { Cell, useSetupEffect } from "retend";
import classes from "./StarShower.module.css";

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

export function StarShower() {
  const canvasRef = Cell.source<HTMLCanvasElement | null>(null);
  let rafId: number;
  let stars: Star[] = [];
  let meteors: Meteor[] = [];

  let width = 0;
  let height = 0;

  const initStars = () => {
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
  };

  const createMeteor = () => {
    const startX = Math.random() * width * 2 - width;
    const startY = -100;
    const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);

    meteors.push({
      x: startX,
      y: startY,
      length: Math.random() * 80 + 20,
      speed: Math.random() * 15 + 10,
      angle: angle,
      opacity: Math.random() * 0.3 + 0.1,
    });
  };

  const draw = () => {
    const canvas = canvasRef.peek();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#FFF";
    stars.forEach((star) => {
      star.opacity += star.speed;
      if (star.opacity > 1 || star.opacity < 0.2) {
        star.speed = -star.speed;
      }

      ctx.globalAlpha = Math.abs(star.opacity);
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    meteors.forEach((meteor, index) => {
      meteor.x += meteor.speed * Math.cos(meteor.angle);
      meteor.y += meteor.speed * Math.sin(meteor.angle);
      meteor.opacity -= 0.005;

      if (meteor.opacity <= 0 || meteor.x > width || meteor.y > height) {
        meteors.splice(index, 1);
        return;
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
    });

    if (Math.random() < 0.015) {
      createMeteor();
    }

    rafId = requestAnimationFrame(draw);
  };

  const handleResize = () => {
    const canvas = canvasRef.peek();
    if (!canvas) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    if (stars.length === 0) initStars();
  };

  useSetupEffect(() => {
    handleResize();
    initStars();
    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  });

  return <canvas ref={canvasRef} class={classes.canvas} />;
}
