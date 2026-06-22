import { Cell, For } from "retend";
import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleListPage.module.css";

export interface SimpleListItem {
  title: string;
  subtitle: string;
  href?: string;
  external?: boolean;
  actionLabel?: string;
  icon?: () => JSX.Element;
}

interface SimpleListPageProps {
  title: string;
  subtitle: string;
  items: SimpleListItem[] | Cell<SimpleListItem[]>;
  avatar?: string;
  avatarAlt?: string;
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
  const title = <h2 class={classes.itemTitle}>{item.title}</h2>;
  const subtitle = <p class={classes.itemSubtitle}>{item.subtitle}</p>;

  if (!item.href || item.actionLabel) {
    const actionLabel = item.actionLabel;
    const action =
      item.href && actionLabel ? (
        <Link class={classes.actionLink} href={item.href}>
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
      <Link class={classes.itemContent} href={item.href}>
        {title}
        {subtitle}
      </Link>
    </li>
  );
}

export function SimpleListPage(props: SimpleListPageProps) {
  const { title, subtitle, items, avatar, avatarAlt } = props;
  const heading = avatar ? (
    <div class={classes.headingRow}>
      <span class={classes.avatarWrapper}>
        <img src={avatar} alt={avatarAlt ?? ""} class={classes.avatar} />
      </span>
      <h1 id="page-title" class={classes.title}>
        {title}
      </h1>
    </div>
  ) : (
    <h1 id="page-title" class={classes.title}>
      {title}
    </h1>
  );

  return (
    <section class={classes.page} aria-labelledby="page-title">
      <header class={classes.header}>
        {heading}
        <p class={classes.subtitle}>{subtitle}</p>
      </header>

      <ul class={classes.list}>
        {For(items, (item) => (
          <SimpleListRow item={item} />
        ))}
      </ul>
    </section>
  );
}
