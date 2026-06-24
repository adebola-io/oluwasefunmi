import type { Cell } from "retend";
import type { NotePreviewProps } from "@/shared/types";
import classes from "./HomePage.module.css";
import { BookmarksPreviewList } from "./BookmarksPreviewList";
import { NotesPreviewList } from "./NotesPreviewList";
import { PlaygroundPreviewList } from "./PlaygroundPreviewList";
import { PreviewSection } from "./PreviewSection";
import { WorksPreviewList } from "./WorksPreviewList";

interface HomePreviewSectionsProps {
  notes: Cell<NotePreviewProps[]>;
}

export const HomePreviewSections = (props: HomePreviewSectionsProps) => {
  const { notes } = props;

  return (
    <div class={classes.previewSections}>
      <PreviewSection title="Selected Works" href="/works">
        <WorksPreviewList />
      </PreviewSection>
      <PreviewSection title="Playground" href="/playground">
        <PlaygroundPreviewList />
      </PreviewSection>
      <PreviewSection title="Random Notes" href="/random-notes">
        <NotesPreviewList notes={notes} />
      </PreviewSection>
      <PreviewSection title="Bookmarks" href="/bookmarks">
        <BookmarksPreviewList />
      </PreviewSection>
    </div>
  );
};
