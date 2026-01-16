import { For } from "retend";
import type { RouteComponent } from "retend/router";
import type { PageMeta } from "retend-server/client";
import type { Note, NotePreviewProps } from "@/types";
import { Link } from "retend/router";
import { UniqueTransition } from "retend-utils/components";
import { CurrentPageTitle } from "@/components/layout/CurrentPageTitle";
import { StarShower } from "@/components/ui/StarShower";
import classes from "./RandomNotes.module.css";

export const getNotesIndex = async () => {
  const items: NotePreviewProps[] = [];
  const files = import.meta.glob("@/content/notes/*/page.mdx");

  for (const file in files) {
    const component = files[file];
    const markdownContent = (await component()) as Note;
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
  const notes = props.metadata.get("misc");

  return (
    <div class={classes.page}>
      <StarShower />
      <div class={classes.container}>
        <CurrentPageTitle />
        <p class={classes.subtitle}>
          Disjoint musings, incoherent rants and streams of consciousness that I
          have decided to write down. Anything about life, technology and
          consequence.
        </p>

        <div class={classes.notesList}>
          {!notes || notes.length === 0 ? (
            <p class={classes.empty}>No notes yet.</p>
          ) : (
            For(notes, (note, index) => (
              <Link href={`/random-notes/${note.id}`} class={classes.noteCard}>
                <div class={classes.noteNumber}>#{index.get() + 1}</div>
                <UniqueTransition
                  name={`note-heading-${note.id}`}
                  transitionDuration="300ms"
                >
                  {() => <h1 class="note-heading">{note.title}</h1>}
                </UniqueTransition>
                <div class={classes.noteDate}>{note.dateStr}</div>
                <p class={classes.noteSummary}>{note.description}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const title = "Random Notes | Oluwasefunmi, Web Developer";
const ogImage =
  "https://github.com/user-attachments/assets/aa453638-5962-48a1-859d-0af86555c870";
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
