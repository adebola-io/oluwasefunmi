export const timeline = [
  "0ms",
  "calc(var(--duration)*0.25)",
  "calc(var(--duration)*0.5)",
];

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  class?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 6,
    name: "cells",
    description:
      "Lightweight library for managing reactive state with source cells, derived values, effects, and source-flattening.",
    link: "https://github.com/adebola-io/cells",
    class: "col-span-12 md:col-span-7",
    tags: ["reactivity", "state management", "npm", "library"],
  },
  {
    id: 0,
    name: "vizitly",
    description: "Complete suite for a modern visitor management system.",
    link: "https://www.vizitly.io",
    class: "col-span-12 md:col-span-7",
    tags: ["nuxt", "vue", "scss", "pwa", "typescript", "bootstrap", "web"],
  },
  {
    id: 1,
    name: "enjoy your day",
    description: "Fast progressive web app for tracking daily goals.",
    link: "https://enjoy-your-day.pages.dev",
    class: "col-span-12 md:col-span-5",
    tags: ["pwa", "typescript", "css modules", "dexie", "localfirst", "web"],
  },
  {
    id: 2,
    name: "retend",
    description: "React-inspired JSX framework for fast and fluid web apps.",
    link: "https://www.npmjs.com/package/retend",
    class: "col-span-12 md:col-span-5 md:row-span-2",
    tags: ["jsx", "vite", "frameworks", "dsa", "dev tools", "web"],
  },
  {
    id: 3,
    name: "whirlwind",
    description:
      "Compiler, checker and IDE extension for a statically-typed, general-purpose, compiled-to-WASM programming language.",
    link: "https://github.com/adebola-io/whirlwind",
    class: "col-span-12 md:col-span-7",
    tags: ["compilers", "type checkers", "rust", "tokio", "dsa", "dev-tools"],
  },
  {
    id: 4,
    name: "quizwiz",
    description:
      "Quiz game to test and improve knowledge across a variety of subjects.",
    link: "https://quizwiz-game.vercel.app",
    class: "col-span-12 md:col-span-7",
    tags: ["react", "typescript", "tailwindcss", "mongodb", "node.js", "web"],
  },
  {
    id: 5,
    name: "siphon",
    description:
      "Crude, non-compliant bundler and minifier for HTML, CSS and JS projects.",
    link: "https://www.npmjs.com/package/siphon-cli",
    class: "col-span-12 md:col-span-5",
    tags: ["node.js", "compilers", "jsx", "dev tools"],
  },
];
