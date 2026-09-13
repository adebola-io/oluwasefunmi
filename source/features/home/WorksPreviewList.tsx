import { For } from "retend";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { projects } from "@/features/works/data/projects";

export const WorksPreviewList = () => {
  return (
    <ul class={listClasses.list}>
      {For(projects.slice(0, 3), (project) => (
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
            <div class={listClasses.itemSubtitle}>{project.description}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};
