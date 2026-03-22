import type { JSX } from "retend/jsx-runtime";

type NoteMetadataProps = JSX.IntrinsicElements["div"] & {
  date: string;
  category?: string;
};

export function NoteMetadata(props: NoteMetadataProps) {
  const { date, category = "General", ...rest } = props;
  return (
    <div {...rest} class={["note-metadata", rest.class]}>
      <span class="note-meta-category">{category}</span>
      <span class="note-meta-separator">•</span>
      <span class="note-meta-date">{date}</span>
    </div>
  );
}

export function NoteSeparator() {
  return <hr class="note-separator" />;
}
