import { For, If } from "retend";
import { Link, type RouteComponent } from "retend/router";
import {
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { playgroundItems } from "@/features/playground/data/playground";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundHeading } from "./PlaygroundHeading";

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
      <ul class={listClasses.list}>
        {For(playgroundItems, (item) => {
          const Description = item.description;
          const Icon = item.icon;

          return (
            <li
              class={[
                listClasses.item,
                { [listClasses.hasIcon]: Boolean(Icon) },
              ]}
            >
              {If(Boolean(Icon), () => (
                <span class={listClasses.itemIcon}>
                  <Icon />
                </span>
              ))}
              <Link
                class={listClasses.itemContent}
                href={item.path}
                title={item.title}
              >
                <h2 class={listClasses.itemTitle} title={item.title}>
                  {item.title}
                </h2>
                <div class={listClasses.itemSubtitle}>
                  <Description />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
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
