import type { RouteComponent } from "retend/router";
import { Cell } from "retend";
import type { PageMeta } from "retend-server/client";
import type { NotePreviewProps } from "@/shared/types";
import { SimpleListPageLayout } from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { getNotesIndex } from "@/features/notes/RandomNotesPage";
import { SITE_URL } from "@/shared/constants";
import { HomePreviewSections } from "./HomePreviewSections";
import { HomeSocialLinks } from "./HomeSocialLinks";

const PortfolioHome: RouteComponent<PageMeta<NotePreviewProps[]>> = (props) => {
  const { metadata } = props;
  const notes = Cell.derived(() => metadata.get("misc") ?? []);

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
      <HomePreviewSections notes={notes} />
    </SimpleListPageLayout>
  );
};
PortfolioHome.metadata = async () => {
  const notes = await getNotesIndex();

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
    misc: notes,
  };
};

export default PortfolioHome;
