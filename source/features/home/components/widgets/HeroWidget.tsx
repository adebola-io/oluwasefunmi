import { Cell, onSetup } from "retend";
import classes from "./HeroWidget.module.css";
import { StatusPill } from "./StatusPill";

interface HeroWidgetProps {
  name: string;
  avatar: string;
  bio: string;
}

export function HeroWidget(props: HeroWidgetProps) {
  const { name, avatar, bio } = props;
  const imgRef = Cell.source<HTMLImageElement | null>(null);

  onSetup(() => {
    const img = imgRef.peek();
    if (!img) return;
    const reveal = () => img.classList.add(classes.loaded);
    if (img.complete) {
      reveal();
    } else {
      img.addEventListener("load", reveal, { once: true });
    }
  });

  return (
    <div class={classes.hero}>
      <header class={classes.header}>
        <div class={classes.avatarWrapper}>
          <img ref={imgRef} src={avatar} alt={name} class={classes.avatar} />
        </div>
        <StatusPill text="Available for Work" />
      </header>

      <div class={classes.content}>
        <h1 class={classes.headline}>
          {name}, <br />
          <span class={classes.current}>software engineer.</span>
        </h1>
        <p class={classes.bio}>{bio}</p>
      </div>
    </div>
  );
}
