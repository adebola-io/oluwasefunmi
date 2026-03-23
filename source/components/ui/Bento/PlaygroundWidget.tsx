import { Cell, For } from "retend";
import classes from "./PlaygroundWidget.module.css";
import { type PlaygroundItem } from "@/data/playground";

interface PlaygroundWidgetProps {
  projects: PlaygroundItem[];
}

export function PlaygroundWidget(props: PlaygroundWidgetProps) {
  const { projects } = props;
  const projectsCell = Cell.source(projects);

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Playground</span>
      </div>

      <div class={classes.list}>
        {For(projectsCell, (project: PlaygroundItem) => (
          <a
            href={project.path}
            class={classes.projectLink}
          >
            <span class={classes.name}>{project.title}</span>
            <span class={classes.arrow}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
