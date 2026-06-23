import { BlueskyIcon } from "@/components/icons/bluesky";
import { GitHubIcon } from "@/components/icons/github";
import { ThreadsIcon } from "@/components/icons/threads";
import { XIcon } from "@/components/icons/x";
import classes from "./HomePage.module.css";
import { For } from "retend";

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

export function HomeSocialLinks() {
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
