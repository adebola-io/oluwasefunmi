import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import classes from "./PlaygroundLayout.module.css";

interface PlaygroundLayoutProps {
  title: string;
  hint?: string;
  children: JSX.Template;
}

const BackArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      d="M19 12H5M12 19l-7-7 7-7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export function PlaygroundLayout(props: PlaygroundLayoutProps) {
  const { title, hint, children } = props;

  return (
    <>
      <header class={classes.header}>
        <Link href="/playground" class={classes.backLink}>
          <BackArrow />
          <span>back to playground</span>
        </Link>
        <h1 class={classes.title}>{title}</h1>
      </header>
      {children}
      {hint && <div class={classes.hint}>{hint}</div>}
    </>
  );
}
