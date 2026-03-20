import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup } from "retend";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";

interface PaintingFrameProps {
  id: string;
  data: Painting;
  staggerIndex?: JSX.ValueOrCell<number>;
  selectedPainting?: Cell<Painting | null>;
}

/**
 * A frame component for displaying a painting.
 * Handles loading state and displays the painting with a gradient background.
 */
export function PaintingFrame(props: PaintingFrameProps) {
  const staggerIndexCell = useDerivedValue(props.staggerIndex ?? 0);

  const src = Cell.derived(() => getPaintingImage(props.data.id));

  const loading = Cell.source(false);
  const loaded = Cell.source(false);
  const imageVisible = Cell.derived(() => loaded.get());
  const imageSrc = Cell.derived(() => {
    if (!loading.get()) return;

    // Use high-quality image if this painting is selected
    const isSelected = props.selectedPainting?.get()?.id === props.data.id;
    return isSelected ? src.get().default : src.get().small;
  });

  onSetup(() => {
    const stagger = staggerIndexCell.get();
    const timeout = window.setTimeout(
      () => {
        loading.set(true);
      },
      stagger * 20 + 50,
    );
    return () => window.clearTimeout(timeout);
  });

  const gradient = Cell.derived(() => src.get().gradient);
  const isHidden = Cell.derived(() => !imageVisible.get());

  return (
    <div
      class={[
        "h-full w-fit border border-blue-200 rounded-xl overflow-hidden bg-center bg-cover transition-colors duration-300",
      ]}
      style={{
        backgroundImage: gradient,
      }}
    >
      <img
        draggable={false}
        class={[
          "size-full pointer-events-none object-cover transition-opacity duration-300",
          {
            "opacity-0": isHidden,
            "opacity-100": imageVisible,
          },
        ]}
        src={imageSrc}
        alt={props.data.title}
        onLoad={() => loaded.set(true)}
      />
    </div>
  );
}

interface PaintingImageProps {
  data: Painting;
  index: Cell<number>;
  selectedPainting: Cell<Painting | null>;
}

/**
 * Wheel-specific wrapper that applies 3D transforms.
 * Hosts the PaintingFrame component.
 */
export const PaintingImage = (props: PaintingImageProps) => {
  const { data, index, selectedPainting } = props;
  const initialAnimation = Cell.source(true);

  const offsetDistance = Cell.derived(() => {
    return `${(index.get() / paintings.length) * -100}%`;
  });
  const offsetDistanceEnd = Cell.derived(() => {
    return `${(index.get() / paintings.length) * -100 - 100}%`;
  });
  const isNotSelected = Cell.derived(() => {
    const selectedPaintingValue = selectedPainting.get();
    return selectedPaintingValue !== null && selectedPaintingValue !== data;
  });

  const handleAnimationEnd = () => {
    initialAnimation.set(false);
  };

  return (
    <li
      class={[
        "grid place-items-center",
        "relative h-[17dvw] md:h-[14dvw] w-auto aspect-square select-none transform-3d",
        "[-webkit-user-drag:none] [grid-area:1/1] [offset-path:var(--offset-path)]",
        "group duration-500 origin-center ease-in-out transition-opacity will-change-[opacity]",
        "transform-[rotateX(-90deg)_rotateY(90deg)]",
        {
          "animate-offset-path": initialAnimation,
          "opacity-0": isNotSelected,
        },
      ]}
      style={{ "--offset-distance-end": offsetDistanceEnd, offsetDistance }}
      onAnimationEnd={handleAnimationEnd}
    >
      <PaintingFrame
        id={`painting-frame-${data.id}`}
        data={data}
        staggerIndex={index}
        selectedPainting={selectedPainting}
      />
    </li>
  );
};
