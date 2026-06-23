import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleListPage.module.css";

interface SimpleListTitleProps {
  title: JSX.Template;
}

interface SimpleListSubtitleProps {
  children: JSX.Template;
}

export function SimpleListTitle(props: SimpleListTitleProps) {
  const { title } = props;
  const titleText = typeof title === "string" ? title : undefined;

  return (
    <h2 class={classes.itemTitle} title={titleText}>
      {title}
    </h2>
  );
}

export function SimpleListSubtitle(props: SimpleListSubtitleProps) {
  const { children } = props;

  return <div class={classes.itemSubtitle}>{children}</div>;
}
