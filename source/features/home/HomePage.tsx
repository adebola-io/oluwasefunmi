import { Cell, If } from "retend";
import { type RouteComponent, useRouteQuery } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { SimpleListPageLayout } from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { SITE_URL } from "@/shared/constants";
import { BookmarksTabPanel } from "./BookmarksTabPanel";
import { HomeSocialLinks } from "./HomeSocialLinks";
import { HomeTabs, type HomeTab } from "./HomeTabs";
import { PlaygroundTabPanel } from "./PlaygroundTabPanel";
import { SelectedWorksTabPanel } from "./SelectedWorksTabPanel";

const PortfolioHome: RouteComponent<PageMeta> = () => {
  const query = useRouteQuery();
  const tab = query.get("tab");
  const activeTab = Cell.derived<HomeTab>(() => {
    const value = tab.get();
    if (value === "playground" || value === "works" || value === "bookmarks") {
      return value;
    }

    return "home";
  });
  const isPlaygroundTab = Cell.derived(() => activeTab.get() === "playground");
  const isWorksTab = Cell.derived(() => activeTab.get() === "works");
  const isBookmarksTab = Cell.derived(() => activeTab.get() === "bookmarks");

  return (
    <SimpleListPageLayout>
      <header class={listClasses.header}>
        <div class={listClasses.headingRow}>
          <span class={listClasses.avatarWrapper}>
            <img
              src="https://github.com/adebola-io.png"
              alt="oluwasefunmi."
              title="oluwasefunmi."
              class={listClasses.avatar}
            />
          </span>
          <h1 id="page-title" class={listClasses.title} title="oluwasefunmi.">
            oluwasefunmi.
          </h1>
        </div>
        <div class={listClasses.subtitle}>
          <p>
            Hello, this is Sefunmi. I am a software engineer focused on clear
            systems, expressive interfaces, and useful web products.
          </p>
          <p>
            I work mostly around frontend architecture, motion, local tools, and
            interaction-heavy experiments.
          </p>
          <p>
            You can read my <a href="oluwasefunmi-akomolafe.pdf">resume</a>, or
            send me an <a href="mailto:adebolaakomolafe@gmail.com">email</a>.
          </p>
        </div>
      </header>
      <HomeSocialLinks />
      <HomeTabs activeTab={activeTab} />
      {If(isPlaygroundTab, () => (
        <PlaygroundTabPanel />
      ))}
      {If(isWorksTab, () => (
        <SelectedWorksTabPanel />
      ))}
      {If(isBookmarksTab, () => (
        <BookmarksTabPanel />
      ))}
    </SimpleListPageLayout>
  );
};
PortfolioHome.metadata = async () => {
  return {
    title: "Oluwasefunmi | Software Engineer",
    description:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogTitle: "Oluwasefunmi | Software Engineer",
    ogDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    ogImage: `${SITE_URL}/og/home.png`,
    twitterTitle: "Oluwasefunmi | Software Engineer",
    twitterDescription:
      "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
    twitterImage: `${SITE_URL}/og/home.png`,
  };
};

export default PortfolioHome;
