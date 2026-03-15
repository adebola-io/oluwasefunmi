import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup } from "retend";
import { createUniqueTransition } from "retend-utils/components";

interface PaintingImageProps {
  data: Painting;
  index: Cell<number>;
  isSelected?: boolean;
  onSelected?: () => void;
  /** Whether hover effects and selection are enabled. Defaults to true. */
  isInteractive?: Cell<boolean>;
}

export const PaintingImage = createUniqueTransition<PaintingImageProps>(
  (props) => {
    const { data, index, onSelected, isInteractive } = props.get();
    const isSelected = Cell.derived(() => props.get().isSelected);
    const isNotSelected = Cell.derived(() => !isSelected.get());
    const src = getPaintingImage(data.id);

    const loading = Cell.source(false);
    const loaded = Cell.source(false);

    const offsetDistance = Cell.derived(() => {
      return (index.get() / paintings.length) * 100;
    });
    const offsetDistancePercent = Cell.derived(() => {
      return `${offsetDistance.get()}%`;
    });
    const offsetDistanceEnd = Cell.derived(() => {
      return `${offsetDistance.get() + 100}%`;
    });
    const imageVisible = Cell.derived(() => {
      return loaded.get();
    });
    const imageSrc = Cell.derived(() => {
      if (loading.get()) {
        return src.small;
      }
    });
    const transform = Cell.derived(() => {
      return isSelected.get() ? "none" : "rotateX(-90deg) rotateY(90deg)";
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
          "relative rounded-2xl size-[18dvw] md:size-[14dvw] select-none",
          "after:top-0 after:absolute after:h-full after:w-full after:rotate-y-90 [-webkit-user-drag:none]",
          "group",
          cursorClass,
          { "animate-offset-path": isNotSelected },
          { "bg-green-200 [--offset-path:none]": isSelected },
        ]}
        style={{
          "--offset-distance-end": offsetDistanceEnd,
          offsetPath: "var(--offset-path)",
          offsetDistance: offsetDistancePercent,
          transformStyle: "preserve-3d",
          transform,
        }}
        onClick={handleClick}
      >
        <div
          class={[
            "size-full transition-colors border-2 rounded-2xl overflow-hidden",
            "bg-center bg-cover not-group-hover:delay-150",
            "group-hover:border-yellow-300",
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
  },
  {
    container: {
      style: {
        display: "contents",
      },
    },
  },
);
