const imageModules = import.meta.glob<{ default: string }>(
  "/source/data/images/music/*.webp",
  { eager: true }
);

export interface Song {
  title: string;
  artist: string;
  durationMs: number;
  image: string;
}

export const songs: Song[] = [
  {
    title: "Psycho (feat. Ty Dolla $ign)",
    artist: "Post Malone",
    durationMs: 221446,
    image: imageModules["/source/data/images/music/01.webp"].default,
  },
  {
    title: "Orchestra",
    artist: "Labrinth",
    durationMs: 174672,
    image: imageModules["/source/data/images/music/02.webp"].default,
  },
  {
    title: "Green Light",
    artist: "Lorde",
    durationMs: 234653,
    image: imageModules["/source/data/images/music/03.webp"].default,
  },
  {
    title: "Open Arms",
    artist: "Jorge Rivera-Herrans & Steven Dookie",
    durationMs: 198695,
    image: imageModules["/source/data/images/music/04.webp"].default,
  },
  {
    title: "Photograph",
    artist: "J. Cole",
    durationMs: 217841,
    image: imageModules["/source/data/images/music/05.webp"].default,
  },
  {
    title: "All Night",
    artist: "Beyonce",
    durationMs: 322000,
    image: imageModules["/source/data/images/music/06.webp"].default,
  },
  {
    title: "Yellow (feat. Nelly)",
    artist: "Amine",
    durationMs: 180011,
    image: imageModules["/source/data/images/music/07.webp"].default,
  },
  {
    title: "BOILED PEANUTS",
    artist: "Doechii",
    durationMs: 121858,
    image: imageModules["/source/data/images/music/08.webp"].default,
  },
  {
    title: "Non-Stop",
    artist:
      "Leslie Odom Jr., Lin-Manuel Miranda, Renee Elise Goldsberry & Phillipa Soo",
    durationMs: 385438,
    image: imageModules["/source/data/images/music/09.webp"].default,
  },
  {
    title: "United In Grief",
    artist: "Kendrick Lamar",
    durationMs: 255378,
    image: imageModules["/source/data/images/music/10.webp"].default,
  },
  {
    title: "the last great american dynasty",
    artist: "Taylor Swift",
    durationMs: 230999,
    image: imageModules["/source/data/images/music/11.webp"].default,
  },
  {
    title: "I Like Me Better",
    artist: "Lauv",
    durationMs: 197437,
    image: imageModules["/source/data/images/music/12.webp"].default,
  },
  {
    title: "Halley's Comet",
    artist: "Billie Eilish",
    durationMs: 234761,
    image: imageModules["/source/data/images/music/13.webp"].default,
  },
  {
    title: "reckless driving (feat. Ben Kessler)",
    artist: "Lizzy McAlpine",
    durationMs: 189247,
    image: imageModules["/source/data/images/music/14.webp"].default,
  },
];
