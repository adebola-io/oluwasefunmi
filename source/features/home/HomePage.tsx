import { For } from "retend";
import { Link, type RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import {
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextStack, SubtleText } from "@/components/ui/TextStack";
import {
  TwoColumnList,
  TwoColumnListItem,
} from "@/components/ui/TwoColumnList";
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
      <SimpleListHeader
        title="oluwasefunmi."
        avatar="https://github.com/adebola-io.png"
      >
        <p>
          Hello, this is Sefunmi. I am a software engineer focused on clear
          systems, expressive interfaces, and useful web products.
        </p>
        <p>
          I work mostly around frontend architecture, motion, local tools, and
          interaction-heavy experiments.
        </p>
      </SimpleListHeader>
      <HomeSocialLinks />
      <section
        class={classes.playgroundPreview}
        aria-labelledby="playground-preview-heading"
      >
        <SectionHeading
          id="playground-preview-heading"
          Link={() => <Link href="/playground">View all</Link>}
        >
          Playground
        </SectionHeading>
        <TwoColumnList>
          {For(playgroundPreviewItems, (item) => (
            <TwoColumnListItem>
              <TextStack>
                <Link href={item.path}>{item.title}</Link>
                <SubtleText>{item.summary}</SubtleText>
              </TextStack>
            </TwoColumnListItem>
          ))}
        </TwoColumnList>
      </section>
      <section class={classes.experience} aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <TwoColumnList>
          {For(experiences, (item) => (
            <TwoColumnListItem>
              <TextStack>
                <span>{item.company}</span>
                <SubtleText>{item.role}</SubtleText>
              </TextStack>
              <SubtleText>{item.year}</SubtleText>
            </TwoColumnListItem>
          ))}
        </TwoColumnList>
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
