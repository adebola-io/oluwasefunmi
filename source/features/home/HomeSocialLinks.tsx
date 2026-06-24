import { BlueskyIcon } from "@/components/icons/bluesky";
import { GitHubIcon } from "@/components/icons/github";
import { PaperIcon } from "@/components/icons/paper";
import { PinIcon } from "@/components/icons/pin";
import { ThreadsIcon } from "@/components/icons/threads";
import { XIcon } from "@/components/icons/x";
import classes from "./HomePage.module.css";
import { For } from "retend";
import { Link } from "retend/router";

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
  {
    label: "GitHub",
    href: "https://www.github.com/adebola-io",
    icon: GitHubIcon,
  },
];

const pageLinks = [
  {
    label: "Random Notes",
    href: "/random-notes",
    icon: PaperIcon,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: PinIcon,
  },
];

export function HomeSocialLinks() {
  return (
    <nav class={classes.socialLinks} aria-label="Home links">
      <ul class={classes.socialLinkGroup} aria-label="Social links">
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

      <ul class={classes.socialLinkGroup} aria-label="Page links">
        {For(pageLinks, (link) => {
          const Icon = link.icon;

          return (
            <li>
              <Link
                class={classes.socialLink}
                href={link.href}
                title={link.label}
                aria-label={link.label}
              >
                <Icon />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
