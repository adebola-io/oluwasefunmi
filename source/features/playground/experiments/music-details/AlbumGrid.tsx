import { For } from "retend";
import { albums } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";

export function AlbumGrid() {
  return (
    <div
      class={[
        "pt-23 px-10 h-screen w-screen max-w-375 grid grid-cols-5 gap-x-2 gap-y-5 justify-content-center place-items-center",
        "max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2",
      ]}
    >
      {For(albums, (album) => {
        return <AlbumCover album={album} />;
      })}
    </div>
  );
}
