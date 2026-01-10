import { Link } from "retend/router";
import { LayeredCard } from "../components/LayeredCard";
import classes from "./PortfolioHome.module.css";
import { CurrentPageTitle } from "@/components/CurrentPageTitle";
import { StarShower } from "@/components/StarShower";

export default function PortfolioHome() {
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
          <LayeredCard as={Link} href="/contact" class={classes.primaryButton}>
            <span>contact me</span>
          </LayeredCard>
          <LayeredCard
            as={Link}
            href="/explorations"
            class={classes.primaryButton}
          >
            <span>see explorations</span>
          </LayeredCard>
        </div>
      </div>
    </div>
  );
}
