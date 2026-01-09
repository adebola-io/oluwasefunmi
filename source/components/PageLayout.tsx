import type { JSX } from "retend/jsx-runtime";
import classes from "./PageLayout.module.css";

interface PageLayoutProps {
  children?: JSX.Children;
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <div class={classes.layout}>
      <header class={classes.header}>
        <a href="/" class={classes.backLink}>
          <div class={classes.backIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Back to Explorations
        </a>
      </header>
      <main class={classes.main}>{props.children}</main>
    </div>
  );
};
