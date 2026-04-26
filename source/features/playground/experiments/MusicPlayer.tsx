import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import type { AlbumBasketProps } from "./music-details/AlbumBasket";
import { AlbumSelectionScope } from "./music-details/AlbumSelectionScope";
import { SIZING_CLASSES } from "./music-details/albumGrid";
import { Cell } from "retend";
import { AlbumList } from "./music-details/AlbumList";

const MusicPlayer: RouteComponent = () => {
  const selected = Cell.source<AlbumBasketProps | null>(null);

  return (
    <div class={[classes.app, SIZING_CLASSES]}>
      <PlaygroundLayout title="Music Player">
        <AlbumSelectionScope.Provider value={selected}>
          <div
            class={[
              "h-screen w-screen max-w-280 px-10 animate-fade-in",
              "grid place-items-center m-auto pt-50 md:grid-cols-2 lg:grid-cols-3",
            ]}
          >
            <AlbumList />
          </div>
        </AlbumSelectionScope.Provider>
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
