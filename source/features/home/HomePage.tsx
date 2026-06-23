import { For } from "retend";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { BlueskyIcon } from "@/components/icons/bluesky";
import { ThreadsIcon } from "@/components/icons/threads";
import { XIcon } from "@/components/icons/x";
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
import classes from "./HomePage.module.css";

const experiences = [
  { company: "Summitech", role: "Full Stack Developer", year: "Now" },
  { company: "Lighthaus Eko", role: "Developer", year: "2024" },
  { company: "TechMadeEazy", role: "Developer", year: "2023" },
  { company: "Panoramic Synergy", role: "Intern", year: "2022" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://www.twitter.com/adebola_io",
    icon: XIcon,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/oluwasefunmi.com",
    icon: BlueskyIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@adebola_io",
    icon: ThreadsIcon,
  },
];

function HomeSocialLinks() {
  return (
    <ul class={classes.socialLinks} aria-label="Social links">
      {For(socialLinks, (link) => {
        const Icon = link.icon;

        return (
          <li>
            <a
              class={classes.socialLink}
              href={link.href}
              title={link.label}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const PortfolioHome: RouteComponent<PageMeta> = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListHeader
        title="oluwasefunmi."
        subtitle="Hello, this is Sefunmi. I am a software engineer focused on clear systems, expressive interfaces, and useful web products."
        avatar="https://github.com/adebola-io.png"
      />
      <HomeSocialLinks />
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
