import { For } from "retend";
import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import { LayeredCard } from "../components/LayeredCard";
import classes from "./Works.module.css";
import { CurrentPageTitle } from "@/components/CurrentPageTitle";
import { StarShower } from "@/components/StarShower";
import { projects } from "@/data/projects";
import { ArrowIcon } from "@/components/icons/arrow";

const Works: RouteComponent = () => {
  return (
    <div class={classes.works}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <CurrentPageTitle />
        </div>

        <p class={classes.intro}>
          Here's a curated collection of my works, highlighting my past
          achievements and current projects.
        </p>

        <ul class={classes.grid}>
          {For(projects, (project, i) => (
            <li
              key={project.id}
              class={[classes.item, project.class]}
              style={{ animationDelay: `${i.get() * 100}ms` }}
            >
              <LayeredCard
                as={Link}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                class={classes.projectCard}
              >
                <div>
                  <h2 class={classes.projectTitle}>
                    {project.name}.
                    <ArrowIcon class={classes.arrowIcon} />
                  </h2>
                  <p class={classes.projectDescription}>
                    {project.description}
                  </p>
                </div>
                <div class={classes.tags}>
                  {For(project.tags, (tag) => (
                    <span class={classes.tag}>{tag}</span>
                  ))}
                </div>
              </LayeredCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Works.metadata = () => ({
  title: "My Works | Oluwasefunmi",
  description:
    "A curated collection of my works, highlighting my past achievements and current projects.",
  ogTitle: "My Works | Oluwasefunmi",
  ogDescription:
    "A curated collection of my works, highlighting my past achievements and current projects.",
  twitterTitle: "My Works | Oluwasefunmi",
  twitterDescription:
    "A curated collection of my works, highlighting my past achievements and current projects.",
});

export default Works;
