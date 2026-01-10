import { Cell, useObserver } from "retend";
import { Link } from "retend/router";
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
    <div class="h-full w-full min-h-screen grid place-items-center">
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <Link
          href="/playground"
          style={{
            pointerEvents: "auto",
            color: "#888",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            background: "rgba(0,0,0,0.5)",
            padding: "0.5rem 1rem",
            borderRadius: "99px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          back to playground
        </Link>
        <h1
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.9rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Blur Carousel
        </h1>
      </header>
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
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.9rem",
          pointerEvents: "none",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Scroll to explore
      </div>
    </div>
  );
}

export default BlurCarouselDemo;
