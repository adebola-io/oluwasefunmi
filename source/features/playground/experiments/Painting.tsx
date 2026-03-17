import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup, createUnique } from "retend";
import { useRouter } from "retend/router";
import { useDerivedValue } from "retend-utils/hooks";
import { UniqueTransition } from "retend-utils/components";

interface PaintingImageProps {
  id?: string;
  data: Painting;
  index: Cell<number>;
  onSelected?: () => void;
  /** Whether selection is enabled. Defaults to true. */
  isInteractive?: boolean;
}

export const PaintingImage = createUnique<PaintingImageProps>((props) => {
  const data = Cell.derived(() => props.get().data);
  const index = Cell.derived(() => props.get().index.get());
  const onSelected = Cell.derived(() => props.get().onSelected);
  const isInteractive = Cell.derived(() => props.get().isInteractive);
  const router = useRouter();

  const src = Cell.derived(() => getPaintingImage(data.get().id));

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
    if (loading.get()) return src.get().small;
  });

  const canInteract = useDerivedValue(
    Cell.derived(() => isInteractive.get() ?? true),
  );

  const handleClick = () => {
    if (!canInteract.get()) return;
    onSelected.get()?.();
    router.navigate(`/playground/painting-wheel/${data.get().id}`);
  };

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
        "group duration-500 transition-all",
        "animate-offset-path transform-[rotateX(-90deg)_rotateY(90deg)]",
      ]}
      style={{ "--offset-distance-end": offsetDistanceEnd, offsetDistance }}
      onClick={handleClick}
    >
      <div
        class="size-full border-2 border-white/10 rounded-2xl overflow-hidden bg-center bg-cover transition-colors duration-300"
        style={{ backgroundImage: Cell.derived(() => src.get().gradient) }}
      >
        <UniqueTransition transitionDuration="200ms">
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
            alt={Cell.derived(() => data.get().title)}
            onLoad={() => loaded.set(true)}
          />
        </UniqueTransition>
      </div>
    </button>
  );
});
