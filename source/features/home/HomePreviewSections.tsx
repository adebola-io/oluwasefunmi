import type { Cell } from "retend";
import { Link } from "retend/router";
import type { NotePreviewProps } from "@/shared/types";
import uiClasses from "@/components/ui/ui.module.css";
import { BookmarksHeading } from "@/features/bookmarks/BookmarksHeading";
import { RandomNotesHeading } from "@/features/notes/RandomNotesHeading";
import { PlaygroundHeading } from "@/features/playground/PlaygroundHeading";
import { SelectedWorksHeading } from "@/features/works/SelectedWorksHeading";
import classes from "./HomePage.module.css";
import { BookmarksPreviewList } from "./BookmarksPreviewList";
import { ExperiencePreviewList } from "./ExperiencePreviewList";
import { NotesPreviewList } from "./NotesPreviewList";
import { PlaygroundPreviewList } from "./PlaygroundPreviewList";
import { WorksPreviewList } from "./WorksPreviewList";

interface HomePreviewSectionsProps {
  notes: Cell<NotePreviewProps[]>;
}

export const HomePreviewSections = (props: HomePreviewSectionsProps) => {
  const { notes } = props;

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

      <section
        class={classes.previewSection}
        aria-labelledby="experience-preview"
      >
        <div class={uiClasses.sectionHeading} id="experience-preview">
          <h2 class={uiClasses.sectionHeadingContent}>Experience</h2>
        </div>
        <ExperiencePreviewList />
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

      <section class={classes.previewSection} aria-labelledby="notes-preview">
        <div class={uiClasses.sectionHeading} id="notes-preview">
          <h2 class={uiClasses.sectionHeadingContent}>
            <RandomNotesHeading />
          </h2>
          <Link href="/random-notes" class={classes.viewAllLink} data-pill-link>
            View all
          </Link>
        </div>
        <NotesPreviewList notes={notes} />
      </section>

      <section
        class={classes.previewSection}
        aria-labelledby="bookmarks-preview"
      >
        <div class={uiClasses.sectionHeading} id="bookmarks-preview">
          <h2 class={uiClasses.sectionHeadingContent}>
            <BookmarksHeading />
          </h2>
          <Link href="/bookmarks" class={classes.viewAllLink} data-pill-link>
            View all
          </Link>
        </div>
        <BookmarksPreviewList />
      </section>
    </div>
  );
};
