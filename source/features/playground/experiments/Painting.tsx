import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup } from "retend";

interface PaintingImageProps {
  data: Painting;
  index: Cell<number>;
  isSelected?: boolean;
  onSelected?: () => void;
  /** Whether hover effects and selection are enabled. Defaults to true. */
  isInteractive?: Cell<boolean>;
}

export const PaintingImage = (props: PaintingImageProps) => {
  const { data, index, onSelected, isInteractive } = props;
  const src = getPaintingImage(data.id);
  const hovered = Cell.source(false);

  const loading = Cell.source(false);
  const loaded = Cell.source(false);

  const offsetDistanceRaw = Cell.derived(() => {
    return (index.get() / paintings.length) * -100;
  });
  const offsetDistance = Cell.derived(() => {
    return `${offsetDistanceRaw.get()}%`;
  });
  const offsetDistanceEnd = Cell.derived(() => {
    return `${offsetDistanceRaw.get() - 100}%`;
  });
  const imageVisible = Cell.derived(() => {
    return loaded.get();
  });
  const imageSrc = Cell.derived(() => {
    if (loading.get()) return src.small;
  });

  const canInteract = Cell.derived(() => {
    return isInteractive?.get() ?? true;
  });

  const handleClick = () => {
    if (!canInteract.get()) return;
    onSelected?.();
  };

  const handlePointerEnter = () => {
    hovered.set(true);
  };

  async function handlePointerLeave(this: HTMLElement) {
    const animations = this.getAnimations();
    await Promise.allSettled(animations.map((a) => a.finished));
    hovered.set(false);
  }

  onSetup(() => {
    const timeout = window.setTimeout(() => {
      loading.set(true);
    }, index.get() * 20);
    return () => window.clearTimeout(timeout);
  });

  return (
    <button
      type="button"
      class={[
        "relative rounded-2xl size-[17dvw] md:size-[14dvw] select-none transform-3d",
        "[-webkit-user-drag:none] [grid-area:1/1] [offset-path:var(--offset-path)]",
        "group duration-500 transition-transform",
        "animate-offset-path transform-[rotateX(-90deg)_rotateY(90deg)]",
      ]}
      style={{ "--offset-distance-end": offsetDistanceEnd, offsetDistance }}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        class="size-full border-2 rounded-2xl overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: src.gradient }}
      >
        <img
          draggable={false}
          class={[
            "size-full object-cover place-self-center transition-opacity duration-300",
            {
              "opacity-0": Cell.derived(() => !imageVisible.get()),
              "opacity-100": imageVisible,
            },
          ]}
          src={imageSrc}
          alt={data.title}
          onLoad={() => loaded.set(true)}
        />
      </div>
    </button>
  );
};
