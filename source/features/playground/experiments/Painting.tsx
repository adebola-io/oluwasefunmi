import { getPaintingImage } from "@/data/paintingImages";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, onSetup } from "retend";
import { Link } from "retend/router";

interface PaintingImageProps {
  data: Painting;
  index: Cell<number>;
}

export const PaintingImage = (props: PaintingImageProps) => {
  const { data, index } = props;
  const src = getPaintingImage(data.id);

  const innerDivRef = Cell.source<HTMLDivElement | null>(null);
  const hovered = Cell.source(false);
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

  const handlePointerEnter = () => {
    hovered.set(true);
  };

  const handlePointerLeave = async () => {
    const div = innerDivRef.get();
    if (!div) return;

    let animations = div.getAnimations();
    while (animations.length) {
      await Promise.all(animations.map((animation) => animation.finished));
      animations = div.getAnimations();
    }
    hovered.set(false);
  };

  onSetup(() => {
    const timeout = window.setTimeout(() => {
      loading.set(true);
    }, index.get() * 20);
    return () => window.clearTimeout(timeout);
  });

  return (
    <Link
      href="#"
      draggable={false}
      class={[
        "relative animate-offset-path rounded-2xl size-[18dvw] md:size-[14dvw] [grid-area:1/1] select-none",
        "after:top-0 after:absolute after:h-full after:w-full after:rotate-y-90 [-webkit-user-drag:none]",
        { hovered },
      ]}
      style={{
        "--offset-distance-end": offsetDistanceEnd,
        offsetPath: "var(--offset-path)",
        offsetDistance: offsetDistancePercent,
        transformStyle: "preserve-3d",
        transform: "rotateX(-90deg) rotateY(90deg)",
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={innerDivRef}
        class={[
          "size-full transition-transform duration-300 border-2 rounded-2xl overflow-hidden",
          "bg-center bg-cover",
          "in-[.hovered]:translate-y-[-90%] in-[.hovered]:scale-125",
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
    </Link>
  );
};
