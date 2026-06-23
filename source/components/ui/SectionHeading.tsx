import type { JSX } from "retend/jsx-runtime";
import classes from "./SectionHeading.module.css";

interface SectionHeadingProps {
  id?: string;
  children: JSX.Element;
}

export function SectionHeading(props: SectionHeadingProps) {
  const { id, children } = props;

  return (
    <h2 class={classes.heading} id={id}>
      {children}
    </h2>
  );
}
