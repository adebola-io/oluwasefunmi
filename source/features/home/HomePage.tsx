import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { SimpleListPageLayout } from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { SITE_URL } from "@/shared/constants";
import { HomePreviewSections } from "./HomePreviewSections";
import { HomeSocialLinks } from "./HomeSocialLinks";

const PortfolioHome: RouteComponent<PageMeta> = () => {
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
            You can <a href="oluwasefunmi-akomolafe.pdf">read my resume,</a> or
            send me an <a href="mailto:adebolaakomolafe@gmail.com">email</a>.
          </p>
        </div>
      </header>
      <HomeSocialLinks />
      <HomePreviewSections />
    </SimpleListPageLayout>
  );
};
PortfolioHome.metadata = () => {
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
