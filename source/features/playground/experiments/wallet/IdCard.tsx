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
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a.92.92 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Lagos, Nigeria</span>
          </div>
          <div class={classes.detailItem}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span>oluwasefunmi.com</span>
          </div>
          <div class={classes.detailItem}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>adebolaakomolafe@gmail.com</span>
          </div>
        </div>
      </section>
    </article>
  );
}
