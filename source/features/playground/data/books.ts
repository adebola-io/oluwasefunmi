import type { ImageModule } from "@/shared/types";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/books/*.webp",
  { eager: true }
);

function getBookImageUrl(imageId: string) {
  return imageModules[
    `/source/features/playground/data/images/books/${imageId}.webp`
  ].default;
}

interface BookSource {
  title: string;
  author: string;
  frontCoverImageId: string;
  spineImageId: string;
  blurb: string;
  authorInfo: string;
  foregroundColor: string;
  backgroundColor: string;
  gradient?: string;
  aspectRatio: AspectRatio;
}

interface AspectRatio {
  frontCover: number;
  spine: number;
}

export interface Book extends BookSource {
  frontCover: string;
  spine: string;
}

const bookSources: BookSource[] = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontCoverImageId: "project-hail-mary-front",
    spineImageId: "project-hail-mary-spine",
    blurb:
      "A lone astronaut wakes with no memory and must solve an impossible scientific mystery to save Earth.",
    authorInfo:
      "Andy Weir writes fast, puzzle-driven science fiction grounded in engineering, humor, and problem solving.",
    foregroundColor: "#F0F0F0",
    backgroundColor: "#000000",
    aspectRatio: { frontCover: 0.6636, spine: 0.1944 },
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    frontCoverImageId: "the-fault-in-our-stars-front",
    spineImageId: "the-fault-in-our-stars-spine",
    blurb:
      "Two sharp, funny teenagers meet through illness and fall into a story about love, fear, and the wish to matter.",
    authorInfo:
      "John Green is a novelist and essayist whose young adult fiction is known for wit, tenderness, and big questions.",
    foregroundColor: "#101000",
    backgroundColor: "#50B0D0",
    aspectRatio: { frontCover: 0.6682, spine: 0.1586 },
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    frontCoverImageId: "the-fellowship-of-the-ring-front",
    spineImageId: "the-fellowship-of-the-ring-spine",
    blurb:
      "A quiet hobbit inherits a dangerous ring and begins a journey that will decide the fate of Middle-earth.",
    authorInfo:
      "J.R.R. Tolkien was a philologist and fantasy author whose world-building helped define modern epic fantasy.",
    foregroundColor: "#FFE020",
    backgroundColor: "#101010",
    aspectRatio: { frontCover: 0.6453, spine: 0.2222 },
  },
  {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    frontCoverImageId: "the-fifth-season-front",
    spineImageId: "the-fifth-season-spine",
    blurb:
      "In a broken world of recurring catastrophe, a mother searches for her daughter as buried powers rise around her.",
    authorInfo:
      "N.K. Jemisin is an award-winning speculative fiction writer known for ambitious worlds and incisive social imagination.",
    foregroundColor: "#B0A040",
    backgroundColor: "#202020",
    aspectRatio: { frontCover: 0.6432, spine: 0.1517 },
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    frontCoverImageId: "the-three-body-problem-front",
    spineImageId: "the-three-body-problem-spine",
    blurb:
      "A secret first contact with an alien civilization pulls physics, politics, and survival into a vast cosmic crisis.",
    authorInfo:
      "Cixin Liu is a Chinese science fiction author best known for large-scale, idea-rich stories about civilization and space.",
    foregroundColor: "#FFFFFF",
    backgroundColor: "#306090",
    aspectRatio: { frontCover: 0.6627, spine: 0.191 },
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontCoverImageId: "guns-germs-and-steel-front",
    spineImageId: "guns-germs-and-steel-spine",
    blurb:
      "A sweeping argument about how geography, crops, disease, and technology shaped the unequal paths of human societies.",
    authorInfo:
      "Jared Diamond is a Pulitzer Prize-winning scientist and writer known for connecting history, biology, geography, and anthropology.",
    foregroundColor: "#606060",
    backgroundColor: "#FFFFFF",
    gradient:
      "linear-gradient(to bottom, #ee923f 62%, black 62% 81.2%, white 81.2%)",
    aspectRatio: { frontCover: 0.6619, spine: 0.1602 },
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    frontCoverImageId: "the-way-of-kings-front",
    spineImageId: "the-way-of-kings-spine",
    blurb:
      "Soldiers, scholars, and rulers struggle through war and storms as ancient powers return to a fractured world.",
    authorInfo:
      "Brandon Sanderson is a fantasy author known for intricate magic systems, expansive series, and tightly plotted epics.",
    foregroundColor: "#D0E0E0",
    backgroundColor: "#406090",
    aspectRatio: { frontCover: 0.6611, spine: 0.2355 },
  },
  {
    title: "They Both Die at the End",
    author: "Adam Silvera",
    frontCoverImageId: "they-both-die-at-the-end-front",
    spineImageId: "they-both-die-at-the-end-spine",
    blurb:
      "Two strangers receive the same final-day call and choose to spend their remaining hours living honestly together.",
    authorInfo:
      "Adam Silvera writes contemporary young adult fiction centered on love, grief, identity, and urgent emotional stakes.",
    foregroundColor: "#4060A0",
    backgroundColor: "#FFFFF0",
    aspectRatio: { frontCover: 0.6639, spine: 0.1662 },
  },
];

export const books: Book[] = bookSources.map((book) => ({
  ...book,
  frontCover: getBookImageUrl(book.frontCoverImageId),
  spine: getBookImageUrl(book.spineImageId),
}));
