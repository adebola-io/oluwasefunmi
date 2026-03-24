import { For } from "retend";
import { Link } from "retend/router";
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
          <Link href={project.path} class={classes.projectLink}>
            <span>{project.title}</span>
            <span class={classes.arrow}>↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
