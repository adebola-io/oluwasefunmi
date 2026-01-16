import { Cell, useObserver } from "retend";
import type { RouteComponent } from "retend/router";
import { FluidList, type ListTemplateProps } from "retend-utils/components";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";
import { PlaygroundLayout } from "./PlaygroundLayout";
import { carouselItems, type CarouselItem } from "@/data/carousel";
import classes from "./BlurCarousel.module.css";

const BlurCarouselDemo: RouteComponent = () => {
  return (
    <div class="h-full w-full min-h-screen grid place-items-center">
      <PlaygroundLayout title="Blur Carousel" hint="Scroll to explore">
        <BlurCarousel
          items={carouselItems}
          Template={(props) => {
            const { item, index } = props;
            return <Avatar item={item} index={index} />;
          }}
        />
      </PlaygroundLayout>
    </div>
  );
};

interface AvatarProps {
  item: CarouselItem;
  index: Cell<number>;
}

function Avatar(props: AvatarProps) {
  return (
    <div class={["grid gap-3", classes.avatar]}>
      <img
        class="aspect-square rounded-full object-cover border border-stone-400"
        src={props.item.imageUrl}
        alt="Avatar"
      />
      <div class="text-center text-lg text-white">{props.item.name}</div>
    </div>
  );
}

interface BlurCarouselProps<Item> {
  items: JSX.ValueOrCell<Item[]>;
  Template: (props: ListTemplateProps<Item>) => JSX.Template;
}

function BlurCarousel<Item>(props: BlurCarouselProps<Item>) {
  const { items: itemsProp, Template } = props;
  const observer = useObserver();
  const items = useDerivedValue(itemsProp);
  const containerRef = Cell.source<HTMLDivElement | null>(null);
  const listRef = Cell.source<HTMLUListElement | null>(null);

  observer.onConnected(listRef, (ul) => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.style.zIndex = "1";
          } else {
            target.style.removeProperty("z-index");
          }
        }
      },
      { threshold: 0.5, root: containerRef.peek() }
    );

    for (const child of ul.children) {
      intersectionObserver.observe(child);
    }

    return () => intersectionObserver.disconnect();
  });

  return (
    <div
      ref={containerRef}
      class={[
        "w-200 @container max-w-[90dvw] overflow-scroll bg-white/5 border border-white/10 rounded-xl grid py-10 px-[10cqw]",
        classes.carouselContainer,
      ]}
    >
      <FluidList
        ref={listRef}
        class="flex justify-center items-center"
        direction="inline"
        Template={Template}
        items={items}
        itemWidth="min(25dvw, 200px)"
        gap="20px"
      />
    </div>
  );
}

BlurCarouselDemo.metadata = () => ({
  title: "Blur Carousel | Playground",
  description:
    "A carousel with scroll-driven blur effects simulating depth of field.",
  viewport: "width=device-width, initial-scale=1.0",
});

export default BlurCarouselDemo;
