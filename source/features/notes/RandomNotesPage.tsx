import { Cell, For } from "retend";
import { Link, type RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import type { Note, NotePreviewProps } from "@/shared/types";
import {
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
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
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Random Notes">
          Random Notes
        </h1>
        <div class={listClasses.subtitle}>
          <p>Loose notes on life, technology, software, and consequence.</p>
        </div>
      </header>
      <ul class={listClasses.list}>
        {For(notes, (note) => {
          return (
            <li class={listClasses.item}>
              <Link
                class={listClasses.itemContent}
                href={`/random-notes/${note.id}`}
                title={note.title}
              >
                <NoteHeading
                  id={`random-note-heading-${note.id}`}
                  title={note.title}
                  class={classes.title}
                />
                <div class={listClasses.itemSubtitle}>
                  <time dateTime={note.date} title={note.dateStr}>
                    {note.dateStr}
                  </time>
                  <span> · {note.description}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
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
