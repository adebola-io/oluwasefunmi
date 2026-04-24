import { Link } from "retend/router";
import { Artist } from "../../data/music-project";

interface ArtistFolderProps {
  artist: Artist;
}

export function ArtistFolder(props: ArtistFolderProps) {
  const { artist } = props;
  return (
    <Link
      href="#"
      style={{ "--color": artist.themeColor }}
      class="grid grid-cols-1 group perspective-midrange rounded-lg"
    >
      <div
        data-back
        class="z-[-1] w-auto aspect-square bg-white rounded-lg overflow-hidden outline-1 outline-[#ffffff70]"
        style={{ gridArea: "1/1" }}
      >
        <div
          class="size-full opacity-80"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color) 68%, black)",
          }}
        ></div>
      </div>
      <div
        data-front
        class={[
          "w-auto aspect-square rounded-lg overflow-hidden outline-1 outline-[#ffffff70]",
          "group-hover:-rotate-y-35 duration-350 ease-(--ease-spring) transition-transform perspective-origin-left origin-left",
        ]}
        style={{
          gridArea: "1/1",
          backgroundImage: artist.backgroundGradient,
        }}
      >
        <img
          src={artist.imageUrl}
          alt={artist.name}
          class="h-full object-cover"
        />
      </div>
    </Link>
  );
}
