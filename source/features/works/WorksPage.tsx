import type { RouteComponent } from "retend/router";
import { SimpleListPage } from "@/components/layout/SimpleListPage";
import { projects } from "@/features/works/data/projects";
import { SITE_URL } from "@/shared/constants";

const workItems = projects.map((project) => {
  return {
    title: project.name,
    subtitle: project.description,
    href: project.link,
    external: true,
  };
});

const Works: RouteComponent = () => {
  return (
    <SimpleListPage
      title="Works"
      subtitle="A simple index of products, frameworks, tools, and selected client work."
      items={workItems}
      backHref="/"
      backLabel="back to home"
    />
  );
};

Works.metadata = () => {
  return {
    title: "My Works | Oluwasefunmi",
    description:
      "A curated collection of my works, highlighting my past achievements and current projects.",
    ogTitle: "My Works | Oluwasefunmi",
    ogDescription:
      "A curated collection of my works, highlighting my past achievements and current projects.",
    ogImage: `${SITE_URL}/og/my-works.png`,
    twitterTitle: "My Works | Oluwasefunmi",
    twitterDescription:
      "A curated collection of my works, highlighting my past achievements and current projects.",
    twitterImage: `${SITE_URL}/og/my-works.png`,
  };
};

export default Works;
