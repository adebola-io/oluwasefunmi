import type { RouteComponent } from "retend/router";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { InfiniteCanvas } from "@/features/playground/components/InfiniteCanvas/InfiniteCanvas";
import { InfiniteRepeatedPattern } from "@/features/playground/components/InfiniteCanvas/InfiniteRepeatedPattern";
import { MovieCanvasChunk } from "@/features/playground/experiments/movie-canvas/MovieCanvasChunk";

const MovieCanvas: RouteComponent = () => {
  return (
    <PlaygroundLayout title="Movie Canvas">
      <InfiniteCanvas class="fixed top-0 left-0 w-screen h-screen grid grid-cols-1 grid-rows-1">
        <InfiniteRepeatedPattern Template={MovieCanvasChunk} initialY="25cqh" />
      </InfiniteCanvas>
    </PlaygroundLayout>
  );
};

MovieCanvas.metadata = () => ({
  title: "Movie Canvas | Playground",
  description: "An infinite movie-poster canvas playground experiment.",
  ogTitle: "Movie Canvas | Playground",
  ogDescription: "An infinite movie-poster canvas playground experiment.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Movie Canvas | Playground",
  twitterDescription: "An infinite movie-poster canvas playground experiment.",
  twitterImage: `${SITE_URL}/og/playground.png`,
});

export default MovieCanvas;
