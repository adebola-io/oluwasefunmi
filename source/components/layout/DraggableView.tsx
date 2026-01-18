import { Cell, useObserver } from "retend";
import { useIntersectionObserver, useMatchMedia } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";

interface DraggableViewProps extends JSX.BaseContainerProps {
  ref?: Cell<HTMLElement | null>;
  onDismiss?: () => void;
}

export function DraggableView(props: DraggableViewProps) {
  const {
    ref: contentRef = Cell.source<HTMLElement | null>(null),
    onDismiss,
    ...rest
  } = props;
  const containerRef = Cell.source<HTMLElement | null>(null);
  const isTouchDevice = useMatchMedia("(width < 40rem) and (pointer: coarse)");
  const enableDismiss = Cell.source(false);
  const observer = useObserver();
  let thresholdReached = false;

  const options = (): IntersectionObserverInit => ({
    root: containerRef.peek(),
    threshold: 0.5,
  });
  const callback: IntersectionObserverCallback = ([entry]) => {
    if (!isTouchDevice.get()) return;
    thresholdReached = !entry.isIntersecting;
  };

  useIntersectionObserver(contentRef, callback, options);

  observer.onConnected(contentRef, (content) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        enableDismiss.set(true);
        content.scrollIntoView({
          behavior: "instant",
          block: "start",
          inline: "start",
        });
      });
    });
  });

  const handleTouchEnd = () => {
    if (thresholdReached) onDismiss?.();
    else {
      const content = contentRef.peek();
      content?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      class={[
        "size-full",
        "max-sm:overflow-auto [scrollbar-width:none] overscroll-none scroll-smooth",
      ]}
      onTouchEnd={handleTouchEnd}
    >
      <div
        class={[
          "size-full grid grid-cols-1 grid-rows-1",
          {
            "max-sm:w-[220%] max-sm:h-[160%] max-sm:grid-cols-[1fr_45.454545%_1fr] max-sm:grid-rows-[1fr_62.5%]":
              enableDismiss,
          },
        ]}
      >
        <div
          ref={contentRef}
          {...rest}
          class={[
            "size-full self-end",
            { "max-sm:[grid-area:2/2]": enableDismiss },
            rest.class,
          ]}
        />
      </div>
    </div>
  );
}
