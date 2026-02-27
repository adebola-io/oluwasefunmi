import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import classes from "./PortfolioHome.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";

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
