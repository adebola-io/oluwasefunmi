import { Painting, paintings } from "@/data/paintings";
import { Cell, createUnique, For } from "retend";
import { UniqueTransition } from "retend-utils/components";
import { PaintingImage } from "@/features/playground/experiments/Painting";

export const Wheel = createUnique(() => {
  const selectedItem = Cell.source<Painting | null>(null);

  const handleSelected = (painting: Painting) => {
    selectedItem.set(painting);
  };

  return (
    <UniqueTransition transitionDuration="700ms">
      <div class="size-full transform-3d">
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
            const isSelected = Cell.derived(() => {
              return selectedItem.get() === painting;
            });
            return (
              <PaintingImage
                data={painting}
                index={index}
                isSelected={isSelected}
                onSelected={handleSelected}
              />
            );
          })}
        </div>
      </div>
    </UniqueTransition>
  );
});
