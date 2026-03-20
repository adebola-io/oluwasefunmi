import { type Painting, paintings } from "@/data/paintings";
import { Cell, For, onMove, onSetup } from "retend";
import { PaintingImage } from "@/features/playground/experiments/Painting";
import { preloadImages } from "@/utils/imagePreloader";
import { getAllPaintingImages } from "@/data/paintingImages";

interface WheelProps {
  selectedPainting: Cell<Painting | null>;
}

function normalizeAngle(angle: number) {
  return ((angle % 360) + 360) % 360;
}

function shortestAngleDelta(from: number, to: number) {
  let delta = normalizeAngle(to) - normalizeAngle(from);

  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;

  return delta;
}

export function Wheel(props: WheelProps) {
  const { selectedPainting } = props;
  const wheelRef = Cell.source<HTMLDivElement | null>(null);
  const counterSpinAngle = Cell.source("0deg");
  let liveAngle = 0;
  const noPaintingSelected = Cell.derived(() => {
    return selectedPainting.get() === null;
  });

  // const handlePointerOver = () => {
  //   const wheel = wheelRef.get();
  //   if (!wheel) return;
  //   const animation = wheel.getAnimations()[0];
  //   if (!(animation instanceof CSSAnimation)) return;
  //   animation.updatePlaybackRate(0.35);
  // };

  // const handlePointerLeave = () => {
  //   const wheel = wheelRef.get();
  //   if (!wheel) return;
  //   const animation = wheel.getAnimations()[0];
  //   if (!(animation instanceof CSSAnimation)) return;
  //   animation.updatePlaybackRate(1);
  // };

  const computeCounterRotation = () => {
    const selectedPaintingValue = selectedPainting.get();
    if (!selectedPaintingValue) return;
    const index = paintings.findIndex((p) => {
      return p.id === selectedPaintingValue.id;
    });
    const offsetDistance = index / paintings.length;

    const selectedAngle = offsetDistance * 360;
    const targetAngle = liveAngle + selectedAngle - 90;

    const currentCounterRotation = parseFloat(counterSpinAngle.get()) || 0;
    const delta = shortestAngleDelta(currentCounterRotation, targetAngle);
    const nextAngle = currentCounterRotation + delta;

    counterSpinAngle.set(`${nextAngle}deg`);
  };

  onSetup(() => {
    // Preload all high-quality images in the background
    const allImages = getAllPaintingImages();
    const highQualityUrls = Object.values(allImages).map((img) => img.default);
    preloadImages(highQualityUrls);
  });

  onSetup(computeCounterRotation);

  onMove(() => {
    const wheel = wheelRef.get();
    if (!wheel) return;
    const animation = wheel.getAnimations()[0] as CSSAnimation;
    const timing = animation?.effect?.getComputedTiming();
    if (!timing) return;
    const duration = Number(timing.duration);
    const currentTime = Number(animation.currentTime);
    const loopTime = currentTime % duration;
    const progress = loopTime / duration;
    liveAngle = progress * 360;

    return computeCounterRotation;
  });

  return (
    <div
      class={[
        "w-[90dvw] h-[90dvh] transition-transform duration-700 ease-in-out transform-3d",
        {
          "-rotate-x-20 rotate-z-20": noPaintingSelected,
          "scale-[2.5] translate-x-[65dvw] translate-y-[-5%]": selectedPainting,
          "max-md:translate-x-[45dvw] max-sm:translate-y-0 max-md:max-h-[50dvh]":
            selectedPainting,
        },
      ]}
      // onPointerEnter={handlePointerOver}
      // onPointerLeave={handlePointerLeave}
    >
      <div
        ref={wheelRef}
        class={[
          "size-full relative grid place-items-center",
          "transform-3d transform-[rotate(-90deg)_rotateY(90deg)]",
          "animate-rotate",
          { "[animation-play-state:paused]": selectedPainting },
        ]}
      >
        <ul
          class={[
            "size-full relative grid place-items-center transform-3d",
            "duration-700 transition-transform ease-in-out",
            "[--offset-path:circle(35%)] max-sm:[--offset-path:circle(23%)]",
          ]}
          style={{
            rotate: counterSpinAngle,
          }}
        >
          {For(paintings, (painting, index) => (
            <PaintingImage
              data={painting}
              index={index}
              selectedPainting={selectedPainting}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
