import { Link } from "retend/router";
import classes from "./Explorations.module.css";

const explorations = [
  {
    path: "/explorations/curved-css-solid",
    title: "Curved CSS Solid",
    description:
      "Pushing the limits of CSS transforms to create a volumetric 3D box without WebGL. It uses pure DOM elements to achieve smooth curves and full interactivity.",
  },
  {
    path: "/explorations/ripple-effect",
    title: "Ripple Effect",
    description:
      "An optimized grid interaction where clicks trigger cascading ripple effects across hundreds of cells. The focus here was on efficient state management to maintain a smooth 60fps.",
  },
  {
    path: "/explorations/blur-carousel",
    title: "Blur Carousel",
    description:
      "A carousel exploring scroll-driven animations to mimic physical depth of field. Items dynamically blur and recede as they move out of focus, creating a more natural browsing experience.",
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
                <h2 class={classes.cardTitle}>{exp.title}</h2>
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
