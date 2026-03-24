import { Cell, For, onSetup } from "retend";
import { useLocalStorage } from "retend-utils/hooks";
import classes from "./MusicWidget.module.css";

const music = `Psycho (feat. Ty Dolla $ign) – Post Malone

Orchestra – Labrinth

Green Light – Lorde

Open Arms – Jorge Rivera-Herrans & Steven Dookie

Photograph – J. Cole

All Night – Beyoncé

Yellow (feat. Nelly) – Aminé

BOILED PEANUTS – Doechii

Non-Stop – Leslie Odom Jr., Lin-Manuel Miranda, Renée Elise Goldsberry & Phillipa Soo

United In Grief – Kendrick Lamar

the last great american dynasty – Taylor Swift

I Like Me Better – Lauv

Halley’s Comet – Billie Eilish

reckless driving (feat. Ben Kessler) – Lizzy McAlpine`;
const durations = [
  221446, 174672, 234653, 198695, 217841, 322000, 180011, 121858, 385438,
  255378, 230999, 197437, 234761, 189247,
];
const BARS = Array.from({ length: 30 }, (_, i) => i);
const imageModules = import.meta.glob<{ default: string }>(
  "/source/data/images/music/*.webp",
  { eager: true }
);
interface ListeningSession {
  [key: string]: number;
  songIndex: number;
  startedAt: number;
  durationMs: number;
}

const songs = music
  .trim()
  .split(/\n\s*\n/)
  .map((line, index) => {
    const [title, artist] = line.split(" – ");

    return {
      title,
      artist,
      durationMs: durations[index],
      image:
        imageModules[
          `/source/data/images/music/${String(index + 1).padStart(2, "0")}.webp`
        ].default,
    };
  });

// oxlint-disable-next-line retend/max-component-lines
export function MusicWidget() {
  const session = useLocalStorage<ListeningSession | null>(
    "music-widget-session",
    null
  );
  const now = Cell.source(Date.now());
  const song = Cell.derived(() => {
    const currentSession = session.get();
    if (currentSession === null) {
      return songs[0];
    }
    if (!Number.isInteger(currentSession.songIndex)) {
      return songs[0];
    }
    if (currentSession.songIndex < 0) {
      return songs[0];
    }
    if (currentSession.songIndex >= songs.length) {
      return songs[0];
    }
    return songs[currentSession.songIndex];
  });
  const title = Cell.derived(() => song.get().title);
  const artist = Cell.derived(() => song.get().artist);
  const image = Cell.derived(() => song.get().image);
  const time = Cell.derived(() => {
    const currentSession = session.get();
    let currentTime = 0;
    if (currentSession !== null) {
      currentTime = now.get() - currentSession.startedAt;
      if (currentTime < 0) {
        currentTime = 0;
      }
      if (currentTime > currentSession.durationMs) {
        currentTime = currentSession.durationMs;
      }
    }
    const elapsedMinutes = Math.floor(currentTime / 60000);
    const elapsedSeconds = Math.floor(currentTime / 1000) % 60;
    const durationMinutes = Math.floor(song.get().durationMs / 60000);
    const durationSeconds = Math.floor(song.get().durationMs / 1000) % 60;
    let elapsedSecondsText = String(elapsedSeconds);
    let durationSecondsText = String(durationSeconds);
    if (elapsedSeconds < 10) {
      elapsedSecondsText = `0${elapsedSeconds}`;
    }
    if (durationSeconds < 10) {
      durationSecondsText = `0${durationSeconds}`;
    }
    return `${elapsedMinutes}:${elapsedSecondsText} / ${durationMinutes}:${durationSecondsText}`;
  });

  onSetup(() => {
    const syncSession = () => {
      let currentSession = session.get();
      let resetSession = false;
      let changed = false;

      if (currentSession === null) {
        resetSession = true;
      }
      if (
        currentSession !== null &&
        !Number.isInteger(currentSession.songIndex)
      ) {
        resetSession = true;
      }
      if (currentSession !== null && currentSession.songIndex < 0) {
        resetSession = true;
      }
      if (currentSession !== null && currentSession.songIndex >= songs.length) {
        resetSession = true;
      }
      if (
        currentSession !== null &&
        !Number.isFinite(currentSession.startedAt)
      ) {
        resetSession = true;
      }
      if (
        currentSession !== null &&
        !Number.isFinite(currentSession.durationMs)
      ) {
        resetSession = true;
      }
      if (resetSession) {
        const songIndex = Math.floor(Math.random() * songs.length);
        const currentSong = songs[songIndex];
        currentSession = {
          songIndex,
          startedAt:
            Date.now() -
            1000 -
            Math.floor(
              Math.random() * Math.min(currentSong.durationMs - 1000, 90000)
            ),
          durationMs: currentSong.durationMs,
        };
        changed = true;
      }
      if (currentSession === null) {
        return;
      }

      if (
        currentSession.durationMs !== songs[currentSession.songIndex].durationMs
      ) {
        currentSession = {
          songIndex: currentSession.songIndex,
          startedAt: currentSession.startedAt,
          durationMs: songs[currentSession.songIndex].durationMs,
        };
        changed = true;
      }

      let elapsed = Date.now() - currentSession.startedAt;
      while (elapsed >= currentSession.durationMs) {
        let songIndex = Math.floor(Math.random() * songs.length);
        while (songIndex === currentSession.songIndex) {
          songIndex = Math.floor(Math.random() * songs.length);
        }
        currentSession = {
          songIndex,
          startedAt: currentSession.startedAt + currentSession.durationMs,
          durationMs: songs[songIndex].durationMs,
        };
        elapsed = Date.now() - currentSession.startedAt;
        changed = true;
      }

      if (changed) {
        session.set(currentSession);
      }
    };

    syncSession();
    now.set(Date.now());
    const interval = window.setInterval(() => {
      now.set(Date.now());
      syncSession();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  });

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>What I'm listening</span>
      </div>

      <div class={classes.main}>
        <div class={classes.artwork}>
          <img src={image} alt={title} />
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
          <div class={classes.time}>{time}</div>
        </div>
      </div>
    </div>
  );
}
