import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import classes from "./PlaygroundLayout.module.css";

interface PlaygroundLayoutProps {
  title: string;
  hint?: string;
  children: JSX.Template;
}

export function PlaygroundLayout(props: PlaygroundLayoutProps) {
  const { title, hint, children } = props;

  return (
    <>
      <header class={classes.header}>
        <Link href="/playground" class={classes.backLink}>
          <ArrowLeftIcon />
          <span>back to playground</span>
        </Link>
        <h1 class={classes.title}>{title}</h1>
      </header>
      {children}
      {hint && <div class={classes.hint}>{hint}</div>}
    </>
  );
}
