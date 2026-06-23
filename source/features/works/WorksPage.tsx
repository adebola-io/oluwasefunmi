import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
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
      <SimpleListHeader title="Works">
        <p>
          A simple index of products, frameworks, tools, and selected client
          work.
        </p>
      </SimpleListHeader>
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
