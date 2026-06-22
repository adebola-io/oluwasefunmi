import { For } from "retend";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { BlueskyIcon } from "@/components/icons/bluesky";
import { ThreadsIcon } from "@/components/icons/threads";
import { XIcon } from "@/components/icons/x";
import {
  SimpleList,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { SITE_URL } from "@/shared/constants";
import classes from "./HomePage.module.css";

const homeItems = [
  {
    title: "Works",
    subtitle: "Selected products, frameworks, tools, and client work.",
    href: "/works",
  },
  {
    title: "Playground",
    subtitle: "Interactive UI experiments and visual studies.",
    href: "/playground",
  },
  {
    title: "Random Notes",
    subtitle: "Loose notes on software, design, and consequence.",
    href: "/random-notes",
  },
  {
    title: "Bookmarks",
    subtitle: "Saved writing, tools, references, and interface material.",
    href: "/bookmarks",
  },
  {
    title: "Contact",
    subtitle: "Email, social links, and resume.",
    href: "/contact",
  },
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
      <SimpleList items={homeItems} />
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
