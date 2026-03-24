import { Cell, For, onSetup } from "retend";
import { useLocalStorage } from "retend-utils/hooks";
import { ClientOnly } from "retend-server";
import { songs } from "@/data/music";
import classes from "./MusicWidget.module.css";

const BARS = Array.from({ length: 30 }, (_, i) => i);

interface ListeningSession {
  [key: string]: number;
  songIndex: number;
  startedAt: number;
  durationMs: number;
}

function getSong(session: ListeningSession | null) {
  if (session === null) {
    return songs[0];
  }
  if (!Number.isInteger(session.songIndex)) {
    return songs[0];
  }
  if (session.songIndex < 0) {
    return songs[0];
  }
  if (session.songIndex >= songs.length) {
    return songs[0];
  }
  return songs[session.songIndex];
}

function formatTime(durationMs: number) {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor(durationMs / 1000) % 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function createSession(songIndex: number): ListeningSession {
  const song = songs[songIndex];
  return {
    songIndex,
    startedAt:
      Date.now() -
      1000 -
      Math.floor(Math.random() * Math.min(song.durationMs - 1000, 15000)),
    durationMs: song.durationMs,
  };
}

function syncSession(session: ListeningSession | null, now: number) {
  let currentSession = session;
  let changed = false;

  if (currentSession === null) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
  }
  if (!Number.isInteger(currentSession.songIndex)) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
  }
  if (currentSession.songIndex < 0) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
  }
  if (currentSession.songIndex >= songs.length) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
  }
  if (!Number.isFinite(currentSession.startedAt)) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
  }
  if (!Number.isFinite(currentSession.durationMs)) {
    currentSession = createSession(Math.floor(Math.random() * songs.length));
    changed = true;
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

  let elapsed = now - currentSession.startedAt;
  while (elapsed >= currentSession.durationMs) {
    let songIndex = Math.floor(Math.random() * songs.length);
    while (songs.length > 1 && songIndex === currentSession.songIndex) {
      songIndex = Math.floor(Math.random() * songs.length);
    }
    currentSession = {
      songIndex,
      startedAt: currentSession.startedAt + currentSession.durationMs,
      durationMs: songs[songIndex].durationMs,
    };
    elapsed = now - currentSession.startedAt;
    changed = true;
  }

  return { currentSession, changed };
}

export function MusicWidget() {
  const session = useLocalStorage<ListeningSession | null>(
    "music-widget-session",
    null
  );
  const now = Cell.source(Date.now());
  const song = Cell.derived(() => getSong(session.get()));
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
    return `${formatTime(currentTime)} / ${formatTime(song.get().durationMs)}`;
  });

  onSetup(() => {
    const update = () => {
      const currentNow = Date.now();
      const { currentSession, changed } = syncSession(
        session.get(),
        currentNow
      );
      now.set(currentNow);
      if (changed) {
        session.set(currentSession);
      }
    };

    update();
    const interval = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(interval);
    };
  });

  return (
    <div class={classes.widget}>
      <div class={classes.header}>What I'm listening</div>

      <ClientOnly>
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
          <div class={classes.controls}>{time}</div>
        </div>
      </ClientOnly>
    </div>
  );
}
