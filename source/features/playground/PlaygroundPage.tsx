import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { playgroundItems } from "@/features/playground/data/playground";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundHeading } from "./PlaygroundHeading";

const playgroundListItems = playgroundItems.map((item) => {
  const Description = item.description;

  return {
    title: item.title,
    subtitle: <Description />,
    href: item.path,
    actionLabel: "view",
    icon: item.icon,
  };
});
const Playground: RouteComponent = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Playground">
          <PlaygroundHeading />
        </h1>
        <div class={listClasses.subtitle}>
          <p>
            A simple index of interactive UI experiments and visual effects.
          </p>
        </div>
      </header>
      <SimpleList items={playgroundListItems} />
    </SimpleListPageLayout>
  );
};

Playground.metadata = () => {
  return {
    title: "Playground | Oluwasefunmi Akomolafe",
    description:
      "Interactive UI experiments and visual effects showcasing creative web development.",
    ogTitle: "Playground | Oluwasefunmi Akomolafe",
    ogDescription: "Interactive UI experiments and visual effects.",
    ogImage: `${SITE_URL}/og/playground.png`,
    twitterTitle: "Playground | Oluwasefunmi Akomolafe",
    twitterDescription: "Interactive UI experiments and visual effects.",
    twitterImage: `${SITE_URL}/og/playground.png`,
  };
};

export default Playground;
