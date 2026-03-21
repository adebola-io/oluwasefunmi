import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import { Link } from "retend/router";
import classes from "./PortfolioHome.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import { GithubIcon } from "@/components/icons/github";
import { TwitterIcon } from "@/components/icons/twitter";

const PortfolioHome: RouteComponent<PageMeta> = () => {
  return (
    <div class={classes.home}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <PageTitle name="Oluwasefunmi." />
          <span class={classes.titleAccent}>web engineer.</span>
        </div>

        <p class={classes.intro}>
          I am a full-stack software engineer focused on creating interactive
          digital experiences and tackling complex design challenges.
        </p>

        <div class={classes.actions}>
          <Link href="/works" data-pill-link>
            Works
          </Link>
          <Link href="/playground" data-pill-link>
            Playground
          </Link>
        </div>
      </div>

      <div class={classes.floatingSocials}>
        <a
          href="https://www.github.com/adebola-io"
          target="_blank"
          rel="noopener noreferrer"
          class={classes.iconLink}
          aria-label="GitHub Profile"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.twitter.com/adebola_io"
          target="_blank"
          rel="noopener noreferrer"
          class={classes.iconLink}
          aria-label="Twitter Profile"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
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
