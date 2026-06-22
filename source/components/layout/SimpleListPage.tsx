import { Cell, For } from "retend";
import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleListPage.module.css";

export interface SimpleListItem {
  title: string;
  subtitle: string | JSX.Element;
  href?: string;
  external?: boolean;
  actionLabel?: string;
  icon?: () => JSX.Element;
}

interface SimpleListPageProps {
  title: string;
  subtitle: string | JSX.Element;
  items: SimpleListItem[] | Cell<SimpleListItem[]>;
  avatar?: string;
  avatarAlt?: string;
  backHref?: string;
  backLabel?: string;
}

interface SimpleListRowProps {
  item: SimpleListItem;
}

function SimpleListRow(props: SimpleListRowProps) {
  const { item } = props;
  const Icon = item.icon;
  const itemClass = Icon ? [classes.item, classes.hasIcon] : classes.item;
  const itemIcon = Icon ? (
    <span class={classes.itemIcon}>
      <Icon />
    </span>
  ) : null;
  const subtitleTitle =
    typeof item.subtitle === "string" ? item.subtitle : undefined;
  const title = (
    <h2 class={classes.itemTitle} title={item.title}>
      {item.title}
    </h2>
  );
  const subtitle = (
    <p class={classes.itemSubtitle} title={subtitleTitle}>
      {item.subtitle}
    </p>
  );

  if (!item.href || item.actionLabel) {
    const actionLabel = item.actionLabel;
    const action =
      item.href && actionLabel ? (
        <Link class={classes.actionLink} href={item.href} title={actionLabel}>
          {actionLabel}
        </Link>
      ) : null;

    return (
      <li class={itemClass}>
        {itemIcon}
        <div class={classes.itemContent}>
          {title}
          {subtitle}
          {action}
        </div>
      </li>
    );
  }

  if (item.external) {
    return (
      <li class={itemClass}>
        {itemIcon}
        <a
          class={classes.itemContent}
          href={item.href}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          {subtitle}
        </a>
      </li>
    );
  }

  return (
    <li class={itemClass}>
      {itemIcon}
      <Link class={classes.itemContent} href={item.href} title={item.title}>
        {title}
        {subtitle}
      </Link>
    </li>
  );
}

export function SimpleListPage(props: SimpleListPageProps) {
  const { title, subtitle, items, avatar, avatarAlt, backHref, backLabel } =
    props;
  const avatarDescription = avatarAlt ?? title;
  const heading = avatar ? (
    <div class={classes.headingRow}>
      <span class={classes.avatarWrapper}>
        <img
          src={avatar}
          alt={avatarDescription}
          title={avatarDescription}
          class={classes.avatar}
        />
      </span>
      <h1 id="page-title" class={classes.title} title={title}>
        {title}
      </h1>
    </div>
  ) : (
    <h1 id="page-title" class={classes.title} title={title}>
      {title}
    </h1>
  );

  const backLink = backHref ? (
    <Link
      href={backHref}
      class={classes.backLink}
      title={backLabel ?? "back"}
      data-pill-link
    >
      ← {backLabel ?? "back"}
    </Link>
  ) : null;

  const pageSubtitleTitle = typeof subtitle === "string" ? subtitle : undefined;

  return (
    <section class={classes.page} aria-labelledby="page-title">
      {backLink}
      <header class={classes.header}>
        {heading}
        <p class={classes.subtitle} title={pageSubtitleTitle}>
          {subtitle}
        </p>
      </header>

      <ul class={classes.list}>
        {For(items, (item) => {
          return <SimpleListRow item={item} />;
        })}
      </ul>
    </section>
  );
}
