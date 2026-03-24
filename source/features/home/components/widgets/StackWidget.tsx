import { For } from "retend";
import classes from "./StackWidget.module.css";

interface StackWidgetProps {
  techs: string[];
}

export function StackWidget(props: StackWidgetProps) {
  const { techs } = props;

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Tech Stack</span>
      </div>

      <div class={classes.content}>
        <h2 class={classes.title}>Preferred Technologies</h2>
        <div class={classes.tags}>
          {For(techs, (tech: string) => (
            <span class={classes.tag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
