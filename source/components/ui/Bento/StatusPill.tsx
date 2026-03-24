import classes from "./StatusPill.module.css";

interface StatusPillProps {
  text: string;
}

export function StatusPill(props: StatusPillProps) {
  const { text } = props;

  return (
    <div class={classes.pill}>
      <span class={classes.dot} />
      <span class={classes.text}>{text}</span>
    </div>
  );
}
