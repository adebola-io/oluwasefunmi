import { Cell } from "retend";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import type { Note, NotePreviewProps } from "@/shared/types";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { NoteHeading } from "@/components/ui/typography";
import { SITE_URL } from "@/shared/constants";
import classes from "./RandomNotePage.module.css";

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
      date: markdownContent.date,
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
  const notes = Cell.derived(() => {
    return metadata.get("misc") ?? [];
  });
  const noteItems = Cell.derived(() => {
    return notes.get().map((note) => {
      return {
        title: (
          <NoteHeading
            id={`random-note-heading-${note.id}`}
            title={note.title}
            class={classes.title}
          />
        ),
        subtitle: (
          <>
            <time dateTime={note.date} title={note.dateStr}>
              {note.dateStr}
            </time>
            <span> · {note.description}</span>
          </>
        ),
        href: `/random-notes/${note.id}`,
      };
    });
  });

  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <SimpleListHeader
        title="Random Notes"
        subtitle="Loose notes on life, technology, software, and consequence."
      />
      <SimpleList items={noteItems} />
    </SimpleListPageLayout>
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
