import { For } from "retend";
import {
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { SITE_URL } from "@/shared/constants";
import { projects } from "./data/projects";
import { SelectedWorksHeading } from "./SelectedWorksHeading";

const Works = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Selected Works">
          <SelectedWorksHeading />
        </h1>
        <div class={listClasses.subtitle}>
          <p>Products, frameworks, tools, and selected client work.</p>
        </div>
      </header>
      <ul class={[listClasses.list, "staggering"]}>
        {For(projects, (project) => (
          <li class={listClasses.item}>
            <a
              class={listClasses.itemContent}
              href={project.link}
              title={project.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 class={listClasses.itemTitle} title={project.name}>
                {project.name}
              </h2>
              <div class={listClasses.itemSubtitle}>{project.description}</div>
            </a>
          </li>
        ))}
      </ul>
    </SimpleListPageLayout>
  );
};

Works.metadata = () => {
  return {
    title: "Selected Works | Oluwasefunmi Akomolafe",
    description: "Products, frameworks, tools, and selected client work.",
    ogTitle: "Selected Works | Oluwasefunmi Akomolafe",
    ogDescription: "Products, frameworks, tools, and selected client work.",
    ogImage: `${SITE_URL}/og/home.png`,
    twitterTitle: "Selected Works | Oluwasefunmi Akomolafe",
    twitterDescription:
      "Products, frameworks, tools, and selected client work.",
    twitterImage: `${SITE_URL}/og/home.png`,
  };
};

export default Works;
