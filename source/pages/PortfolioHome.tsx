import { Link } from "retend/router";
import type { RouteComponent } from "retend/router";
import { LayeredCard } from "../components/LayeredCard";
import classes from "./PortfolioHome.module.css";
import { CurrentPageTitle } from "@/components/CurrentPageTitle";
import { StarShower } from "@/components/StarShower";

const PortfolioHome: RouteComponent = () => {
  return (
    <div class={classes.home}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <CurrentPageTitle />
          <span class={classes.titleAccent}>web engineer.</span>
        </div>

        <p class={classes.intro}>
          I am a full-stack software engineer from Lagos, Nigeria focused on
          creating interactive digital experiences and tackling complex design
          challenges. Some of my works include{" "}
          <a href="https://www.vizitly.io" target="_blank">
            Vizitly
          </a>
          ,{" "}
          <a href="https://github.com/adebola-io/whirlwind" target="_blank">
            Whirlwind
          </a>
          , and{" "}
          <a href="https://www.npmjs.com/package/retend" target="_blank">
            Retend
          </a>
          .
        </p>

        <div class={classes.actions}>
          <LayeredCard as={Link} href="/works" class={classes.primaryButton}>
            <span>see works</span>
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
