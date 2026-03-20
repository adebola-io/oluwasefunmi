import { Cell, createUnique } from "retend";
import { UniqueTransition } from "retend-utils/components";
import type { JSX } from "retend/jsx-runtime";

interface NoteProps {
  title: string;
  class?: unknown;
}

export const NoteHeading = createUnique<NoteProps>((props) => {
  const title = Cell.derived(() => props.get().title);
  const className = Cell.derived(() => props.get().class);
  return (
    <UniqueTransition transitionDuration="300ms">
      <h1 class={[className, "note-heading"]}>{title}</h1>
    </UniqueTransition>
  );
});

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
