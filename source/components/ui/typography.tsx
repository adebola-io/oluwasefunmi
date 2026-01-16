import { UniqueTransition } from "retend-utils/components";
import type { JSX } from "retend/jsx-runtime";

type HeadingTextProps = JSX.IntrinsicElements["h1"];

interface NoteHeadingTextProps extends HeadingTextProps {
  noteId: string;
}

export function NoteHeadingText(props: NoteHeadingTextProps) {
  const { children, style, noteId, ...rest } = props;
  return (
    <UniqueTransition
      name={`note-heading-${noteId}`}
      transitionDuration="300ms"
    >
      {() => (
        <h1 {...rest} class={["note-heading", rest.class]} style={style}>
          {children}
        </h1>
      )}
    </UniqueTransition>
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
