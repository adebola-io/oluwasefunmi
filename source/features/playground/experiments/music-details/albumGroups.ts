import { albumDecades } from "../../data/music-project";

export const albumGroups = [
  {
    id: "2000s",
    title: "2000s",
    color: "color-mix(in srgb, var(--color-blue-500) 90%, black)",
    albums: albumDecades["2000s"],
  },
  {
    id: "2010s",
    title: "2010s",
    color: "color-mix(in srgb, var(--color-red-500) 90%, black)",
    albums: albumDecades["2010s"],
  },
  {
    id: "2020s",
    title: "2020s",
    color: "color-mix(in srgb, var(--color-green-500) 90%, black)",
    albums: albumDecades["2020s"],
  },
];
