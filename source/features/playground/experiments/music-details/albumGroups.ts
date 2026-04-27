import { albumCollections } from "../../data/music-project";

export const albumGroups = [
  {
    id: "hip-hop-rap",
    title: "Hip-Hop / Rap",
    color: "color-mix(in srgb, var(--color-blue-500) 90%, black)",
    albums: albumCollections["Hip-Hop / Rap"],
  },
  {
    id: "r-and-b-soul",
    title: "R&B / Soul",
    color: "color-mix(in srgb, var(--color-purple-500) 90%, black)",
    albums: albumCollections["R&B / Soul"],
  },
  {
    id: "pop",
    title: "Pop",
    color: "color-mix(in srgb, var(--color-red-500) 90%, black)",
    albums: albumCollections["Pop"],
  },
  {
    id: "electronic-dance",
    title: "Electronic / Dance",
    color: "color-mix(in srgb, var(--color-green-500) 90%, black)",
    albums: albumCollections["Electronic / Dance"],
  },
];
