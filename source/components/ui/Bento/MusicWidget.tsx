import { For, If } from "retend";
import classes from "./MusicWidget.module.css";

const BARS = Array.from({ length: 30 }, (_, i) => i);

interface MusicWidgetProps {
  title: string;
  artist: string;
  image?: string;
}

export function MusicWidget(props: MusicWidgetProps) {
  const { title, artist, image } = props;

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>What I'm listening</span>
      </div>

      <div class={classes.main}>
        <div class={classes.artwork}>
          {If(
            image,
            () => (
              <img src={image} alt={title} />
            ),
            () => (
              <div class={classes.placeholder} />
            ),
          )}
        </div>

        <div class={classes.info}>
          <h3 class={classes.title}>{title}</h3>
          <p class={classes.artist}>{artist}</p>
        </div>
      </div>

      <div class={classes.player}>
        <div class={classes.waveWrapper}>
          <div class={classes.waveform}>
            {For(BARS, (i: number) => (
              <div
                class={classes.bar}
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div class={classes.controls}>
          <div class={classes.time}>0:32 / 3:45</div>
        </div>
      </div>
    </div>
  );
}
