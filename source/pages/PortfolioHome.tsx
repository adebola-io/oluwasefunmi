import { Link } from "retend/router";
import classes from "./PortfolioHome.module.css";

const PortfolioHome = () => {
  return (
    <div class={classes.home}>
      <div class={classes.container}>
        <header class={classes.hero}>
          <h1 class={classes.title}>
            oluwasefunmi.
            <span class={classes.titleAccent}>web engineer.</span>
          </h1>
        </header>

        <p class={classes.intro}>
          I am a full-stack web developer from Lagos, Nigeria focused on
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
          <Link href="/explorations" class={classes.primaryButton}>
            <span>see explorations</span>
          </Link>
          <Link href="/contact" class={classes.secondaryButton}>
            <span>contact me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
