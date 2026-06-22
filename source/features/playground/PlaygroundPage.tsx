import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { playgroundItems } from "@/features/playground/data/playground";
import { SITE_URL } from "@/shared/constants";

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
      <SimpleListHeader
        title="Playground"
        subtitle="A simple index of interactive UI experiments and visual effects."
      />
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
