import { For } from "retend";
import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import classes from "./Playground.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { playgroundItems } from "@/data/playground.tsx";
import { StarShower } from "@/components/ui/StarShower";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { SITE_URL } from "@/constants";

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
          <div class={classes.card} onPointerMove={handlePointerMove}>
            <div class={classes.cardInner}>
              <div class={classes.cardHeader}>
                <div class={classes.titleGroup}>
                  <div class={classes.iconWrapper}>
                    <exp.icon />
                  </div>
                  <h2 class={classes.cardTitle}>{exp.title}</h2>
                </div>
              </div>
              <p class={classes.cardDescription}>
                <exp.description />
              </p>
              <Link href={exp.path} class={classes.viewButton}>
                View
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
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
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Playground | Oluwasefunmi Akomolafe",
  twitterDescription: "Interactive UI experiments and visual effects.",
  twitterImage: `${SITE_URL}/og/playground.png`,
});

export default Playground;
