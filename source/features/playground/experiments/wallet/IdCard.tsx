import { GitHubIcon } from "@/components/icons/github";
import { LinkIcon } from "@/components/icons/link";
import { LocationIcon } from "@/components/icons/location";
import { MailIcon } from "@/components/icons/mail";
import { WalletCard } from "./WalletCard";
import classes from "./IdCard.module.css";
import { Link } from "retend/router";
import { createUnique } from "retend";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const IdCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard class="in-data-wallet:rotate-2 duration-300 transition-transform hover:rotate-0">
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
          <section class={classes.details}>
            <div class={classes.idNumber}>
              <span class={classes.idNumberLabel}>ID NO:</span>
              <span class={classes.idNumberValue}>AO-2024-DEV</span>
            </div>
            <p class={classes.description}>
              Building fast, scalable and beautiful products for the web.
            </p>
            <div class={classes.detailList}>
              <div class={classes.detailItem}>
                <LocationIcon />
                <span>Lagos, Nigeria</span>
              </div>
              <div class={classes.detailItem}>
                <LinkIcon />
                <span>oluwasefunmi.com</span>
              </div>
              <div class={classes.detailItem}>
                <MailIcon />
                <span>adebolaakomolafe@gmail.com</span>
              </div>
            </div>
          </section>
        </article>
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
