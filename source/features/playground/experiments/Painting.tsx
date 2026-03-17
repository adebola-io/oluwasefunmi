import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup } from "retend";
import { useRouter } from "retend/router";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";

interface PaintingFrameProps {
  id: string;
  data: Painting;
  staggerIndex?: JSX.ValueOrCell<number>;
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
    if (loading.get()) return src.get().small;
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
      class="h-full w-auto aspect-square rounded-2xl overflow-hidden bg-center bg-cover transition-colors duration-300 border-2 border-white/10"
      style={{ backgroundImage: gradient }}
    >
      <img
        draggable={false}
        class={[
          "size-full object-cover transition-opacity duration-300",
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
  onSelected?: () => void;
  /** Whether selection is enabled. Defaults to true. */
  isInteractive?: boolean;
}

/**
 * Wheel-specific wrapper that applies 3D transforms.
 * Hosts the PaintingFrame component.
 */
export const PaintingImage = (props: PaintingImageProps) => {
  const { data, index, onSelected, isInteractive } = props;
  const router = useRouter();

  const offsetDistance = Cell.derived(() => {
    return `${(index.get() / paintings.length) * -100}%`;
  });
  const offsetDistanceEnd = Cell.derived(() => {
    return `${(index.get() / paintings.length) * -100 - 100}%`;
  });

  const canInteract = useDerivedValue(
    Cell.derived(() => isInteractive ?? true),
  );

  const handleClick = () => {
    if (!canInteract.get()) return;
    onSelected?.();
    router.navigate(`/playground/painting-wheel/${data.id}`);
  };

  return (
    <button
      type="button"
      class={[
        "relative rounded-2xl size-[17dvw] md:size-[14dvw] select-none transform-3d",
        "[-webkit-user-drag:none] [grid-area:1/1] [offset-path:var(--offset-path)]",
        "group duration-500 transition-all",
        "animate-offset-path transform-[rotateX(-90deg)_rotateY(90deg)]",
      ]}
      style={{ "--offset-distance-end": offsetDistanceEnd, offsetDistance }}
      onClick={handleClick}
    >
      <PaintingFrame
        id={`painting-frame-${data.id}`}
        data={data}
        staggerIndex={index}
      />
    </button>
  );
};
