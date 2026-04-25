import { Link } from "retend/router";
import { Album } from "../../data/music-project";
import { Cell, createUnique } from "retend";
import { UniqueTransition } from "retend-utils/components";

interface AlbumCoverProps {
  album: Album;
  index: Cell<number>;
}

export const AlbumCover = createUnique<AlbumCoverProps>((props) => {
  const { album, index } = props.get();
  const duration = Cell.derived(() => {
    return 300 + index.get() * 70;
  });

  return (
    <UniqueTransition
      transitionTimingFunction="var(--ease-spring)"
      transitionDuration={`${duration}ms`}
    >
      <Link
        href="#"
        class="grid grid-cols-1 group perspective-midrange rounded-lg size-full"
        style={{ "--index": index }}
      >
        <div
          data-back
          class="z-[-1] size-full aspect-square rounded-lg overflow-hidden outline-1 outline-[#ffffff70]"
          style={{ gridArea: "1/1", backgroundColor: album.themeColor }}
        />
        <div
          data-front
          class={[
            "size-full aspect-square rounded-lg overflow-hidden outline-1 outline-[#ffffff70]",
            "duration-350 ease-(--ease-spring) transition-transform perspective-origin-left origin-left",
            "group-hover:-rotate-y-40",
          ]}
          style={{ gridArea: "1/1", backgroundColor: album.themeColor }}
        >
          <img
            src={album.imageUrl}
            alt={`${album.name} by ${album.artist}`}
            class="size-full object-cover"
          />
        </div>
      </Link>
    </UniqueTransition>
  );
});
