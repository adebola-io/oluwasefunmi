import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import { LayeredCard } from "@/components/ui/LayeredCard";
import classes from "./PortfolioHome.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";

const PortfolioHome: RouteComponent = () => {
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
          <LayeredCard
            as={Link}
            href="/playground"
            class={classes.primaryButton}
          >
            <span>go to playground</span>
          </LayeredCard>
          <LayeredCard as={Link} href="/contact" class={classes.primaryButton}>
            <span>contact me</span>
          </LayeredCard>
        </div>
      </div>
    </div>
  );
};

PortfolioHome.metadata = () => ({
  title: "Oluwasefunmi | Software Engineer",
  description:
    "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
  ogTitle: "Oluwasefunmi | Software Engineer",
  ogDescription:
    "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
  twitterTitle: "Oluwasefunmi | Software Engineer",
  twitterDescription:
    "Full-stack software engineer from Lagos, Nigeria focused on creating interactive digital experiences.",
});

export default PortfolioHome;
