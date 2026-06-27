import { MOVIE_CANVAS_COLUMNS, type MovieCanvasMovie } from "./movies";

export interface MovieCanvasFocusRequest {
  id: number;
  movieId: string;
  offsetY: number;
  posterRow: number;
  posterCol: number;
  row: number;
  col: number;
}

interface MovieFocusOptions {
  cameraX: number;
  cameraY: number;
  height: number;
  id: number;
  movies: MovieCanvasMovie[];
  movie: MovieCanvasMovie;
  width: number;
}

export function getMovieCanvasMode(
  width: number,
  height: number
): [number, number] {
  const aspectRatio = width / height;
  if (Number.isNaN(aspectRatio)) return [2, 5];

  if (aspectRatio < 0.6) return [4, 3];
  if (aspectRatio < 0.7) return [3, 3];
  if (aspectRatio < 0.8) return [3, 4];
  if (aspectRatio < 1) return [2, 3];
  if (aspectRatio < 1.2) return [3, 5];
  if (aspectRatio < 1.5) return [2, 4];

  return [2, 5];
}

export function getNearestMovieFocusRequest(
  options: MovieFocusOptions
): MovieCanvasFocusRequest | null {
  const { cameraX, cameraY, height, id, movies, movie, width } = options;
  const index = movies.findIndex((item) => item.id === movie.id);
  if (index === -1 || width === 0 || height === 0) return null;

  const rows = movies.length / MOVIE_CANVAS_COLUMNS;
  const basePosterRow = Math.floor(index / MOVIE_CANVAS_COLUMNS);
  const basePosterCol = index % MOVIE_CANVAS_COLUMNS;
  const [subgridRows, subgridCols] = getMovieCanvasMode(width, height);
  const currentTileRow = (height / 2 - cameraY) / height - 0.5;
  const currentTileCol = (width / 2 - cameraX) / width - 0.5;
  const currentPosterRow = (currentTileRow + 0.5) * subgridRows - 0.5;
  const currentPosterCol = (currentTileCol + 0.5) * subgridCols - 0.5;
  const posterRow = getNearestRepeatedValue(
    basePosterRow,
    rows,
    currentPosterRow
  );
  const posterCol = getNearestRepeatedValue(
    basePosterCol,
    MOVIE_CANVAS_COLUMNS,
    currentPosterCol
  );

  return {
    col: (posterCol + 0.5) / subgridCols - 0.5,
    id,
    movieId: movie.id,
    offsetY: getMovieMarginOffsetY(posterCol, width, height, subgridCols),
    posterCol,
    posterRow,
    row: (posterRow + 0.5) / subgridRows - 0.5,
  };
}

function getNearestRepeatedValue(
  value: number,
  size: number,
  target: number
): number {
  return value + Math.round((target - value) / size) * size;
}

function getMovieMarginOffsetY(
  posterCol: number,
  width: number,
  height: number,
  subgridCols: number
): number {
  if (Math.abs(posterCol % 2) !== 1 || height === 0) return 0;
  return (-0.75 * width) / height / subgridCols;
}
