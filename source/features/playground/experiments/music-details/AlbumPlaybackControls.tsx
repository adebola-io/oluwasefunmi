import { Cell, useScopeContext } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";
import classes from "./AlbumPlaybackControls.module.css";
import { formatTrackDuration } from "./formatTrackDuration";

interface TransportButtonProps {
  action: () => void;
  label: JSX.ValueOrCell<string>;
  symbol: JSX.ValueOrCell<string>;
  variant?: "primary";
}

function TransportButton(props: TransportButtonProps) {
  const { action, label, symbol, variant } = props;

  return (
    <button
      type="button"
      class={{ [classes.playButton]: variant === "primary" }}
      onClick={action}
      aria-label={label}
    >
      <span aria-hidden="true">{symbol}</span>
    </button>
  );
}

export function AlbumPlaybackControls() {
  const { player } = useScopeContext(AlbumPlaybackScope);
  const playLabel = Cell.derived(() =>
    player.isPlaying.get() ? "Pause" : "Play"
  );
  const playSymbol = Cell.derived(() => (player.isPlaying.get() ? "II" : "▶"));
  const trackName = Cell.derived(() => player.currentTrack.get().name);
  const currentTime = Cell.derived(() =>
    formatTrackDuration(player.currentTime.get())
  );
  const trackDuration = Cell.derived(() =>
    formatTrackDuration(
      player.duration.get() || player.currentTrack.get().duration
    )
  );
  const progressScale = Cell.derived(
    () => `scaleX(${player.progress.get() / 100})`
  );

  return (
    <section class={classes.controls} aria-label="Album playback controls">
      <p class={classes.eyebrow}>Now playing</p>
      <div class={classes.currentTrack}>
        <strong>{trackName}</strong>
      </div>
      <div class={classes.progress}>
        <time>{currentTime}</time>
        <span class={classes.progressTrack}>
          <span
            class={classes.progressFill}
            style={{ transform: progressScale }}
          />
        </span>
        <time>{trackDuration}</time>
      </div>
      <div class={classes.buttons}>
        <TransportButton
          action={player.previous}
          label="Previous track"
          symbol="◀◀"
        />
        <TransportButton
          action={player.toggle}
          label={playLabel}
          symbol={playSymbol}
          variant="primary"
        />
        <TransportButton action={player.next} label="Next track" symbol="▶▶" />
      </div>
    </section>
  );
}
