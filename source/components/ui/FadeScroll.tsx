import { Cell } from "retend";
import {
  useDerivedAsyncValue,
  useIntersectionObserver,
} from "retend-utils/hooks";
import { JSX } from "retend/jsx-runtime";
import classes from "./FadeScroll.module.css";

type FadeListDirection = "horizontal" | "vertical";

interface FadeListProps extends Omit<JSX.BaseContainerProps, "ref"> {
  direction?: JSX.ValueOrCellOrPromise<FadeListDirection>;
  ref?: Cell<HTMLElement | null>;
}

export function FadeScrollView(props: FadeListProps) {
  const {
    children,
    ref = Cell.source(null),
    direction: directionProp = "vertical",
    ...rest
  } = props;
  const topRef = Cell.source<HTMLDivElement | null>(null);
  const bottomRef = Cell.source<HTMLDivElement | null>(null);
  const scrolledFromStart = Cell.source(false);
  const notScrolledToBottom = Cell.source(false);
  const direction = useDerivedAsyncValue(directionProp);

  const options = () => ({ root: ref.get() });
  const restProps = {
    ...rest,
    ref,
    class: [classes.container, rest.class],
    "data-scrolled-from-start": scrolledFromStart,
    "data-not-scrolled-to-bottom": notScrolledToBottom,
    "data-direction": direction,
  };

  useIntersectionObserver(
    topRef,
    ([{ isIntersecting }]) => scrolledFromStart.set(!isIntersecting),
    options
  );

  useIntersectionObserver(
    bottomRef,
    ([{ isIntersecting }]) => notScrolledToBottom.set(!isIntersecting),
    options
  );

  const content = (
    <>
      <div data-fade-scroll-sentinel ref={topRef} />
      {children}
      <div data-fade-scroll-sentinel ref={bottomRef} />
    </>
  );

  return <div {...restProps}>{content}</div>;
}
