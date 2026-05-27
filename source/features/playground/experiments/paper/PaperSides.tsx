import { useScopeContext } from "retend";
import { PaperScope } from "./PaperScope";
import type { JSX } from "retend/jsx-runtime";

export function PaperFront(props: JSX.BaseContainerProps) {
  const { children, ...rest } = props;
  const { slots } = useScopeContext(PaperScope);

  slots.front.set(() => <div {...rest}>{children}</div>);

  return null;
}

export function PaperBack(props: JSX.BaseContainerProps) {
  const { children, ...rest } = props;
  const { slots } = useScopeContext(PaperScope);

  slots.back.set(() => <div {...rest}>{children}</div>);

  return null;
}
