import type { JSX } from "retend/jsx-runtime";

interface NoteMetadataExtra {
  date: string;
  dateTime: string;
  category?: string;
}

type NoteMetadataProps = JSX.IntrinsicElements["div"] & NoteMetadataExtra;

export function NoteMetadata(props: NoteMetadataProps) {
  const { date, dateTime, category = "General", ...rest } = props;
  return (
    <div {...rest} class={["note-metadata", rest.class]}>
      <span class="note-meta-category" title={category}>
        {category}
      </span>
      <span class="note-meta-separator" aria-hidden="true">
        •
      </span>
      <time class="note-meta-date" dateTime={dateTime} title={date}>
        {date}
      </time>
    </div>
  );
}

export function NoteSeparator() {
  return <hr class="note-separator" />;
}
