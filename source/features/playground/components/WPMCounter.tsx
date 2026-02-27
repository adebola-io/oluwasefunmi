import { Cell, If, onSetup } from "retend";

interface WPMCounterProps {
  show: Cell<boolean>;
}

export const WPMCounter = ({ show }: WPMCounterProps) => {
  const wpm = Cell.source(0);
  const startTime = Cell.source<number | null>(null);
  const charCount = Cell.source(0);
  const lastTypeTime = Cell.source<number>(Date.now());
  const isActive = Cell.source(false);

  onSetup(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!show.get()) return;
      // Ignore modifier keys only
      if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(e.key))
        return;

      const now = Date.now();
      lastTypeTime.set(now);
      isActive.set(true);

      if (!startTime.get()) {
        startTime.set(now);
        charCount.set(1);
      } else {
        // Reset if idle for more than 5 seconds
        if (now - lastTypeTime.get() > 5000) {
          startTime.set(now);
          charCount.set(1);
        } else {
          charCount.set(charCount.get() + 1);
        }
      }

      // Calculate WPM: (chars / 5) / (minutes)
      const start = startTime.get();
      if (start) {
        const durationMinutes = (now - start) / 60000;
        if (durationMinutes > 0) {
          const currentWpm = Math.round(charCount.get() / 5 / durationMinutes);
          if (currentWpm > 0 && currentWpm < 300) {
            // Sanity check
            wpm.set(currentWpm);
          }
        }
      }
    };

    const interval = setInterval(() => {
      if (!show.get()) return;
      const now = Date.now();
      // Reset after 3 seconds of inactivity
      if (now - lastTypeTime.get() > 3000 && isActive.get()) {
        isActive.set(false);
        startTime.set(null);
        charCount.set(0);
        wpm.set(0);
      }
    }, 1000);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  });

  return (
    <>
      {If(show, () => (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            padding: "10px 20px",
            borderRadius: "12px",
            color: "white",
            fontFamily: "monospace",
            fontSize: "24px",
            fontWeight: "bold",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 50,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
            WPM
          </span>
          {Cell.derived(() => wpm.get())}
        </div>
      ))}
    </>
  );
};
