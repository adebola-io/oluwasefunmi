import { For, If, Cell } from "retend";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import type { Note, NotePreviewProps } from "@/shared/types";
import { Link } from "retend/router";
import { LayeredCard } from "@/components/ui/LayeredCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { NoteHeading } from "@/components/ui/typography";
import { SITE_URL } from "@/shared/constants";
import classes from "./RandomNotesPage.module.css";

export const getNotesIndex = async () => {
  const items: NotePreviewProps[] = [];
  const files = import.meta.glob("@/content/notes/*/page.mdx");

  for (const file in files) {
    const component = files[file] as () => Promise<Note>;
    const markdownContent = await component();
    items.push({
      id: markdownContent.id,
      title: markdownContent.title,
      description: markdownContent.description,
      dateStr: markdownContent.dateStr,
    });
  }

  return items.sort((a, b) => {
    const id1 = a.id?.split("-")[0] ?? "0";
    const id2 = b.id?.split("-")[0] ?? "0";
    return Number(id1) - Number(id2);
  });
};

const RandomNotes: RouteComponent<PageMeta<NotePreviewProps[]>> = (props) => {
  const { metadata } = props;
  const notes = Cell.derived(() => metadata.get("misc"));
  const isEmptyNotes = Cell.derived(() => {
    const n = notes.get();
    return !n || n.length === 0;
  });

  return (
    <div class={classes.page}>
      <div class={classes.container}>
        <PageHeader
          title="Random Notes."
          subtitle="Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence."
        />

        <div class={classes.notesList}>
          {If(
            isEmptyNotes,
            () => (
              <p class={classes.empty}>No notes yet.</p>
            ),
            () =>
              For(notes, (note) => (
                <LayeredCard
                  as={Link}
                  href={`/random-notes/${note.id}`}
                  class={classes.noteCard}
                >
                  <NoteHeading
                    id={`random-note-heading-${note.id}`}
                    title={note.title}
                  />
                  <div class={classes.noteDate}>{note.dateStr}</div>
                  <p class={classes.noteSummary}>{note.description}</p>
                </LayeredCard>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

const title = "Random Notes | Oluwasefunmi, Web Developer";
const ogImage = `${SITE_URL}/og/random-notes.png`;
const description =
  "Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.";

RandomNotes.metadata = async () => {
  const notes = await getNotesIndex();
  return {
    title,
    ogTitle: title,
    twitterTitle: title,
    ogImage,
    description,
    ogDescription: description,
    twitterDescription: description,
    twitterImage: ogImage,
    misc: notes,
  };
};

export default RandomNotes;
