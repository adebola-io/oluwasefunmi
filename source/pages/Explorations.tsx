import { Link } from "retend/router";
import classes from "./Explorations.module.css";

import type { JSX } from "retend/jsx-runtime";

interface ExplorationItem {
  path: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
}

const explorations: ExplorationItem[] = [
  {
    path: "/explorations/curved-css-solid",
    title: "Curved CSS Solid",
    description:
      "Pushing the limits of CSS transforms to create a volumetric 3D box without WebGL. It uses pure DOM elements to achieve smooth curves and full interactivity.",
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.27 6.96L12 12.01l8.73-5.05"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M12 22.08V12" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
  },
  {
    path: "/explorations/ripple-effect",
    title: "Ripple Effect",
    description:
      "An optimized grid interaction where clicks trigger cascading ripple effects across hundreds of cells. The focus here was on efficient state management to maintain a smooth 60fps.",
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    path: "/explorations/blur-carousel",
    title: "Blur Carousel",
    description:
      "A carousel exploring scroll-driven animations to mimic physical depth of field. Items dynamically blur and recede as they move out of focus, creating a more natural browsing experience.",
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <rect x="2" y="14" width="20" height="8" rx="2" stroke-opacity="0.5" />
        <rect x="4" y="8" width="16" height="8" rx="2" stroke-opacity="0.8" />
        <rect x="6" y="2" width="12" height="8" rx="2" />
      </svg>
    ),
  },
];

const Explorations = () => {
  return (
    <div class={classes.page}>
      <header class={classes.header}>
        <div class={classes.headerContent}>
          <h1 class={classes.title}>Explorations.</h1>
          <p class={classes.subtitle}>
            Interactive UI experiments & visual effects
          </p>
        </div>
      </header>

      <main class={classes.grid}>
        {explorations.map((exp) => (
          <Link
            href={exp.path}
            class={classes.card}
            onMouseMove={(e: MouseEvent) => {
              const target = e.currentTarget as HTMLElement;
              const rect = target.getBoundingClientRect();
              target.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              target.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            <div class={classes.cardInner}>
              <div class={classes.cardHeader}>
                <div class={classes.titleGroup}>
                  <div class={classes.iconWrapper}>{exp.icon()}</div>
                  <h2 class={classes.cardTitle}>{exp.title}</h2>
                </div>
                <div class={classes.arrowIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p class={classes.cardDescription}>{exp.description}</p>
            </div>
          </Link>
        ))}
      </main>

      <footer class={classes.footer}>
        <p>Built with Retend</p>
      </footer>
    </div>
  );
};

export default Explorations;
