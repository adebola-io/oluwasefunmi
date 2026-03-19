import { type Painting, paintings } from "@/data/paintings";
import { Cell, For } from "retend";
import { PaintingImage } from "@/features/playground/experiments/Painting";

interface WheelProps {
  selectedPainting: Cell<Painting | null>;
}

export function Wheel(props: WheelProps) {
  const { selectedPainting } = props;
  const noPaintingSelected = Cell.derived(() => {
    return selectedPainting.get() === null;
  });

  return (
    <div
      class={[
        "w-[90dvw] h-[90dvh] transition-transform duration-500 transform-3d",
        {
          "-rotate-x-20 rotate-z-20": noPaintingSelected,
          "scale-70": selectedPainting,
        },
      ]}
    >
      <div
        class={[
          "size-full relative grid place-items-center",
          "transition-transform duration-200 transform-3d",
          "[--offset-path:circle(35%)] max-sm:[--offset-path:circle(23%)]",
          "transform-[rotate(-90deg)_rotateY(90deg)]",
          "animate-rotate",
        ]}
      >
        {For(paintings, (painting, index) => {
          return (
            <PaintingImage
              data={painting}
              index={index}
              selectedPainting={selectedPainting}
            />
          );
        })}
      </div>
    </div>
  );
}
