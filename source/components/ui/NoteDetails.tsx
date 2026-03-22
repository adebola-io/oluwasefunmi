import type { JSX } from "retend/jsx-runtime";

export function NoteDetails(props: JSX.IntrinsicElements["div"]) {
  const { children, ...rest } = props;
  return (
    <div {...rest} class={["note-details", rest.class]}>
      {children}
    </div>
  );
}
