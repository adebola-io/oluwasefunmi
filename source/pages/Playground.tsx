import { For } from "retend";
import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import classes from "./Playground.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { playgroundItems } from "@/data/playground.tsx";
import { StarShower } from "@/components/ui/StarShower";

const Playground: RouteComponent = () => {
  const handlePointerMove = (e: PointerEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div class={classes.page}>
      <StarShower />
      <header class={classes.header}>
        <PageTitle name="Playground." />
        <p class={classes.subtitle}>
          Interactive UI experiments & visual effects
        </p>
      </header>

      <main class={classes.grid}>
        {For(playgroundItems, (exp) => (
          <Link
            href={exp.path}
            class={classes.card}
            draggable={false}
            onPointerMove={handlePointerMove}
          >
            <div class={classes.cardInner}>
              <div class={classes.cardHeader}>
                <div class={classes.titleGroup}>
                  <div class={classes.iconWrapper}>
                    <exp.icon />
                  </div>
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
              <p class={classes.cardDescription}>
                <exp.description />
              </p>
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

Playground.metadata = () => ({
  title: "Playground | Oluwasefunmi Akomolafe",
  description:
    "Interactive UI experiments and visual effects showcasing creative web development.",
  ogTitle: "Playground | Oluwasefunmi Akomolafe",
  ogDescription: "Interactive UI experiments and visual effects.",
  twitterTitle: "Playground | Oluwasefunmi Akomolafe",
  twitterDescription: "Interactive UI experiments and visual effects.",
});

export default Playground;
