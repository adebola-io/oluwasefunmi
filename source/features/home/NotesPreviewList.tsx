import { Cell, For } from "retend";
import { Link } from "retend/router";
import type { NotePreviewProps } from "@/shared/types";
import listClasses from "@/components/layout/SimpleListPage.module.css";

interface NotesPreviewListProps {
  notes: Cell<NotePreviewProps[]>;
}

export const NotesPreviewList = (props: NotesPreviewListProps) => {
  const { notes } = props;
  const previewNotes = Cell.derived(() => notes.get().slice(0, 3));

  return (
    <ul class={listClasses.list}>
      {For(previewNotes, (note) => (
        <li class={listClasses.item}>
          <Link
            class={listClasses.itemContent}
            href={`/random-notes/${note.id}`}
            title={note.title}
          >
            <h3 class={listClasses.itemTitle} title={note.title}>
              {note.title}
            </h3>
            <div class={listClasses.itemSubtitle}>
              <time dateTime={note.date} title={note.dateStr}>
                {note.dateStr}
              </time>
              <span> · {note.description}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
