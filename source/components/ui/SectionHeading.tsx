import type { JSX } from "retend/jsx-runtime";
import classes from "./SectionHeading.module.css";

interface SectionHeadingProps extends JSX.BaseContainerProps {
  Link?: () => JSX.Template;
}

export function SectionHeading(props: SectionHeadingProps) {
  const { children, Link = () => null, class: className, ...rest } = props;

  return (
    <div {...rest} class={[classes.heading, className]}>
      <h2 class={classes.content}>{children}</h2>
      <div class={classes.link}>
        <Link />
      </div>
    </div>
  );
}
