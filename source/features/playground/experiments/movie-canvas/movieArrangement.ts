import type { MovieCanvasMovie } from "./movies";
import { MOVIE_CANVAS_COLUMNS } from "./movies";

interface GridSlot {
  angle: number;
  distance: number;
  index: number;
  ring: number;
}

const TAG_PREFIX_WEIGHTS: Record<string, number> = {
  genre: 5,
  subgenre: 4,
  theme: 3,
  mood: 3,
  subject: 2,
  setting: 2,
  franchise: 2,
  studio: 2,
  format: 1.5,
  origin: 1.5,
  creator: 1,
  era: 1,
  story: 1,
  audience: 1,
  intensity: 1,
  recognition: 0.75,
};

export function arrangeMoviesBySimilarity(
  selectedMovie: MovieCanvasMovie,
  movies: MovieCanvasMovie[],
  centerRow: number,
  centerCol: number
): MovieCanvasMovie[] {
  const rows = movies.length / MOVIE_CANVAS_COLUMNS;
  const patternRow = positiveModulo(centerRow, rows);
  const patternCol = positiveModulo(centerCol, MOVIE_CANVAS_COLUMNS);
  const centerIndex = patternRow * MOVIE_CANVAS_COLUMNS + patternCol;
  const destinationSlots = createConcentricSlots(patternRow, patternCol, rows);
  const moviesBySimilarity = movies
    .filter((movie) => movie.id !== selectedMovie.id)
    .map((movie, index) => ({
      index,
      movie,
      score: getMovieSimilarity(selectedMovie, movie),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const arrangedMovies = Array<MovieCanvasMovie>(movies.length);
  arrangedMovies[centerIndex] = selectedMovie;

  for (const [index, movie] of moviesBySimilarity.entries()) {
    const slot = destinationSlots[index];
    if (!slot) break;
    arrangedMovies[slot.index] = movie.movie;
  }

  return arrangedMovies;
}

export function getMovieSimilarity(
  sourceMovie: MovieCanvasMovie,
  targetMovie: MovieCanvasMovie
): number {
  const sourceTags = new Set(sourceMovie.tags);
  const targetTags = new Set(targetMovie.tags);
  const sharedWeight = [...sourceTags].reduce((total, tag) => {
    return targetTags.has(tag) ? total + getTagWeight(tag) : total;
  }, 0);
  const unionWeight = [...new Set([...sourceTags, ...targetTags])].reduce(
    (total, tag) => total + getTagWeight(tag),
    0
  );

  return unionWeight === 0 ? 0 : sharedWeight / unionWeight;
}

function createConcentricSlots(
  centerRow: number,
  centerCol: number,
  rows: number
): GridSlot[] {
  return Array.from({ length: rows * MOVIE_CANVAS_COLUMNS }, (_, index) => {
    const row = Math.floor(index / MOVIE_CANVAS_COLUMNS);
    const col = index % MOVIE_CANVAS_COLUMNS;
    const rowDistance = getWrappedDistance(row, centerRow, rows);
    const colDistance = getWrappedDistance(
      col,
      centerCol,
      MOVIE_CANVAS_COLUMNS
    );

    return {
      angle: Math.atan2(rowDistance, colDistance),
      distance: Math.hypot(rowDistance, colDistance),
      index,
      ring: Math.max(Math.abs(rowDistance), Math.abs(colDistance)),
    };
  })
    .filter((slot) => slot.ring !== 0)
    .sort(compareGridSlots);
}

function compareGridSlots(a: GridSlot, b: GridSlot): number {
  return a.ring - b.ring || a.distance - b.distance || a.angle - b.angle;
}

function getTagWeight(tag: string): number {
  const prefix = tag.split(":", 1)[0]!;
  return TAG_PREFIX_WEIGHTS[prefix] ?? 1;
}

function getWrappedDistance(
  value: number,
  origin: number,
  size: number
): number {
  const distance = value - origin;
  const limit = Math.floor(size / 2);

  if (distance > limit) return distance - size;
  if (distance < -limit) return distance + size;

  return distance;
}

function positiveModulo(value: number, size: number): number {
  return ((value % size) + size) % size;
}
