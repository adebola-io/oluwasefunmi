import { For } from "retend";
import { artists } from "../../data/music-project";
import { ArtistFolder } from "./ArtistFolder";

export function ArtistGrid() {
  return (
    <div
      class={[
        "pt-23 px-10 h-screen w-screen max-w-375 grid grid-cols-5 gap-x-2 gap-y-5 justify-content-center place-items-center",
        "max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2",
      ]}
    >
      {For(artists, (artist) => {
        return <ArtistFolder artist={artist} />;
      })}
    </div>
  );
}
