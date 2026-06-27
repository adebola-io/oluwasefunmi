import type { ImageModule } from "@/shared/types";

export interface MovieCanvasMovie {
  id: string;
  title: string;
  themeColor: string;
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
    themeColor: "#655446",
    posterUrl: getMoviePoster("spirited-away"),
  },
  {
    id: "parasite",
    title: "Parasite",
    themeColor: "#547c5f",
    posterUrl: getMoviePoster("parasite"),
  },
  {
    id: "moonlight",
    title: "Moonlight",
    themeColor: "#1892a2",
    posterUrl: getMoviePoster("moonlight"),
  },
  {
    id: "in-the-mood-for-love",
    title: "In the Mood for Love",
    themeColor: "#c91e25",
    posterUrl: getMoviePoster("in-the-mood-for-love"),
  },
  {
    id: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    themeColor: "#c01205",
    posterUrl: getMoviePoster("the-grand-budapest-hotel"),
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    themeColor: "#052330",
    posterUrl: getMoviePoster("mad-max-fury-road"),
  },
  {
    id: "arrival",
    title: "Arrival",
    themeColor: "#8f775b",
    posterUrl: getMoviePoster("arrival"),
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    themeColor: "#09a69d",
    posterUrl: getMoviePoster("blade-runner-2049"),
  },
  {
    id: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    themeColor: "#33151c",
    posterUrl: getMoviePoster("everything-everywhere-all-at-once"),
  },
  {
    id: "past-lives",
    title: "Past Lives",
    themeColor: "#7f6756",
    posterUrl: getMoviePoster("past-lives"),
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    themeColor: "#545454",
    posterUrl: getMoviePoster("the-godfather"),
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    themeColor: "#3a3638",
    posterUrl: getMoviePoster("goodfellas"),
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    themeColor: "#bb0b16",
    posterUrl: getMoviePoster("pulp-fiction"),
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    themeColor: "#978e7d",
    posterUrl: getMoviePoster("the-social-network"),
  },
  {
    id: "zodiac",
    title: "Zodiac",
    themeColor: "#162829",
    posterUrl: getMoviePoster("zodiac"),
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    themeColor: "#a098aa",
    posterUrl: getMoviePoster("the-matrix"),
  },
  {
    id: "alien",
    title: "Alien",
    themeColor: "#e5e3d8",
    posterUrl: getMoviePoster("alien"),
  },
  {
    id: "the-thing",
    title: "The Thing",
    themeColor: "#2a92bb",
    posterUrl: getMoviePoster("the-thing"),
  },
  {
    id: "jaws",
    title: "Jaws",
    themeColor: "#459db3",
    posterUrl: getMoviePoster("jaws"),
  },
  {
    id: "jurassic-park",
    title: "Jurassic Park",
    themeColor: "#c8180a",
    posterUrl: getMoviePoster("jurassic-park"),
  },
  {
    id: "do-the-right-thing",
    title: "Do the Right Thing",
    themeColor: "#264683",
    posterUrl: getMoviePoster("do-the-right-thing"),
  },
  {
    id: "city-of-god",
    title: "City of God",
    themeColor: "#cf5e26",
    posterUrl: getMoviePoster("city-of-god"),
  },
  {
    id: "amelie",
    title: "Amélie",
    themeColor: "#294f22",
    posterUrl: getMoviePoster("amelie"),
  },
  {
    id: "portrait-of-a-lady-on-fire",
    title: "Portrait of a Lady on Fire",
    themeColor: "#473a31",
    posterUrl: getMoviePoster("portrait-of-a-lady-on-fire"),
  },
  {
    id: "aftersun",
    title: "Aftersun",
    themeColor: "#6b8d9d",
    posterUrl: getMoviePoster("aftersun"),
  },
  {
    id: "get-out",
    title: "Get Out",
    themeColor: "#2a4150",
    posterUrl: getMoviePoster("get-out"),
  },
  {
    id: "nope",
    title: "Nope",
    themeColor: "#0a285d",
    posterUrl: getMoviePoster("nope"),
  },
  {
    id: "whiplash",
    title: "Whiplash",
    themeColor: "#415059",
    posterUrl: getMoviePoster("whiplash"),
  },
  {
    id: "la-la-land",
    title: "La La Land",
    themeColor: "#2f118b",
    posterUrl: getMoviePoster("la-la-land"),
  },
  {
    id: "black-swan",
    title: "Black Swan",
    themeColor: "#4a4847",
    posterUrl: getMoviePoster("black-swan"),
  },
  {
    id: "her",
    title: "Her",
    themeColor: "#b01023",
    posterUrl: getMoviePoster("her"),
  },
  {
    id: "lost-in-translation",
    title: "Lost in Translation",
    themeColor: "#a74e24",
    posterUrl: getMoviePoster("lost-in-translation"),
  },
  {
    id: "children-of-men",
    title: "Children of Men",
    themeColor: "#7f777d",
    posterUrl: getMoviePoster("children-of-men"),
  },
  {
    id: "roma",
    title: "Roma",
    themeColor: "#757267",
    posterUrl: getMoviePoster("roma"),
  },
  {
    id: "pans-labyrinth",
    title: "Pan's Labyrinth",
    themeColor: "#352e29",
    posterUrl: getMoviePoster("pans-labyrinth"),
  },
  {
    id: "the-shining",
    title: "The Shining",
    themeColor: "#7a5544",
    posterUrl: getMoviePoster("the-shining"),
  },
  {
    id: "2001-a-space-odyssey",
    title: "2001: A Space Odyssey",
    themeColor: "#b9a783",
    posterUrl: getMoviePoster("2001-a-space-odyssey"),
  },
  {
    id: "akira",
    title: "Akira",
    themeColor: "#822723",
    posterUrl: getMoviePoster("akira"),
  },
  {
    id: "princess-mononoke",
    title: "Princess Mononoke",
    themeColor: "#251616",
    posterUrl: getMoviePoster("princess-mononoke"),
  },
  {
    id: "the-red-shoes",
    title: "The Red Shoes",
    themeColor: "#195637",
    posterUrl: getMoviePoster("the-red-shoes"),
  },
  {
    id: "seven-samurai",
    title: "Seven Samurai",
    themeColor: "#7b835c",
    posterUrl: getMoviePoster("seven-samurai"),
  },
  {
    id: "rashomon",
    title: "Rashomon",
    themeColor: "#d95155",
    posterUrl: getMoviePoster("rashomon"),
  },
  {
    id: "bicycle-thieves",
    title: "Bicycle Thieves",
    themeColor: "#ac3a29",
    posterUrl: getMoviePoster("bicycle-thieves"),
  },
  {
    id: "cleo-from-5-to-7",
    title: "Cléo from 5 to 7",
    themeColor: "#524544",
    posterUrl: getMoviePoster("cleo-from-5-to-7"),
  },
  {
    id: "chungking-express",
    title: "Chungking Express",
    themeColor: "#666a8a",
    posterUrl: getMoviePoster("chungking-express"),
  },
  {
    id: "yi-yi",
    title: "Yi Yi",
    themeColor: "#c02727",
    posterUrl: getMoviePoster("yi-yi"),
  },
  {
    id: "drive-my-car",
    title: "Drive My Car",
    themeColor: "#86494e",
    posterUrl: getMoviePoster("drive-my-car"),
  },
  {
    id: "burning",
    title: "Burning",
    themeColor: "#8a797a",
    posterUrl: getMoviePoster("burning"),
  },
  {
    id: "the-handmaiden",
    title: "The Handmaiden",
    themeColor: "#766863",
    posterUrl: getMoviePoster("the-handmaiden"),
  },
  {
    id: "decision-to-leave",
    title: "Decision to Leave",
    themeColor: "#5c5753",
    posterUrl: getMoviePoster("decision-to-leave"),
  },
  {
    id: "obsession",
    title: "Obsession",
    themeColor: "#35302e",
    posterUrl: getMoviePoster("obsession"),
  },
  {
    id: "backrooms",
    title: "Backrooms",
    themeColor: "#8e7b28",
    posterUrl: getMoviePoster("backrooms"),
  },
  {
    id: "toy-story-5",
    title: "Toy Story 5",
    themeColor: "#35a6d5",
    posterUrl: getMoviePoster("toy-story-5"),
  },
  {
    id: "supergirl",
    title: "Supergirl",
    themeColor: "#1563a2",
    posterUrl: getMoviePoster("supergirl"),
  },
  {
    id: "the-mandalorian-and-grogu",
    title: "The Mandalorian and Grogu",
    themeColor: "#4f5b5f",
    posterUrl: getMoviePoster("the-mandalorian-and-grogu"),
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    themeColor: "#d48345",
    posterUrl: getMoviePoster("project-hail-mary"),
  },
  {
    id: "scream-7",
    title: "Scream 7",
    themeColor: "#541d10",
    posterUrl: getMoviePoster("scream-7"),
  },
  {
    id: "the-odyssey",
    title: "The Odyssey",
    themeColor: "#696e76",
    posterUrl: getMoviePoster("the-odyssey"),
  },
  {
    id: "avengers-doomsday",
    title: "Avengers: Doomsday",
    themeColor: "#3b4d36",
    posterUrl: getMoviePoster("avengers-doomsday"),
  },
  {
    id: "spider-man-brand-new-day",
    title: "Spider-Man: Brand New Day",
    themeColor: "#300a0c",
    posterUrl: getMoviePoster("spider-man-brand-new-day"),
  },
  {
    id: "the-fantastic-four-first-steps",
    title: "The Fantastic Four: First Steps",
    themeColor: "#2a86af",
    posterUrl: getMoviePoster("the-fantastic-four-first-steps"),
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    themeColor: "#bc3627",
    posterUrl: getMoviePoster("captain-america-brave-new-world"),
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    themeColor: "#91836a",
    posterUrl: getMoviePoster("thunderbolts"),
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    themeColor: "#b89353",
    posterUrl: getMoviePoster("deadpool-wolverine"),
  },
  {
    id: "guardians-of-the-galaxy-vol-3",
    title: "Guardians of the Galaxy Vol. 3",
    themeColor: "#250f58",
    posterUrl: getMoviePoster("guardians-of-the-galaxy-vol-3"),
  },
  {
    id: "black-panther",
    title: "Black Panther",
    themeColor: "#64777d",
    posterUrl: getMoviePoster("black-panther"),
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    themeColor: "#0d0941",
    posterUrl: getMoviePoster("avengers-endgame"),
  },
  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    themeColor: "#b87d6e",
    posterUrl: getMoviePoster("spider-man-no-way-home"),
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    themeColor: "#406782",
    posterUrl: getMoviePoster("inside-out-2"),
  },
  {
    id: "elemental",
    title: "Elemental",
    themeColor: "#6496cd",
    posterUrl: getMoviePoster("elemental"),
  },
  {
    id: "turning-red",
    title: "Turning Red",
    themeColor: "#ad4140",
    posterUrl: getMoviePoster("turning-red"),
  },
  {
    id: "soul",
    title: "Soul",
    themeColor: "#1f3152",
    posterUrl: getMoviePoster("soul"),
  },
  {
    id: "coco",
    title: "Coco",
    themeColor: "#3e3994",
    posterUrl: getMoviePoster("coco"),
  },
  {
    id: "wall-e",
    title: "WALL-E",
    themeColor: "#106ba8",
    posterUrl: getMoviePoster("wall-e"),
  },
  {
    id: "up",
    title: "Up",
    themeColor: "#5f92d3",
    posterUrl: getMoviePoster("up"),
  },
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    themeColor: "#2a6ba0",
    posterUrl: getMoviePoster("finding-nemo"),
  },
  {
    id: "the-incredibles",
    title: "The Incredibles",
    themeColor: "#ba3f23",
    posterUrl: getMoviePoster("the-incredibles"),
  },
  {
    id: "ratatouille",
    title: "Ratatouille",
    themeColor: "#bda796",
    posterUrl: getMoviePoster("ratatouille"),
  },
  {
    id: "toy-story",
    title: "Toy Story",
    themeColor: "#3279ab",
    posterUrl: getMoviePoster("toy-story"),
  },
  {
    id: "monsters-inc",
    title: "Monsters, Inc.",
    themeColor: "#64ab9f",
    posterUrl: getMoviePoster("monsters-inc"),
  },
  {
    id: "hereditary",
    title: "Hereditary",
    themeColor: "#1d2124",
    posterUrl: getMoviePoster("hereditary"),
  },
  {
    id: "midsommar",
    title: "Midsommar",
    themeColor: "#e69766",
    posterUrl: getMoviePoster("midsommar"),
  },
  {
    id: "bring-her-back",
    title: "Bring Her Back",
    themeColor: "#94a590",
    posterUrl: getMoviePoster("bring-her-back"),
  },
  {
    id: "talk-to-me",
    title: "Talk to Me",
    themeColor: "#38403f",
    posterUrl: getMoviePoster("talk-to-me"),
  },
  {
    id: "the-substance",
    title: "The Substance",
    themeColor: "#866867",
    posterUrl: getMoviePoster("the-substance"),
  },
  {
    id: "barbarian",
    title: "Barbarian",
    themeColor: "#c50101",
    posterUrl: getMoviePoster("barbarian"),
  },
  {
    id: "the-witch",
    title: "The Witch",
    themeColor: "#43535d",
    posterUrl: getMoviePoster("the-witch"),
  },
  {
    id: "it-follows",
    title: "It Follows",
    themeColor: "#192325",
    posterUrl: getMoviePoster("it-follows"),
  },
  {
    id: "the-babadook",
    title: "The Babadook",
    themeColor: "#d6d4d1",
    posterUrl: getMoviePoster("the-babadook"),
  },
  {
    id: "smile",
    title: "Smile",
    themeColor: "#353a3d",
    posterUrl: getMoviePoster("smile"),
  },
  {
    id: "longlegs",
    title: "Longlegs",
    themeColor: "#7a806f",
    posterUrl: getMoviePoster("longlegs"),
  },
  {
    id: "nosferatu",
    title: "Nosferatu",
    themeColor: "#edeae2",
    posterUrl: getMoviePoster("nosferatu"),
  },
  {
    id: "sinners",
    title: "Sinners",
    themeColor: "#d9a62c",
    posterUrl: getMoviePoster("sinners"),
  },
  {
    id: "the-lord-of-the-rings-the-fellowship-of-the-ring",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    themeColor: "#755f33",
    posterUrl: getMoviePoster(
      "the-lord-of-the-rings-the-fellowship-of-the-ring"
    ),
  },
  {
    id: "the-lord-of-the-rings-the-two-towers",
    title: "The Lord of the Rings: The Two Towers",
    themeColor: "#794b1c",
    posterUrl: getMoviePoster("the-lord-of-the-rings-the-two-towers"),
  },
  {
    id: "the-lord-of-the-rings-the-return-of-the-king",
    title: "The Lord of the Rings: The Return of the King",
    themeColor: "#b2956b",
    posterUrl: getMoviePoster("the-lord-of-the-rings-the-return-of-the-king"),
  },
  {
    id: "47-ronin",
    title: "47 Ronin",
    themeColor: "#7a4d30",
    posterUrl: getMoviePoster("47-ronin"),
  },
  {
    id: "dune",
    title: "Dune",
    themeColor: "#67968d",
    posterUrl: getMoviePoster("dune"),
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    themeColor: "#47220b",
    posterUrl: getMoviePoster("dune-part-two"),
  },
  {
    id: "harry-potter-and-the-philosophers-stone",
    title: "Harry Potter and the Philosopher's Stone",
    themeColor: "#205e90",
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
