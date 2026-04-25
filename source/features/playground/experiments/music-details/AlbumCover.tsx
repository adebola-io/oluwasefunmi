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
      class="grid grid-cols-1 group perspective-midrange rounded-lg size-full"
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
  );
}
