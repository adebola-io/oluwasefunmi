import type { ImageModule } from "@/shared/types";

export interface MovieCanvasMovie {
  id: string;
  title: string;
  posterUrl: string;
}

const posterModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/posters/*.webp",
  { eager: true }
);

export const MOVIE_CANVAS_COLUMNS = 10;

export const MOVIES: MovieCanvasMovie[] = [
  {
    id: "spirited-away",
    title: "Spirited Away",
    posterUrl: getMoviePoster("spirited-away"),
  },
  {
    id: "parasite",
    title: "Parasite",
    posterUrl: getMoviePoster("parasite"),
  },
  {
    id: "moonlight",
    title: "Moonlight",
    posterUrl: getMoviePoster("moonlight"),
  },
  {
    id: "in-the-mood-for-love",
    title: "In the Mood for Love",
    posterUrl: getMoviePoster("in-the-mood-for-love"),
  },
  {
    id: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    posterUrl: getMoviePoster("the-grand-budapest-hotel"),
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    posterUrl: getMoviePoster("mad-max-fury-road"),
  },
  {
    id: "arrival",
    title: "Arrival",
    posterUrl: getMoviePoster("arrival"),
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    posterUrl: getMoviePoster("blade-runner-2049"),
  },
  {
    id: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    posterUrl: getMoviePoster("everything-everywhere-all-at-once"),
  },
  {
    id: "past-lives",
    title: "Past Lives",
    posterUrl: getMoviePoster("past-lives"),
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    posterUrl: getMoviePoster("the-godfather"),
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    posterUrl: getMoviePoster("goodfellas"),
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    posterUrl: getMoviePoster("pulp-fiction"),
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    posterUrl: getMoviePoster("the-social-network"),
  },
  {
    id: "zodiac",
    title: "Zodiac",
    posterUrl: getMoviePoster("zodiac"),
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    posterUrl: getMoviePoster("the-matrix"),
  },
  {
    id: "alien",
    title: "Alien",
    posterUrl: getMoviePoster("alien"),
  },
  {
    id: "the-thing",
    title: "The Thing",
    posterUrl: getMoviePoster("the-thing"),
  },
  {
    id: "jaws",
    title: "Jaws",
    posterUrl: getMoviePoster("jaws"),
  },
  {
    id: "jurassic-park",
    title: "Jurassic Park",
    posterUrl: getMoviePoster("jurassic-park"),
  },
  {
    id: "do-the-right-thing",
    title: "Do the Right Thing",
    posterUrl: getMoviePoster("do-the-right-thing"),
  },
  {
    id: "city-of-god",
    title: "City of God",
    posterUrl: getMoviePoster("city-of-god"),
  },
  {
    id: "amelie",
    title: "Amélie",
    posterUrl: getMoviePoster("amelie"),
  },
  {
    id: "portrait-of-a-lady-on-fire",
    title: "Portrait of a Lady on Fire",
    posterUrl: getMoviePoster("portrait-of-a-lady-on-fire"),
  },
  {
    id: "aftersun",
    title: "Aftersun",
    posterUrl: getMoviePoster("aftersun"),
  },
  {
    id: "get-out",
    title: "Get Out",
    posterUrl: getMoviePoster("get-out"),
  },
  {
    id: "nope",
    title: "Nope",
    posterUrl: getMoviePoster("nope"),
  },
  {
    id: "whiplash",
    title: "Whiplash",
    posterUrl: getMoviePoster("whiplash"),
  },
  {
    id: "la-la-land",
    title: "La La Land",
    posterUrl: getMoviePoster("la-la-land"),
  },
  {
    id: "black-swan",
    title: "Black Swan",
    posterUrl: getMoviePoster("black-swan"),
  },
  {
    id: "her",
    title: "Her",
    posterUrl: getMoviePoster("her"),
  },
  {
    id: "lost-in-translation",
    title: "Lost in Translation",
    posterUrl: getMoviePoster("lost-in-translation"),
  },
  {
    id: "children-of-men",
    title: "Children of Men",
    posterUrl: getMoviePoster("children-of-men"),
  },
  {
    id: "roma",
    title: "Roma",
    posterUrl: getMoviePoster("roma"),
  },
  {
    id: "pans-labyrinth",
    title: "Pan's Labyrinth",
    posterUrl: getMoviePoster("pans-labyrinth"),
  },
  {
    id: "the-shining",
    title: "The Shining",
    posterUrl: getMoviePoster("the-shining"),
  },
  {
    id: "2001-a-space-odyssey",
    title: "2001: A Space Odyssey",
    posterUrl: getMoviePoster("2001-a-space-odyssey"),
  },
  {
    id: "akira",
    title: "Akira",
    posterUrl: getMoviePoster("akira"),
  },
  {
    id: "princess-mononoke",
    title: "Princess Mononoke",
    posterUrl: getMoviePoster("princess-mononoke"),
  },
  {
    id: "the-red-shoes",
    title: "The Red Shoes",
    posterUrl: getMoviePoster("the-red-shoes"),
  },
  {
    id: "seven-samurai",
    title: "Seven Samurai",
    posterUrl: getMoviePoster("seven-samurai"),
  },
  {
    id: "rashomon",
    title: "Rashomon",
    posterUrl: getMoviePoster("rashomon"),
  },
  {
    id: "bicycle-thieves",
    title: "Bicycle Thieves",
    posterUrl: getMoviePoster("bicycle-thieves"),
  },
  {
    id: "cleo-from-5-to-7",
    title: "Cléo from 5 to 7",
    posterUrl: getMoviePoster("cleo-from-5-to-7"),
  },
  {
    id: "chungking-express",
    title: "Chungking Express",
    posterUrl: getMoviePoster("chungking-express"),
  },
  {
    id: "yi-yi",
    title: "Yi Yi",
    posterUrl: getMoviePoster("yi-yi"),
  },
  {
    id: "drive-my-car",
    title: "Drive My Car",
    posterUrl: getMoviePoster("drive-my-car"),
  },
  {
    id: "burning",
    title: "Burning",
    posterUrl: getMoviePoster("burning"),
  },
  {
    id: "the-handmaiden",
    title: "The Handmaiden",
    posterUrl: getMoviePoster("the-handmaiden"),
  },
  {
    id: "decision-to-leave",
    title: "Decision to Leave",
    posterUrl: getMoviePoster("decision-to-leave"),
  },
  {
    id: "obsession",
    title: "Obsession",
    posterUrl: getMoviePoster("obsession"),
  },
  {
    id: "backrooms",
    title: "Backrooms",
    posterUrl: getMoviePoster("backrooms"),
  },
  {
    id: "toy-story-5",
    title: "Toy Story 5",
    posterUrl: getMoviePoster("toy-story-5"),
  },
  {
    id: "supergirl",
    title: "Supergirl",
    posterUrl: getMoviePoster("supergirl"),
  },
  {
    id: "the-mandalorian-and-grogu",
    title: "The Mandalorian and Grogu",
    posterUrl: getMoviePoster("the-mandalorian-and-grogu"),
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    posterUrl: getMoviePoster("project-hail-mary"),
  },
  {
    id: "scream-7",
    title: "Scream 7",
    posterUrl: getMoviePoster("scream-7"),
  },
  {
    id: "the-odyssey",
    title: "The Odyssey",
    posterUrl: getMoviePoster("the-odyssey"),
  },
  {
    id: "avengers-doomsday",
    title: "Avengers: Doomsday",
    posterUrl: getMoviePoster("avengers-doomsday"),
  },
  {
    id: "spider-man-brand-new-day",
    title: "Spider-Man: Brand New Day",
    posterUrl: getMoviePoster("spider-man-brand-new-day"),
  },
  {
    id: "the-fantastic-four-first-steps",
    title: "The Fantastic Four: First Steps",
    posterUrl: getMoviePoster("the-fantastic-four-first-steps"),
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    posterUrl: getMoviePoster("captain-america-brave-new-world"),
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    posterUrl: getMoviePoster("thunderbolts"),
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    posterUrl: getMoviePoster("deadpool-wolverine"),
  },
  {
    id: "guardians-of-the-galaxy-vol-3",
    title: "Guardians of the Galaxy Vol. 3",
    posterUrl: getMoviePoster("guardians-of-the-galaxy-vol-3"),
  },
  {
    id: "black-panther",
    title: "Black Panther",
    posterUrl: getMoviePoster("black-panther"),
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    posterUrl: getMoviePoster("avengers-endgame"),
  },
  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    posterUrl: getMoviePoster("spider-man-no-way-home"),
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    posterUrl: getMoviePoster("inside-out-2"),
  },
  {
    id: "elemental",
    title: "Elemental",
    posterUrl: getMoviePoster("elemental"),
  },
  {
    id: "turning-red",
    title: "Turning Red",
    posterUrl: getMoviePoster("turning-red"),
  },
  {
    id: "soul",
    title: "Soul",
    posterUrl: getMoviePoster("soul"),
  },
  {
    id: "coco",
    title: "Coco",
    posterUrl: getMoviePoster("coco"),
  },
  {
    id: "wall-e",
    title: "WALL-E",
    posterUrl: getMoviePoster("wall-e"),
  },
  {
    id: "up",
    title: "Up",
    posterUrl: getMoviePoster("up"),
  },
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    posterUrl: getMoviePoster("finding-nemo"),
  },
  {
    id: "the-incredibles",
    title: "The Incredibles",
    posterUrl: getMoviePoster("the-incredibles"),
  },
  {
    id: "ratatouille",
    title: "Ratatouille",
    posterUrl: getMoviePoster("ratatouille"),
  },
  {
    id: "toy-story",
    title: "Toy Story",
    posterUrl: getMoviePoster("toy-story"),
  },
  {
    id: "monsters-inc",
    title: "Monsters, Inc.",
    posterUrl: getMoviePoster("monsters-inc"),
  },
  {
    id: "hereditary",
    title: "Hereditary",
    posterUrl: getMoviePoster("hereditary"),
  },
  {
    id: "midsommar",
    title: "Midsommar",
    posterUrl: getMoviePoster("midsommar"),
  },
  {
    id: "bring-her-back",
    title: "Bring Her Back",
    posterUrl: getMoviePoster("bring-her-back"),
  },
  {
    id: "talk-to-me",
    title: "Talk to Me",
    posterUrl: getMoviePoster("talk-to-me"),
  },
  {
    id: "the-substance",
    title: "The Substance",
    posterUrl: getMoviePoster("the-substance"),
  },
  {
    id: "barbarian",
    title: "Barbarian",
    posterUrl: getMoviePoster("barbarian"),
  },
  {
    id: "the-witch",
    title: "The Witch",
    posterUrl: getMoviePoster("the-witch"),
  },
  {
    id: "it-follows",
    title: "It Follows",
    posterUrl: getMoviePoster("it-follows"),
  },
  {
    id: "the-babadook",
    title: "The Babadook",
    posterUrl: getMoviePoster("the-babadook"),
  },
  {
    id: "smile",
    title: "Smile",
    posterUrl: getMoviePoster("smile"),
  },
  {
    id: "longlegs",
    title: "Longlegs",
    posterUrl: getMoviePoster("longlegs"),
  },
  {
    id: "nosferatu",
    title: "Nosferatu",
    posterUrl: getMoviePoster("nosferatu"),
  },
  {
    id: "sinners",
    title: "Sinners",
    posterUrl: getMoviePoster("sinners"),
  },
  {
    id: "the-lord-of-the-rings-the-fellowship-of-the-ring",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    posterUrl: getMoviePoster(
      "the-lord-of-the-rings-the-fellowship-of-the-ring"
    ),
  },
  {
    id: "the-lord-of-the-rings-the-two-towers",
    title: "The Lord of the Rings: The Two Towers",
    posterUrl: getMoviePoster("the-lord-of-the-rings-the-two-towers"),
  },
  {
    id: "the-lord-of-the-rings-the-return-of-the-king",
    title: "The Lord of the Rings: The Return of the King",
    posterUrl: getMoviePoster("the-lord-of-the-rings-the-return-of-the-king"),
  },
  {
    id: "47-ronin",
    title: "47 Ronin",
    posterUrl: getMoviePoster("47-ronin"),
  },
  {
    id: "dune",
    title: "Dune",
    posterUrl: getMoviePoster("dune"),
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    posterUrl: getMoviePoster("dune-part-two"),
  },
  {
    id: "harry-potter-and-the-philosophers-stone",
    title: "Harry Potter and the Philosopher's Stone",
    posterUrl: getMoviePoster("harry-potter-and-the-philosophers-stone"),
  },
];

function getMoviePoster(imageId: string) {
  return posterModules[
    `/source/features/playground/data/images/posters/${imageId}.webp`
  ].default;
}

function positiveModulo(value: number, size: number) {
  return ((value % size) + size) % size;
}

export function movieForPoster(row: number, col: number) {
  const patternRow = positiveModulo(row, MOVIES.length / MOVIE_CANVAS_COLUMNS);
  const patternCol = positiveModulo(col, MOVIE_CANVAS_COLUMNS);
  return MOVIES[patternRow * MOVIE_CANVAS_COLUMNS + patternCol]!;
}
