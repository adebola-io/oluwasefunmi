import { createScope, type SourceCell } from "retend";
import type { MovieCanvasFocusRequest } from "./movieFocus";
import type { MovieCanvasMovie } from "./movies";

interface MovieCanvasScope {
  movieFocusRequest: SourceCell<MovieCanvasFocusRequest | null>;
  movieList: SourceCell<MovieCanvasMovie[]>;
  selectedMovie: SourceCell<MovieCanvasMovie | null>;
}

export const MovieCanvasScope = createScope<MovieCanvasScope>("MovieCanvas");
