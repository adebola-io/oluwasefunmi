import { For } from "retend";
import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { LayeredCard } from "@/components/ui/LayeredCard";
import classes from "./PortfolioHome.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import { getNotesIndex } from "./RandomNotes";
import { projects } from "@/data/projects";
import { playgroundItems } from "@/data/playground";
import type { NotePreviewProps } from "@/types";

interface HomeData {
  notes: NotePreviewProps[];
}

const PortfolioHome: RouteComponent<PageMeta<HomeData>> = ({ metadata }) => {
  const notes = metadata.get("misc")?.notes || [];
  const recentProjects = projects.slice(0, 4);
  const recentExperiments = [...playgroundItems].reverse().slice(0, 4);
  const recentNotes = notes.slice(0, 3);

  return (
    <div class={classes.home}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <PageTitle name="Oluwasefunmi." />
          <span class={classes.titleAccent}>web engineer.</span>
        </div>

        <p class={classes.intro}>
          I am a full-stack software engineer focused on creating interactive
          digital experiences and tackling complex design challenges.
        </p>

        <div class={classes.section}>
          <div class={classes.sectionHeader}>
            <h2 class={classes.sectionTitle}>Experiments</h2>
            <Link href="/playground" class={classes.viewAll}>
              View all
            </Link>
          </div>
          <div class={classes.grid}>
            {For(recentExperiments, (exp) => (
              <Link href={exp.path} class={classes.experimentCard}>
                <div class={classes.experimentIcon}>
                  <exp.icon />
                </div>
                <div class={classes.experimentContent}>
                  <h3 class={classes.experimentTitle}>{exp.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div class={classes.section}>
          <div class={classes.sectionHeader}>
            <h2 class={classes.sectionTitle}>Selected Works</h2>
            <Link href="/works" class={classes.viewAll}>
              View all
            </Link>
          </div>
          <div class={classes.grid}>
            {For(recentProjects, (project) => (
              <LayeredCard
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class={classes.projectCard}
              >
                <h3 class={classes.cardTitle}>{project.name}</h3>
                <p class={classes.cardDescription}>{project.description}</p>
                <div class={classes.tags}>
                  {For(project.tags.slice(0, 3), (tag) => (
                    <span class={classes.tag}>#{tag}</span>
                  ))}
                </div>
              </LayeredCard>
            ))}
          </div>
        </div>

        {recentNotes.length > 0 && (
          <div class={classes.section}>
            <div class={classes.sectionHeader}>
              <h2 class={classes.sectionTitle}>Recent Notes</h2>
              <Link href="/random-notes" class={classes.viewAll}>
                View all
              </Link>
            </div>
            <div class={classes.notesList}>
              {For(recentNotes, (note) => (
                <Link
                  href={`/random-notes/${note.id}`}
                  class={classes.noteItem}
                >
                  <span class={classes.noteDate}>{note.dateStr}</span>
                  <h3 class={classes.noteTitle}>{note.title}</h3>
                  <span class={classes.noteArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div class={classes.actions}>
          <LayeredCard
            as={Link}
            href="mailto:contact@adebola.io"
            class={classes.primaryButton}
          >
            <span>get in touch</span>
          </LayeredCard>
        </div>
      </div>
    </div>
  );
};

PortfolioHome.metadata = async () => {
  const notes = await getNotesIndex();
  return {
    title: "Oluwasefunmi | Software Engineer",
    description:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogTitle: "Oluwasefunmi | Software Engineer",
    ogDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogImage: `${SITE_URL}/og/home.png`,
    twitterTitle: "Oluwasefunmi | Software Engineer",
    twitterDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    twitterImage: `${SITE_URL}/og/home.png`,
    misc: { notes },
  };
};

export default PortfolioHome;
