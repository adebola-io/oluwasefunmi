import { Link } from "retend/router";
import uiClasses from "@/components/ui/ui.module.css";
import classes from "./HomePage.module.css";

interface PreviewSectionProps {
  title: string;
  href: string;
  children: unknown;
}

export const PreviewSection = (props: PreviewSectionProps) => {
  const { title, href, children } = props;
  const headingId = `${title}-preview`;

  return (
    <section class={classes.previewSection} aria-labelledby={headingId}>
      <div class={uiClasses.sectionHeading} id={headingId}>
        <h2 class={uiClasses.sectionHeadingContent}>{title}</h2>
        <Link href={href} class={classes.viewAllLink} data-pill-link>
          View all
        </Link>
      </div>
      {children}
    </section>
  );
};
