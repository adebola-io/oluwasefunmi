import { Cell, useObserver } from "retend";
import { FluidList, type ListTemplateProps } from "retend-utils/components";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";
import classes from "./BlurCarousel.module.css";

interface Item {
  name: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    name: "Jennifer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTXHF3t7RFBwbCXWEJEhkBJRV_JokQeTHKA&s",
  },
  {
    name: "Mikaela",
    imageUrl:
      "https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg",
  },
  {
    name: "John",
    imageUrl:
      "https://img.freepik.com/premium-photo/happy-black-man-mature-selfie-portrait-about-us-company-profile-picture-ceo-business-introduction-smile-face-corporate-photography-manager-person-worker-employee-social-media_590464-162120.jpg",
  },
  {
    name: "Midas",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpEG1lGmfG2MJZ_oJ4A2k7hfIdrfQRblbOw&s",
  },
  {
    name: "Fawaz",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD49Peu4fXD18xirvPBdeYIZtx71kQn0QKwg&s",
  },
  {
    name: "Oluwasefunmi",
    imageUrl: "https://avatars.githubusercontent.com/u/60784068?v=4",
  },
  {
    name: "Elize",
    imageUrl:
      "https://media.istockphoto.com/id/1063282288/photo/female-friends-making-a-selfie-at-party.jpg?s=612x612&w=0&k=20&c=EHMOl5pPdrbgtWyf2y51irjBAahnD4mf8kvK7d5PpHc=",
  },
  {
    name: "Owen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NpapH8k4gj-D8zHBHglVr1wHVSKJdb6S6g&s",
  },
  {
    name: "Ifeanyi",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwOMDc1imjG2Xliwi8Xe03iLmv3UPHlY_pQ&s",
  },
  {
    name: "Kaisen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuC4iw9tHXjZ4drIHIqBX9dbGmSXjEPtctg&s",
  },
  {
    name: "Emma",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPy3CizcJClbMJYlfTztDst02btuaoo_Xpw&s",
  },
];

const BlurCarouselDemo = () => {
  return (
    <div class="min-h-screen bg-black grid place-items-center">
      <BlurCarousel
        items={items}
        Template={({ item, index }) => <Avatar item={item} index={index} />}
      />
    </div>
  );
};

interface AvatarProps {
  item: Item;
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
      { threshold: 0.5, root: containerRef.peek() },
    );

    for (const child of ul.children) {
      intersectionObserver.observe(child);
    }

    return () => intersectionObserver.disconnect();
  });

  return (
    <div
      ref={containerRef}
      class="w-200 @container max-w-[90dvw] overflow-scroll bg-neutral-900 border rounded-4xl grid py-10 px-[10cqw]"
      style={{ scrollbarWidth: "none" }}
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

export default BlurCarouselDemo;
