import { Cell } from "retend";
import type { RouteComponent } from "retend/router";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { InfiniteCanvas } from "@/features/playground/components/InfiniteCanvas/InfiniteCanvas";
import { InfiniteRepeatedPattern } from "@/features/playground/components/InfiniteCanvas/InfiniteRepeatedPattern";
import { MovieCanvasChunk } from "@/features/playground/experiments/movie-canvas/MovieCanvasChunk";
import { MovieCanvasSearch } from "@/features/playground/experiments/movie-canvas/MovieCanvasSearch";
import { MovieCanvasScope } from "./movie-canvas/MovieCanvasScope";
import { MOVIES } from "./movie-canvas/movies";

const MovieCanvas: RouteComponent = () => {
  const selectedMovie = Cell.source(null);
  const movieFocusRequest = Cell.source(null);
  const movieList = Cell.source(MOVIES);

  const ctx = { movieFocusRequest, movieList, selectedMovie };

  return (
    <MovieCanvasScope.Provider value={ctx}>
      <PlaygroundLayout title="Movie Canvas">
        <InfiniteCanvas class="fixed top-0 left-0 w-screen h-screen grid grid-cols-1 grid-rows-1">
          <InfiniteRepeatedPattern Template={MovieCanvasChunk} />
          <MovieCanvasSearch />
        </InfiniteCanvas>
      </PlaygroundLayout>
    </MovieCanvasScope.Provider>
  );
};

MovieCanvas.metadata = () => ({
  title: "Movie Canvas | Playground",
  description: "An infinite movie-poster canvas.",
  ogTitle: "Movie Canvas | Playground",
  ogDescription: "An infinite movie-poster canvas.",
  ogImage: `${SITE_URL}/og/movie-canvas.png`,
  twitterTitle: "Movie Canvas | Playground",
  twitterDescription: "An infinite movie-poster canvas.",
  twitterImage: `${SITE_URL}/og/playground.png`,
});

export default MovieCanvas;
