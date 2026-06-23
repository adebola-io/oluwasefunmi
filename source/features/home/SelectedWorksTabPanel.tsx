import { For } from "retend";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import uiClasses from "@/components/ui/ui.module.css";
import { projects } from "@/features/works/data/projects";
import classes from "./HomePage.module.css";

const experiences = [
  { company: "Summitech", role: "Full Stack Developer", year: "Now" },
  { company: "Lighthaus Eko", role: "Full Stack Developer", year: "2024" },
  { company: "TechMadeEazy", role: "Developer", year: "2023" },
  { company: "Panoramic Synergy", role: "Intern", year: "2022" },
];

const ExperienceSection = () => {
  return (
    <section class={classes.experience} aria-labelledby="experience-heading">
      <div class={uiClasses.sectionHeading} id="experience-heading">
        <h2 class={uiClasses.sectionHeadingContent}>Experience</h2>
      </div>
      <ul class={uiClasses.twoColumnList}>
        {For(experiences, (item) => (
          <li class={uiClasses.twoColumnItem}>
            <span class={uiClasses.textStack}>
              <span>{item.company}</span>
              <span class={uiClasses.subtleText}>{item.role}</span>
            </span>
            <span class={uiClasses.subtleText}>{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const SelectedWorksTabPanel = () => {
  return (
    <div class={classes.tabPanel}>
      <ExperienceSection />
      <section class={classes.worksSection} aria-labelledby="works-tab-heading">
        <div class={uiClasses.sectionHeading} id="works-tab-heading">
          <h2 class={uiClasses.sectionHeadingContent}>Selected Works</h2>
        </div>
        <ul class={listClasses.list}>
          {For(projects, (project) => (
            <li class={listClasses.item}>
              <a
                class={listClasses.itemContent}
                href={project.link}
                title={project.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 class={listClasses.itemTitle} title={project.name}>
                  {project.name}
                </h3>
                <div class={listClasses.itemSubtitle}>
                  {project.description}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
