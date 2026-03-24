import { For } from "retend";
import classes from "./PlaygroundWidget.module.css";
import type { PlaygroundItem } from "@/features/playground/types";

interface PlaygroundWidgetProps {
  projects: PlaygroundItem[];
}

export function PlaygroundWidget(props: PlaygroundWidgetProps) {
  const { projects } = props;

  return (
    <div class={classes.widget}>
      <div class={classes.header}>Playground</div>

      <div class={classes.list}>
        {For(projects, (project) => (
          <a href={project.path} class={classes.projectLink}>
            <span>{project.title}</span>
            <span class={classes.arrow}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
