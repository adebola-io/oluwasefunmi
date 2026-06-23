import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
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
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Works">
          Works
        </h1>
        <div class={listClasses.subtitle}>
          <p>
            A simple index of products, frameworks, tools, and selected client
            work.
          </p>
        </div>
      </header>
      <SimpleList items={workItems} />
    </SimpleListPageLayout>
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
