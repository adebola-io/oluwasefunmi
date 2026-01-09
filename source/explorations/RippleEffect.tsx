import { Cell, For } from "retend";
import { Link } from "retend/router";
import { useWindowSize } from "retend-utils/hooks";
import classes from "./RippleEffect.module.css";

interface BoxProps {
  rows: Cell<number>;
  cols: Cell<number>;
  color: Cell<string>;
  index: Cell<number>;
  onClick: (row: number, column: number) => void;
  clicked: Cell<[number, number]>;
}

interface AnimationQueueOptions {
  keyframes: PropertyIndexedKeyframes;
  duration: number;
  delay: number;
  fill: FillMode;
}

class AnimationQueue {
  #ref: Cell<HTMLButtonElement | null>;
  #queue: AnimationQueueOptions[] = [];
  #isProcessing = false;

  constructor(ref: Cell<HTMLButtonElement | null>) {
    this.#ref = ref;
  }

  push(animation: AnimationQueueOptions) {
    this.#queue.push(animation);
    this.#process();
  }

  async #process() {
    if (this.#isProcessing) return;
    this.#isProcessing = true;

    while (true) {
      const nextAnimation = this.#queue.shift();
      if (!nextAnimation) break;
      const button = this.#ref.peek();
      if (button) {
        const { keyframes, ...options } = nextAnimation;
        const animation = button.animate(keyframes, options);
        await animation.finished.finally(() => {});
      }
    }

    this.#isProcessing = false;
  }
}

const RippleButton = (props: BoxProps) => {
  const { cols, index, onClick, clicked, color } = props;
  const buttonRef = Cell.source<HTMLButtonElement | null>(null);
  const queue = new AnimationQueue(buttonRef);

  const col = Cell.derived(() => {
    return (index.get() % cols.get()) + 1;
  });

  const row = Cell.derived(() => {
    return Math.floor(index.get() / cols.get()) + 1;
  });

  const euclidDistanceFromClick = Cell.derived(() => {
    const [clickedRow, clickedCol] = clicked.get();
    return Math.floor(
      Math.sqrt((row.get() - clickedRow) ** 2 + (col.get() - clickedCol) ** 2)
    );
  });

  const delay = Cell.derived(() => {
    return euclidDistanceFromClick.get() * 30;
  });

  const handleClick = () => {
    onClick(row.get(), col.get());
  };

  color.listen((nextColor) => {
    queue.push({
      keyframes: {
        backgroundColor: nextColor,
        transform: ["scale(0.9)", "scale(1.1)", "scale(1)"],
      },
      delay: delay.get(),
      duration: 100,
      fill: "forwards",
    });
  });

  return (
    <button
      ref={buttonRef}
      type="button"
      class={classes.rippleButtonContainer}
      onPointerDown={handleClick}
    />
  );
};

const colors = [
  "#2a2a2a",
  "#404040",
  "#525252",
  "#2F4F4F",
  "#4A3B3B",
  "#3B4A3F",
  "#2C3E50",
  "#483D8B",
  "#556B2F",
];

const BOX_SIZE = 48;
const GAP = 3;

const RippleEffect = () => {
  const { width, height } = useWindowSize();

  const cols = Cell.derived(() => {
    const availableWidth = Math.min(width.get() - 64, 1200);
    return Math.max(5, Math.floor(availableWidth / (BOX_SIZE + GAP)));
  });

  const rows = Cell.derived(() => {
    const availableHeight = height.get() - 200;
    return Math.max(5, Math.floor(availableHeight / (BOX_SIZE + GAP)));
  });

  const clicked = Cell.source<[number, number]>([0, 0]);
  const currentColorIndex = Cell.source(0);
  const color = Cell.derived(() => {
    return colors[currentColorIndex.get()];
  });

  const boxes = Cell.derived(() => {
    return Array(rows.get() * cols.get()).fill(0);
  });
  const gridTemplate = Cell.derived(() => {
    return `repeat(${rows.get()}, 1fr) / repeat(${cols.get()}, 1fr)`;
  });
  const handleClick = (row: number, column: number) => {
    clicked.set([row, column]);
    currentColorIndex.set((currentColorIndex.get() + 1) % colors.length);
  };

  return (
    <div class={classes.app}>
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
          href="/explorations"
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
          back to explorations
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
          Ripple Effect
        </h1>
      </header>
      <div class={classes.rippleContainer} style={{ gridTemplate }}>
        {For(boxes, (_, index) => (
          <RippleButton
            index={index}
            rows={rows}
            cols={cols}
            clicked={clicked}
            color={color}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;
