import { GitHubIcon } from "@/components/icons/github";
import classes from "./IdCard.module.css";
import { Link } from "retend/router";

export function IdCard() {
  return (
    <article class={classes.card}>
      <section>
        <div class={classes.avatarContainer}>
          <img
            class={classes.avatar}
            src="https://github.com/adebola-io.png"
            alt="Oluwasefunmi Akomolafe's GitHub profile picture"
          />
        </div>
        <h1 class={classes.name}>Oluwasefunmi Akomolafe.</h1>
        <p class={classes.title}>software engineer.</p>
        <Link
          class={classes.githubIconLink}
          href="https://github.com/adebola-io"
          target="_blank"
        >
          <div class={classes.githubIconContainer}>
            <GitHubIcon />
          </div>
          <span>adebola-io</span>
        </Link>
      </section>
      <section>
        <div class={classes.idNumber}>
          <span class={classes.idNumberLabel}>ID NO:</span>
          <span class={classes.idNumberValue}>AO-2024-DEV</span>
        </div>
        <p class={classes.description}>
          Building fast, scalable and beautiful products for the web.
        </p>
        <div>
          <span location-icon />
          Lagos, Nigeria
        </div>
        <div>
          <span link-icon />
          oluwasefunmi.com
        </div>
        <div>
          <span mail-icon />
          adebolaakomolafe@gmail.com
        </div>
      </section>
    </article>
  );
}
