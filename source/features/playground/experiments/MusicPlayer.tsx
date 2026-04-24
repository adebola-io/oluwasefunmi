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
            "group/baskets h-screen w-screen flex flex-wrap justify-center pt-30 gap-[10dvw]",
            "md:items-center",
          ]}
        >
          <AlbumBasket
            title="2000s"
            color="var(--color-blue-400)"
            albums={albumDecades["2000s"]}
          />
          <AlbumBasket
            title="2010s"
            color="var(--color-pink-400)"
            albums={albumDecades["2010s"]}
          />
          <AlbumBasket
            title="2020s"
            color="var(--color-green-400)"
            albums={albumDecades["2020s"]}
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
