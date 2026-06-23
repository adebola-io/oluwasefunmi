import type { JSX } from "retend/jsx-runtime";
import classes from "./ui.module.css";

interface SectionHeadingProps extends JSX.BaseContainerProps {
  Link?: () => JSX.Template;
}

export function SectionHeading(props: SectionHeadingProps) {
  const { children, Link = () => null, class: className, ...rest } = props;

  return (
    <div {...rest} class={[classes.sectionHeading, className]}>
      <h2 class={classes.sectionHeadingContent}>{children}</h2>
      <div class={classes.sectionHeadingLink}>
        <Link />
      </div>
    </div>
  );
}
