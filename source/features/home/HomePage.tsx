import { For } from "retend";
import { Link, type RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { SimpleListPageLayout } from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import uiClasses from "@/components/ui/ui.module.css";
import { PlaygroundHeading } from "@/features/playground/PlaygroundHeading";
import { SITE_URL } from "@/shared/constants";
import { HomeSocialLinks } from "./HomeSocialLinks";
import classes from "./HomePage.module.css";

const playgroundPreviewItems = [
  {
    title: "floating-books",
    summary: "A CSS book wall with routed detail views and derived page color.",
    path: "/playground/floating-books",
  },
  {
    title: "wallets",
    summary:
      "Layered CSS wallets with cards, notes, stickers, and close animations.",
    path: "/playground/wallets",
  },
  {
    title: "glasses",
    summary: "Switchable DOM-built glasses on a fixed face preview.",
    path: "/playground/glasses",
  },
];

const experiences = [
  { company: "Summitech", role: "Full Stack Developer", year: "Now" },
  { company: "Lighthaus Eko", role: "Full Stack Developer", year: "2024" },
  { company: "TechMadeEazy", role: "Developer", year: "2023" },
  { company: "Panoramic Synergy", role: "Intern", year: "2022" },
];

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
        </div>
      </header>
      <HomeSocialLinks />
      <section
        class={classes.playgroundPreview}
        aria-labelledby="playground-preview-heading"
      >
        <Link
          href="/playground"
          class={uiClasses.sectionHeading}
          id="playground-preview-heading"
        >
          <h2 class={uiClasses.sectionHeadingContent}>
            <PlaygroundHeading />
          </h2>
          <div class={uiClasses.sectionHeadingLink}>View all</div>
        </Link>
        <ul class={uiClasses.twoColumnList}>
          {For(playgroundPreviewItems, (item) => (
            <li class={uiClasses.twoColumnItem}>
              <span class={uiClasses.textStack}>
                <Link href={item.path}>{item.title}</Link>
                <span class={uiClasses.subtleText}>{item.summary}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section class={classes.experience} aria-labelledby="experience-heading">
        <div class={uiClasses.sectionHeading} id="experience-heading">
          <h2 class={uiClasses.sectionHeadingContent}>Experience</h2>
        </div>
        <ul class={uiClasses.twoColumnList}>
          {For(experiences, (item) => (
            <li class={uiClasses.twoColumnItem}>
              <span class={uiClasses.textStack}>
                <span>{item.company}</span>
                <span class={uiClasses.subtleText}>{item.role}</span>
              </span>
              <span class={uiClasses.subtleText}>{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
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
