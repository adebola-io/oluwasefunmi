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
  const isSelected = Cell.source(false);
  const isNotSelected = Cell.derived(() => !isSelected.get());
  const src = getPaintingImage(data.id);
  const hovered = Cell.source(false);

  const loading = Cell.source(false);
  const loaded = Cell.source(false);

  const offsetDistance = Cell.derived(() => {
    return (index.get() / paintings.length) * -100;
  });
  const offsetDistancePercent = Cell.derived(() => {
    return `${offsetDistance.get()}%`;
  });
  const offsetDistanceEnd = Cell.derived(() => {
    return `${offsetDistance.get() - 100}%`;
  });
  const imageVisible = Cell.derived(() => {
    return loaded.get();
  });
  const imageSrc = Cell.derived(() => {
    if (loading.get()) {
      return src.small;
    }
  });

  const canInteract = Cell.derived(() => {
    return isInteractive?.get() ?? true;
  });

  const handleClick = () => {
    if (!canInteract.get()) return;
    onSelected?.();
  };

  const cursorClass = Cell.derived(() =>
    canInteract.get() ? "cursor-pointer" : "cursor-default",
  );

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
        "relative rounded-2xl size-[18dvw] md:size-[14dvw] select-none transform-3d",
        "[-webkit-user-drag:none]",
        "group duration-500 transition-transform",
        cursorClass,
        {
          "animate-offset-path transform-[rotateX(-90deg)_rotateY(90deg)]":
            isNotSelected,
          "translate-x-10": hovered,
          "bg-green-200 [--offset-path:none]": isSelected,
        },
      ]}
      style={{
        "--offset-distance-end": offsetDistanceEnd,
        offsetPath: "var(--offset-path)",
        gridArea: "1/1",
        offsetDistance: offsetDistancePercent,
      }}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        class={[
          "size-full transition-colors border-2 rounded-2xl overflow-hidden",
          "bg-center bg-cover",
        ]}
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
