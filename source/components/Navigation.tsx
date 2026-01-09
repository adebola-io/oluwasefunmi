import { Link } from "retend/router";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav class={classes.nav}>
      <Link href="/" class={classes.logo}>
        oluwasefunmi
      </Link>
      <div class={classes.navLinks}>
        <Link href="/explorations" class={classes.navLink}>
          explorations
        </Link>
        <Link href="/contact" class={classes.navLink}>
          contact
        </Link>
        <Link href="/random-notes" class={classes.navLink}>
          random notes
        </Link>
      </div>
    </nav>
  );
};
