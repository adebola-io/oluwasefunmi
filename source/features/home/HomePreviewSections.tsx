import { Link } from "retend/router";
import uiClasses from "@/components/ui/ui.module.css";
import { PlaygroundHeading } from "@/features/playground/PlaygroundHeading";
import { SelectedWorksHeading } from "@/features/works/SelectedWorksHeading";
import classes from "./HomePage.module.css";
import { PlaygroundPreviewList } from "./PlaygroundPreviewList";
import { WorksPreviewList } from "./WorksPreviewList";

export const HomePreviewSections = () => {
  return (
    <div class={classes.previewSections}>
      <section
        class={classes.previewSection}
        aria-labelledby="playground-preview"
      >
        <div class={uiClasses.sectionHeading} id="playground-preview">
          <h2 class={uiClasses.sectionHeadingContent}>
            <PlaygroundHeading />
          </h2>
          <Link href="/playground" class={classes.viewAllLink} data-pill-link>
            View all
          </Link>
        </div>
        <PlaygroundPreviewList />
      </section>

      <section class={classes.previewSection} aria-labelledby="works-preview">
        <div class={uiClasses.sectionHeading} id="works-preview">
          <h2 class={uiClasses.sectionHeadingContent}>
            <SelectedWorksHeading />
          </h2>
          <Link href="/works" class={classes.viewAllLink} data-pill-link>
            View all
          </Link>
        </div>
        <WorksPreviewList />
      </section>
    </div>
  );
};
