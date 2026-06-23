import { Cell } from "retend";
import type { JSX } from "retend/jsx-runtime";

export interface SimpleListItem {
  title: JSX.Template;
  subtitle: JSX.Template;
  href?: string;
  external?: boolean;
  actionLabel?: string;
  icon?: () => JSX.Element;
}

export interface SimpleListPageLayoutProps extends JSX.BaseContainerProps {
  titleId?: string;
}

export interface SimpleListBackLinkProps {
  href: string;
  label?: string;
}

export interface SimpleListProps {
  items: SimpleListItem[] | Cell<SimpleListItem[]>;
}
