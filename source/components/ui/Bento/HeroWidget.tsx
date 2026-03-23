import { For, Cell } from "retend";
import classes from "./HeroWidget.module.css";
import { StatusPill } from "./StatusPill";

interface HeroWidgetProps {
  name: string;
  role: string;
  company: string;
  prevCompany?: string;
  avatar: string;
  bio: string;
}

export function HeroWidget(props: HeroWidgetProps) {
  const { name, role, company, prevCompany, avatar, bio } = props;
  const bars = Cell.source([...Array(20)].map((_, i) => i));

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
          Hi I'm {name} — I'm a {role} at{" "}
          <span class={classes.current}>{company}.</span>{" "}
          <span class={classes.previous}>Previously at {prevCompany}.</span>
        </h1>
        <p class={classes.bio}>{bio}</p>
      </div>

       <div class={classes.audioPreview}>
            <div class={classes.playButton}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M1 1.5V12.5L11 7L1 1.5Z" fill="currentColor" />
                </svg>
            </div>
            <div class={classes.bars}>
                {For(bars, () => (
                    <div class={classes.bar} style={{ height: `${Math.random() * 60 + 20}%` }} />
                ))}
            </div>
            <span class={classes.time}>0:32</span>
        </div>
    </div>
  );
}
