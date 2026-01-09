import type { JSX } from "retend/jsx-runtime";

type HeadingTextProps = JSX.IntrinsicElements["h1"];

interface NoteHeadingTextProps extends HeadingTextProps {
  noteId: string;
}

export function NoteHeadingText(props: NoteHeadingTextProps) {
  const { children, style, noteId, ...rest } = props;
  const styles = {
    viewTransitionName: `note-heading-${noteId}`,
  };
  if (typeof style === "object") {
    Object.assign(styles, style);
  }
  return (
    <h1 {...rest} class={["note-heading", rest.class]} style={styles}>
      {children}
    </h1>
  );
}

export function NoteContent(props: JSX.IntrinsicElements["div"]) {
  const { children, ...rest } = props;
  return (
    <div {...rest} class={["note-content", rest.class]}>
      {children}
    </div>
  );
}

export function NoteDetails(props: JSX.IntrinsicElements["div"]) {
  const { children, ...rest } = props;
  return (
    <div {...rest} class={["note-details", rest.class]}>
      {children}
    </div>
  );
}
