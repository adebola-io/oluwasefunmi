import { Cell, For } from "retend";
import { Link } from "retend/router";
import { FadeScrollView } from "@/components/ui/FadeScroll";
import classes from "./HomePage.module.css";

export type HomeTab = "home" | "playground" | "works" | "bookmarks";

interface HomeTabItem {
  id: HomeTab;
  title: string;
  path: string;
}

interface HomeTabLinkProps {
  item: HomeTabItem;
  activeTab: Cell<HomeTab>;
}

interface HomeTabsProps {
  activeTab: Cell<HomeTab>;
}

const homeTabs: HomeTabItem[] = [
  { id: "home", title: "Home", path: "/?tab=home" },
  { id: "playground", title: "Playground", path: "/?tab=playground" },
  { id: "works", title: "Selected Works", path: "/?tab=works" },
  { id: "bookmarks", title: "Bookmarks", path: "/?tab=bookmarks" },
];

const HomeTabLink = (props: HomeTabLinkProps) => {
  const { item, activeTab } = props;
  const isActive = Cell.derived(() => activeTab.get() === item.id);
  const ariaCurrent = Cell.derived(() => (isActive.get() ? "page" : undefined));

  const handleBeforeNavigate = function (this: HTMLAnchorElement) {
    this.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <li>
      <Link
        href={item.path}
        class={[classes.homeNavigationLink, { [classes.activeTab]: isActive }]}
        aria-current={ariaCurrent}
        onBeforeNavigate={handleBeforeNavigate}
      >
        {item.title}
      </Link>
    </li>
  );
};

export const HomeTabs = (props: HomeTabsProps) => {
  return (
    <nav class={classes.homeNavigation} aria-label="Portfolio sections">
      <FadeScrollView direction="horizontal">
        <ul class={classes.homeNavigationList}>
          {For(homeTabs, (item) => (
            <HomeTabLink item={item} activeTab={props.activeTab} />
          ))}
        </ul>
      </FadeScrollView>
    </nav>
  );
};
