import { Link } from "retend/router";
import classes from "./Explorations.module.css";

const explorations = [
  {
    path: "/explorations/curved-css-solid",
    title: "Curved CSS Solid",
    description:
      "Interactive 3D box with curved edges using pure CSS transforms",
  },
  {
    path: "/explorations/ripple-effect",
    title: "Ripple Effect",
    description:
      "Grid of cells with cascading wave animations and color transitions on click",
  },
  {
    path: "/explorations/blur-carousel",
    title: "Blur Carousel",
    description: "Horizontal avatar carousel with focus-based blur effects",
  },
];

const Explorations = () => {
  return (
    <div class={classes.page}>
      <header class={classes.header}>
        <div class={classes.headerContent}>
          <h1 class={classes.title}>Explorations</h1>
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
