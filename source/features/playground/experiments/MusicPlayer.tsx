import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import { AlbumBasket } from "./music-details/AlbumBasket";
import { albumDecades } from "../data/music-project";

const MusicPlayer: RouteComponent = () => {
  return (
    <div class={classes.app}>
      <PlaygroundLayout title="Music Player">
        <div
          class={[
            "group/baskets h-screen w-screen flex flex-col md:justify-center gap-x-[10dvw]",
            "pt-70 items-center md:flex-row md:flex-wrap",
          ]}
        >
          <AlbumBasket
            title="2000s"
            color="color-mix(in srgb, var(--color-blue-500) 90%, black)"
            albums={albumDecades["2000s"]}
            index={0}
          />
          <AlbumBasket
            title="2010s"
            color="color-mix(in srgb, var(--color-red-500) 90%, black)"
            albums={albumDecades["2010s"]}
            index={1}
          />
          <AlbumBasket
            title="2020s"
            color="color-mix(in srgb, var(--color-green-500) 90%, black)"
            albums={albumDecades["2020s"]}
            index={2}
          />
        </div>
      </PlaygroundLayout>
    </div>
  );
};

MusicPlayer.metadata = () => ({
  title: "Music Player | Playground",
  description:
    "A sleek music player with animated album artwork and smooth playback.",
  ogTitle: "Music Player | Playground",
  ogDescription:
    "A sleek music player with animated album artwork and smooth playback.",
  ogImage: `${SITE_URL}/og/music-player.png`,
  twitterTitle: "Music Player | Playground",
  twitterDescription:
    "A sleek music player with animated album artwork and smooth playback.",
  twitterImage: `${SITE_URL}/og/music-player.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default MusicPlayer;
