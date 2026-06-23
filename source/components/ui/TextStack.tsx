import type { JSX } from "retend/jsx-runtime";
import classes from "./TextStack.module.css";

interface TextStackProps {
  children: JSX.Element;
}

interface SubtleTextProps {
  children: JSX.Element;
}

export function TextStack(props: TextStackProps) {
  const { children } = props;

  return <span class={classes.stack}>{children}</span>;
}

export function SubtleText(props: SubtleTextProps) {
  const { children } = props;

  return <span class={classes.subtle}>{children}</span>;
}
