
import classes from "./HeroWidget.module.css";
import { StatusPill } from "./StatusPill";

interface HeroWidgetProps {
  name: string;
  avatar: string;
  bio: string;
}

export function HeroWidget(props: HeroWidgetProps) {
  const { name, avatar, bio } = props;

  return (
    <div class={classes.hero}>
      <header class={classes.header}>
        <div class={classes.avatarWrapper}>
          <img src={avatar} alt={name} class={classes.avatar} />
        </div>
        <StatusPill text="Available for Work" type="success" />
      </header>

      <div class={classes.content}>
        <h1 class={classes.headline}>
          oluwasefunmi, <br/>
          <span class={classes.current}>software engineer.</span>
        </h1>
        <p class={classes.bio}>{bio}</p>
      </div>

    </div>
  );
}
