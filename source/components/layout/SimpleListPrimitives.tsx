import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleListPage.module.css";

interface SimpleListPageLayoutProps extends JSX.BaseContainerProps {
  titleId?: string;
}

interface SimpleListBackLinkProps {
  href: string;
  label?: string;
}

export function SimpleListPageLayout(props: SimpleListPageLayoutProps) {
  const { titleId = "page-title", children } = props;

  return (
    <section class={classes.page} aria-labelledby={titleId}>
      {children}
    </section>
  );
}

export function SimpleListBackLink(props: SimpleListBackLinkProps) {
  const { href, label = "back" } = props;

  return (
    <Link href={href} class={classes.backLink} title={label} data-pill-link>
      ← {label}
    </Link>
  );
}
