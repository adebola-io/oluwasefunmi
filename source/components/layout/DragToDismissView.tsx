import { Cell, useObserver } from "retend";
import { useIntersectionObserver, useMatchMedia } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";

interface DragToDismissViewProps extends JSX.BaseContainerProps {
  ref?: Cell<HTMLElement | null>;
  onDismiss?: () => void;
}

export function DragToDismissView(props: DragToDismissViewProps) {
  const {
    ref: contentRef = Cell.source<HTMLElement | null>(null),
    onDismiss,
    ...rest
  } = props;
  const containerRef = Cell.source<HTMLElement | null>(null);
  const isTouchDevice = useMatchMedia("(width < 40rem) and (pointer: coarse)");
  const enableDismiss = Cell.source(false);
  const innerScrollDisabled = Cell.source(false);
  const observer = useObserver();
  let thresholdReached = false;

  const dismissObserverOptions = (): IntersectionObserverInit => ({
    root: containerRef.peek(),
    threshold: 0.65,
  });
  const dismissCallback: IntersectionObserverCallback = ([entry]) => {
    if (!isTouchDevice.get()) return;
    thresholdReached = !entry.isIntersecting;
  };
  const innerScrollBlockOptions = (): IntersectionObserverInit => ({
    root: containerRef.peek(),
    threshold: 0.99,
  });
  const innerScrollBlockCallback: IntersectionObserverCallback = ([entry]) => {
    if (!isTouchDevice.get()) return;
    innerScrollDisabled.set(!entry.isIntersecting);
  };

  useIntersectionObserver(contentRef, dismissCallback, dismissObserverOptions);
  useIntersectionObserver(
    contentRef,
    innerScrollBlockCallback,
    innerScrollBlockOptions,
  );

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
      setTimeout(() => {
        const content = contentRef.peek();
        content?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      });
    }
  };

  return (
    <div
      ref={containerRef}
      class={[
        "size-full",
        "max-sm:overflow-auto [scrollbar-width:none] overscroll-none scroll-smooth",
        { "**:overflow-hidden": innerScrollDisabled },
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
