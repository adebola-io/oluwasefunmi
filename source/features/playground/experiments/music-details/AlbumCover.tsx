import { Link } from "retend/router";
import { Album } from "../../data/music-project";

interface AlbumCoverProps {
  album: Album;
}

export function AlbumCover(props: AlbumCoverProps) {
  const { album } = props;

  return (
    <Link
      href="#"
      class="grid grid-cols-1 group perspective-midrange rounded-lg"
    >
      <div
        data-back
        class="z-[-1] w-auto aspect-square bg-white rounded-lg overflow-hidden outline-1 outline-[#ffffff70]"
        style={{ gridArea: "1/1" }}
      />
      <div
        data-front
        class={[
          "w-auto aspect-square rounded-lg overflow-hidden outline-1 outline-[#ffffff70]",
          "group-hover:-rotate-y-35 duration-350 ease-(--ease-spring) transition-transform perspective-origin-left origin-left",
        ]}
        style={{ gridArea: "1/1" }}
      >
        <img
          src={album.imageUrl}
          alt={`${album.name} by ${album.artist}`}
          class="h-full object-cover"
        />
      </div>
    </Link>
  );
}
