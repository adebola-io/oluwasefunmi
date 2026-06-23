import { If } from "retend";
import type { SimpleListHeaderProps } from "./simpleListTypes";
import classes from "./SimpleListPage.module.css";

export function SimpleListHeader(props: SimpleListHeaderProps) {
  const {
    title,
    children,
    avatar,
    avatarAlt = title,
    titleId = "page-title",
  } = props;

  return (
    <header class={classes.header}>
      {If(avatar, {
        true: (src) => (
          <div class={classes.headingRow}>
            <span class={classes.avatarWrapper}>
              <img
                src={src}
                alt={avatarAlt}
                title={avatarAlt}
                class={classes.avatar}
              />
            </span>
            <h1 id={titleId} class={classes.title} title={title}>
              {title}
            </h1>
          </div>
        ),
        false: () => (
          <h1 id={titleId} class={classes.title} title={title}>
            {title}
          </h1>
        ),
      })}
      <div class={classes.subtitle}>{children}</div>
    </header>
  );
}
