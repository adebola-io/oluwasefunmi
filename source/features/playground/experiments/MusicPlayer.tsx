import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import {
  AlbumBasket,
  type AlbumBasketProps,
} from "./music-details/AlbumBasket";
import {
  AlbumSelectionContext,
  AlbumSelectionScope,
} from "./music-details/AlbumSelectionScope";
import { SIZING_CLASSES } from "./music-details/albumGrid";
import { Cell, For, If } from "retend";
import type { Album } from "../data/music-project";
import { albumGroups } from "./music-details/albumGroups";
import { AlbumPlayerView } from "./music-details/AlbumPlayerView";

const MusicPlayer: RouteComponent = () => {
  const selected = Cell.source<AlbumBasketProps | null>(null);
  const selectedAlbum = Cell.source<Album | null>(albumGroups[1].albums[6]);
  const value: AlbumSelectionContext = {
    decade: selected,
    album: selectedAlbum,
  };

  return (
    <div class={[classes.app, SIZING_CLASSES]}>
      <PlaygroundLayout title="Music Player">
        <div class="h-screen w-screen max-w-280 px-10 grid place-items-center m-auto">
          <AlbumSelectionScope.Provider value={value}>
            {If(selectedAlbum, {
              true: () => <AlbumPlayerView />,
              false: () => (
                <div class="size-full animate-fade-in grid place-items-center pt-50 md:grid-cols-2 lg:grid-cols-3">
                  {For(albumGroups, (group) => (
                    <AlbumBasket {...group} />
                  ))}
                  ,
                </div>
              ),
            })}
          </AlbumSelectionScope.Provider>
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
