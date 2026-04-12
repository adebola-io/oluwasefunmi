import type { JSX } from "retend/jsx-runtime";
import { GitHubIcon } from "@/components/icons/github";
import { TwitterIcon } from "@/components/icons/twitter";
import { LinkedInIcon } from "@/components/icons/linkedin";

export interface SocialLink {
  name: string;
  url: string;
  icon: () => JSX.Element;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://www.github.com/adebola-io",
    icon: GitHubIcon,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/adebola_io",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oluwasefunmi-akomolafe-3a6a42214/",
    icon: LinkedInIcon,
  },
];
