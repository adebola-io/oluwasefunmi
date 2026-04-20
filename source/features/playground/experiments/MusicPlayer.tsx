import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import { ArtistBasket } from "./music-details/ArtistBasket";
import { Viewer } from "../components/Viewer/Viewer";

const MusicPlayer: RouteComponent = () => {
  return (
    <div class={classes.app}>
      <PlaygroundLayout title="Music Player">
        <div class="h-screen w-screen grid place-items-center">
          <Viewer initialRx={-20.1357} initialRy={36.994}>
            <ArtistBasket />
          </Viewer>
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
