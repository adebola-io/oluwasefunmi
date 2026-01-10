import { Cell } from "retend";
import { useRouter, Link } from "retend/router";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const isMenuOpen = Cell.source(false);
  const router = useRouter();

  // Close menu whenever route changes
  router.getCurrentRoute().listen(() => {
    isMenuOpen.set(false);
  });

  const toggleMenu = () => isMenuOpen.set(!isMenuOpen.get());
  const closeMenu = () => isMenuOpen.set(false);

  return (
    <nav class={classes.nav}>
      <Link href="/" class={classes.logo} onClick={closeMenu}>
        oluwasefunmi
      </Link>

      <button
        class={classes.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span class={classes.bar}></span>
        <span class={classes.bar}></span>
      </button>

      <div
        class={[classes.backdrop, { [classes.backdropOpen]: isMenuOpen }]}
        onClick={closeMenu}
      ></div>

      <div class={[classes.navLinks, { [classes.navLinksOpen]: isMenuOpen }]}>
        <div class={classes.sidebarHeader}>
          <span class={classes.sidebarTitle}>Menu</span>
          <button class={classes.closeButton} onClick={closeMenu}>
            &times;
          </button>
        </div>
        <Link href="/playground" class={classes.navLink} onClick={closeMenu}>
          playground
        </Link>
        <Link href="/contact" class={classes.navLink} onClick={closeMenu}>
          contact
        </Link>
        <Link href="/random-notes" class={classes.navLink} onClick={closeMenu}>
          random notes
        </Link>
      </div>
    </nav>
  );
};
