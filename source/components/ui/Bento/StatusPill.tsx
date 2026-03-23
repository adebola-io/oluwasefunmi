import classes from "./StatusPill.module.css";

interface StatusPillProps {
  text: string;
  type?: "default" | "success";
}

export function StatusPill(props: StatusPillProps) {
  const { text, type = "default" } = props;
  const isSuccess = type === "success";

  return (
    <div class={[classes.pill, { [classes.success]: isSuccess }]}>
      <span class={classes.dot} />
      <span class={classes.text}>{text}</span>
    </div>
  );
}
