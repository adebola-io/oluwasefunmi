import { createScope, SourceCell } from "retend";
import { MovieCanvasMovie } from "./movies";

interface MovieCanvasScope {
  movieList: SourceCell<MovieCanvasMovie[]>;
  selectedMovie: SourceCell<MovieCanvasMovie | null>;
}

export const MovieCanvasScope = createScope<MovieCanvasScope>("MovieCanvas");
