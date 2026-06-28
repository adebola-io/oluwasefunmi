const ACTIVE_BALLOON_COUNT = 9;
const TOTAL_BALLOON_COUNT = 25;
const CONFETTI_COUNT = 180;
const GRAVITY = 0.16;
const AIR_RESISTANCE = 0.992;
const SPRAY_DURATION = 2600;

interface Balloon {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  wind: number;
  windTarget: number;
  phase: number;
  sway: number;
  tilt: number;
  color: string;
}

interface Confetti {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
  rotation: number;
  spin: number;
  color: string;
  life: number;
  maxLife: number;
}

interface StartMessage {
  type: "start";
  canvas: OffscreenCanvas;
  width: number;
  height: number;
  ratio: number;
  palette: string[];
}

interface ResizeMessage {
  type: "resize";
  width: number;
  height: number;
  ratio: number;
}

interface StopMessage {
  type: "stop";
}

type WorkerMessage = StartMessage | ResizeMessage | StopMessage;

const randomBetween = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};

const createBalloon = (
  width: number,
  height: number,
  colors: string[],
  index: number,
  initial = false
): Balloon => {
  const entryDelay = initial
    ? randomBetween(index * 220, index * 420 + height * 0.8)
    : randomBetween(260, 1100);

  return {
    x: randomBetween(width * 0.05, width * 0.95),
    y: height + entryDelay,
    radius: randomBetween(18, 38),
    velocityX: randomBetween(-1.8, 1.8),
    velocityY: randomBetween(-4.8, -2.8),
    wind: randomBetween(-0.8, 0.8),
    windTarget: randomBetween(-1.8, 1.8),
    phase: randomBetween(0, Math.PI * 2),
    sway: randomBetween(0.8, 1.8),
    tilt: 0,
    color: colors[index % colors.length],
  };
};

const createConfetti = (
  width: number,
  height: number,
  colors: string[],
  side: -1 | 1
): Confetti => {
  const angle =
    side === -1 ? randomBetween(-1.2, -0.32) : randomBetween(-2.82, -1.94);
  const force = randomBetween(9, 19);

  return {
    x: side === -1 ? -12 : width + 12,
    y: height + randomBetween(8, 34),
    velocityX: Math.cos(angle) * force,
    velocityY: Math.sin(angle) * force,
    size: randomBetween(5, 11),
    rotation: randomBetween(0, Math.PI * 2),
    spin: randomBetween(-0.28, 0.28),
    color: colors[Math.floor(randomBetween(0, colors.length))],
    life: 0,
    maxLife: randomBetween(120, 190),
  };
};

const drawBalloon = (
  context: OffscreenCanvasRenderingContext2D,
  balloon: Balloon
) => {
  const x = balloon.x;
  const y = balloon.y;
  const width = balloon.radius * 1.55;
  const height = balloon.radius * 1.95;

  context.save();
  context.translate(x, y);
  context.rotate(balloon.tilt);
  context.fillStyle = balloon.color;
  context.beginPath();
  context.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha = 0.35;
  context.fillStyle = "white";
  context.beginPath();
  context.ellipse(
    -width * 0.32,
    -height * 0.35,
    width * 0.18,
    height * 0.23,
    -0.5,
    0,
    Math.PI * 2
  );
  context.fill();

  context.globalAlpha = 1;
  context.fillStyle = balloon.color;
  context.beginPath();
  context.moveTo(-5, height * 0.92);
  context.lineTo(5, height * 0.92);
  context.lineTo(0, height * 1.12);
  context.closePath();
  context.fill();

  context.strokeStyle = "rgb(0 0 0 / 0.2)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, height * 1.12);
  context.bezierCurveTo(-8, height * 1.7, 10, height * 2.35, 0, height * 3.1);
  context.stroke();
  context.restore();
};

const drawConfetti = (
  context: OffscreenCanvasRenderingContext2D,
  confetti: Confetti
) => {
  const opacity = 1 - confetti.life / confetti.maxLife;

  context.save();
  context.globalAlpha = Math.max(opacity, 0);
  context.translate(confetti.x, confetti.y);
  context.rotate(confetti.rotation);
  context.fillStyle = confetti.color;
  context.fillRect(
    confetti.size * -0.5,
    confetti.size * -0.25,
    confetti.size,
    confetti.size * 0.5
  );
  context.restore();
};

const createCelebration = (
  canvas: OffscreenCanvas,
  context: OffscreenCanvasRenderingContext2D,
  palette: string[]
) => {
  let width = 0;
  let height = 0;
  let frame = 0;
  let hasStopped = false;
  let launchedBalloons = 0;
  const startTime = performance.now();
  const balloons: Balloon[] = [];
  const confetti: Confetti[] = [];

  const resize = (nextWidth: number, nextHeight: number, ratio: number) => {
    width = nextWidth;
    height = nextHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    if (balloons.length === 0 && launchedBalloons === 0) {
      for (let index = 0; index < ACTIVE_BALLOON_COUNT; index += 1) {
        balloons.push(createBalloon(width, height, palette, index, true));
        launchedBalloons += 1;
      }
    }
  };

  const sprayConfetti = () => {
    for (let index = 0; index < 6; index += 1) {
      if (confetti.length < CONFETTI_COUNT) {
        confetti.push(createConfetti(width, height, palette, -1));
        confetti.push(createConfetti(width, height, palette, 1));
      }
    }
  };

  const stop = () => {
    if (hasStopped) return;

    hasStopped = true;
    cancelAnimationFrame(frame);
    context.clearRect(0, 0, width, height);
    postMessage({ type: "complete" });
  };

  const animate = (time: number) => {
    context.clearRect(0, 0, width, height);

    if (time - startTime < SPRAY_DURATION) sprayConfetti();

    for (let index = balloons.length - 1; index >= 0; index -= 1) {
      const balloon = balloons[index];
      const sway = Math.sin(time * 0.0018 * balloon.sway + balloon.phase);
      balloon.wind += (balloon.windTarget - balloon.wind) * 0.015;
      balloon.velocityX +=
        (balloon.wind + sway * 1.2 - balloon.velocityX) * 0.035;
      balloon.velocityY +=
        (-3.8 + Math.abs(sway) * -0.35 - balloon.velocityY) * 0.025;
      balloon.x += balloon.velocityX;
      balloon.y += balloon.velocityY;
      balloon.tilt += (balloon.velocityX * 0.09 - balloon.tilt) * 0.08;

      if (Math.abs(balloon.wind - balloon.windTarget) < 0.05) {
        balloon.windTarget = randomBetween(-1.8, 1.8);
      }

      if (
        balloon.y < -balloon.radius * 5 ||
        balloon.x < -balloon.radius * 5 ||
        balloon.x > width + balloon.radius * 5
      ) {
        if (launchedBalloons < TOTAL_BALLOON_COUNT) {
          balloons[index] = createBalloon(
            width,
            height,
            palette,
            launchedBalloons
          );
          launchedBalloons += 1;
        } else {
          balloons.splice(index, 1);
        }
      } else {
        drawBalloon(context, balloon);
      }
    }

    for (let index = confetti.length - 1; index >= 0; index -= 1) {
      const piece = confetti[index];
      piece.life += 1;
      piece.velocityY += GRAVITY;
      piece.velocityX *= AIR_RESISTANCE;
      piece.velocityY *= AIR_RESISTANCE;
      piece.x += piece.velocityX;
      piece.y += piece.velocityY;
      piece.rotation += piece.spin;

      if (piece.life >= piece.maxLife || piece.y > height + 80) {
        confetti.splice(index, 1);
      } else {
        drawConfetti(context, piece);
      }
    }

    if (
      launchedBalloons >= TOTAL_BALLOON_COUNT &&
      balloons.length === 0 &&
      confetti.length === 0
    ) {
      stop();
      return;
    }

    frame = requestAnimationFrame(animate);
  };

  return { animate, resize, stop };
};

let celebration: ReturnType<typeof createCelebration> | undefined;

self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  if (event.data.type === "stop") {
    celebration?.stop();
    close();
    return;
  }

  if (event.data.type === "resize") {
    celebration?.resize(event.data.width, event.data.height, event.data.ratio);
    return;
  }

  const context = event.data.canvas.getContext("2d", { alpha: true });
  if (!context) {
    postMessage({ type: "complete" });
    return;
  }

  celebration = createCelebration(
    event.data.canvas,
    context,
    event.data.palette
  );
  celebration.resize(event.data.width, event.data.height, event.data.ratio);
  requestAnimationFrame(celebration.animate);
};

export {};
