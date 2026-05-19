import { Cell, If } from "retend";
import { JSX } from "retend/jsx-runtime";

export type TemplateFn = (() => JSX.Template) | null;

interface SlotProps {
  content: Cell<TemplateFn>;
}

export function Slot(props: SlotProps) {
  const { content } = props;
  return If(content, (SlotContent) => <SlotContent />);
}
