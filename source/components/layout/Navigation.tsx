import { Cell } from "retend";
import { useRouter, Link } from "retend/router";
import { CloseIcon } from "@/components/icons/close";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const isMenuOpen = Cell.source(false);
  const router = useRouter();

  const toggleMenu = () => isMenuOpen.set(!isMenuOpen.get());
  const closeMenu = () => isMenuOpen.set(false);

  router.getCurrentRoute().listen(() => {
    isMenuOpen.set(false);
  });

  return (
    <nav class={classes.nav}>
      <Link href="/" class={classes.logo} onClick={closeMenu}>
        oluwasefunmi
      </Link>

      <button
        type="button"
        class={classes.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span class={classes.bar} />
        <span class={classes.bar} />
      </button>

      <button
        type="button"
        class={[classes.backdrop, { [classes.backdropOpen]: isMenuOpen }]}
        onClick={closeMenu}
      />

      <div class={[classes.navLinks, { [classes.navLinksOpen]: isMenuOpen }]}>
        <div class={classes.sidebarHeader}>
          <span class={classes.sidebarTitle}>Menu</span>
          <button type="button" class={classes.closeButton} onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <Link
          href="/works"
          class={classes.navLink}
          data-pill-link
          onClick={closeMenu}
        >
          works
        </Link>
        <Link
          href="/playground"
          class={classes.navLink}
          data-pill-link
          onClick={closeMenu}
        >
          playground
        </Link>
        <Link
          href="/contact"
          class={classes.navLink}
          data-pill-link
          onClick={closeMenu}
        >
          contact
        </Link>
        <Link
          href="/random-notes"
          class={classes.navLink}
          data-pill-link
          onClick={closeMenu}
        >
          random notes
        </Link>
      </div>
    </nav>
  );
};
