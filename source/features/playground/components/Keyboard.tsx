import { Box } from "@/features/playground/experiments/Box";
import classes from "./Keyboard.module.css";
import { useWindowSize } from "retend-utils/hooks";
import { Cell, For, If, onSetup, type SourceCell } from "retend";

import { playClick } from "./KeyboardSounds";

interface KeyData {
  shiftName?: string;
  name: string;
  width?: number;
  height?: number;
}

const GAP_X = 8;
const GAP_Y = 6;

const KEYS: KeyData[][] = [
  // Row 0: Function keys (14 keys)
  [
    { name: "esc", width: 1.6, height: 0.55 },
    { name: "F1", height: 0.55 },
    { name: "F2", height: 0.55 },
    { name: "F3", height: 0.55 },
    { name: "F4", height: 0.55 },
    { name: "F5", height: 0.55 },
    { name: "F6", height: 0.55 },
    { name: "F7", height: 0.55 },
    { name: "F8", height: 0.55 },
    { name: "F9", height: 0.55 },
    { name: "F10", height: 0.55 },
    { name: "F11", height: 0.55 },
    { name: "F12", height: 0.55 },
    { name: "⏻", width: 1.6, height: 0.55 },
  ],
  // Row 1: Numbers (14 keys)
  [
    { name: "`", shiftName: "~" },
    { name: "1", shiftName: "!" },
    { name: "2", shiftName: "@" },
    { name: "3", shiftName: "#" },
    { name: "4", shiftName: "$" },
    { name: "5", shiftName: "%" },
    { name: "6", shiftName: "^" },
    { name: "7", shiftName: "&" },
    { name: "8", shiftName: "*" },
    { name: "9", shiftName: "(" },
    { name: "0", shiftName: ")" },
    { name: "-", shiftName: "_" },
    { name: "=", shiftName: "+" },
    { name: "delete", width: 1.6 },
  ],
  // Row 2: QWERTY (14 keys)
  [
    { name: "tab", width: 1.6 },
    { name: "Q" },
    { name: "W" },
    { name: "E" },
    { name: "R" },
    { name: "T" },
    { name: "Y" },
    { name: "U" },
    { name: "I" },
    { name: "O" },
    { name: "P" },
    { name: "[", shiftName: "{" },
    { name: "]", shiftName: "}" },
    { name: "\\", shiftName: "|", width: 1.6 },
  ],
  // Row 3: Home row (13 keys)
  [
    { name: "caps", width: 1.85 },
    { name: "A" },
    { name: "S" },
    { name: "D" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
    { name: ";", shiftName: ":" },
    { name: "'", shiftName: '"' },
    { name: "return", width: 1.85 },
  ],
  // Row 4: Shift row (12 keys)
  [
    { name: "shift", width: 2.45 },
    { name: "Z" },
    { name: "X" },
    { name: "C" },
    { name: "V" },
    { name: "B" },
    { name: "N" },
    { name: "M" },
    { name: ",", shiftName: "<" },
    { name: ".", shiftName: ">" },
    { name: "/", shiftName: "?" },
    { name: "shift", width: 2.45 },
  ],
  // Row 5: Bottom row (10 keys)
  [
    { name: "fn" },
    { name: "ctrl" },
    { name: "opt" },
    { name: "cmd", width: 1.3 },
    { name: "", width: 5.4 },
    { name: "cmd", width: 1.3 },
    { name: "opt" },
    { name: "←" },
    { name: "↑↓" },
    { name: "→" },
  ],
];

// Pre-compute row metadata for layout calculations
interface RowMetadata {
  totalUnits: number;
  numKeys: number;
  rowHeight: number;
}

const ROW_METADATA: RowMetadata[] = KEYS.map((row) => {
  const totalUnits = row.reduce((sum, key) => sum + (key.width || 1), 0);
  const rowHeight = row[0]?.height || 1;
  return { totalUnits, numKeys: row.length, rowHeight };
});

interface KeyboardColors {
  body: string;
  secondaryBody: string;
  key: string;
  secondaryKey: string;
  text: string;
}

interface KeyProps {
  data: KeyData;
  rowIndex: Cell<number>;
  contentWidth: Cell<number>;
  baseKeyHeight: Cell<number>;
  colors: Cell<KeyboardColors>;
  mode: Cell<"view" | "type">;
  pressedKeys: Cell<Set<string>>;
  keyDepth: Cell<number>;
}

const checkIsPhysicallyPressed = (
  name: string,
  shiftName: string | undefined,
  pressedKeys: Set<string>
): boolean => {
  const lowerName = name.toLowerCase();
  const lowerShiftName = shiftName?.toLowerCase();

  if (lowerName === "" && pressedKeys.has(" ")) return true;
  if (lowerName === "return" && pressedKeys.has("enter")) return true;
  if (lowerName === "delete" && pressedKeys.has("backspace")) return true;
  if (lowerName === "esc" && pressedKeys.has("escape")) return true;
  if (lowerName === "ctrl" && pressedKeys.has("control")) return true;
  if (lowerName === "opt" && pressedKeys.has("alt")) return true;
  if (lowerName === "cmd" && pressedKeys.has("meta")) return true;
  if (lowerName === "←" && pressedKeys.has("arrowleft")) return true;
  if (lowerName === "→" && pressedKeys.has("arrowright")) return true;
  if (
    lowerName === "↑↓" &&
    (pressedKeys.has("arrowup") || pressedKeys.has("arrowdown"))
  ) {
    return true;
  }
  return (
    pressedKeys.has(lowerName) ||
    (lowerShiftName !== undefined && pressedKeys.has(lowerShiftName))
  );
};

const useKeyPointerEvents = (
  containerRef: Cell<HTMLElement | null>,
  isPointerPressed: SourceCell<boolean>,
  mode: Cell<"view" | "type">
) => {
  const handlePointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    isPointerPressed.set(true);
    playClick();
  };

  const handlePointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    isPointerPressed.set(false);
  };

  const handlePointerLeave = (e: PointerEvent) => {
    e.stopPropagation();
    isPointerPressed.set(false);
  };

  const handlePointerCancel = (e: PointerEvent) => {
    e.stopPropagation();
    isPointerPressed.set(false);
  };

  const updateMode = (newMode: "view" | "type") => {
    const container = containerRef.get();
    if (!container) return;
    if (newMode === "type") {
      container.addEventListener("pointerdown", handlePointerDown);
      container.addEventListener("pointerup", handlePointerUp);
      container.addEventListener("pointerleave", handlePointerLeave);
      container.addEventListener("pointercancel", handlePointerCancel);
    } else {
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("pointercancel", handlePointerCancel);
    }
  };

  onSetup(() => {
    updateMode(mode.get());
  });

  mode.listen(updateMode);
};

const Key = (props: KeyProps) => {
  const {
    data,
    rowIndex,
    contentWidth,
    baseKeyHeight,
    colors,
    mode,
    pressedKeys,
    keyDepth,
  } = props;
  const isPointerPressed = Cell.source(false);
  const containerRef = Cell.source<HTMLDivElement | null>(null);
  const rowMeta = Cell.derived(() => ROW_METADATA[rowIndex.get()]);
  const isPhysicallyPressed = Cell.derived(() =>
    checkIsPhysicallyPressed(data.name, data.shiftName, pressedKeys.get())
  );
  const isPressed = Cell.derived(
    () => isPointerPressed.get() || isPhysicallyPressed.get()
  );
  const width = Cell.derived(() => {
    const totalGapSpace = (rowMeta.get().numKeys - 1) * GAP_X;
    const availableForKeys = contentWidth.get() - totalGapSpace;
    return ((data.width || 1) / rowMeta.get().totalUnits) * availableForKeys;
  });
  const height = Cell.derived(() => (data.height || 1) * baseKeyHeight.get());
  const keyColor = Cell.derived(() =>
    isPressed.get() ? colors.get().secondaryKey : colors.get().key
  );
  const secondaryKeyColor = Cell.derived(() => colors.get().secondaryKey);
  const textColor = Cell.derived(() => colors.get().text);
  const fontSize = Cell.derived(() => {
    const base = Math.min(width.get(), height.get()) * 0.25;
    return Math.max(7, Math.min(24, base));
  });
  const curve = Cell.derived(() =>
    Math.max(3, Math.min(10, baseKeyHeight.get() * 0.12))
  );
  const keyTransform = Cell.derived(() =>
    isPressed.get()
      ? `translateZ(-${keyDepth.get() * 0.8}px)`
      : "translateZ(0px)"
  );
  const fontSizeStyle = Cell.derived(() => `${fontSize.get()}px`);
  const borderRadiusStyle = Cell.derived(() => `${curve.get()}px`);
  const shiftNameFontSizeStyle = Cell.derived(
    () => `${fontSize.get() * 0.85}px`
  );

  useKeyPointerEvents(containerRef, isPointerPressed, mode);

  return (
    <div ref={containerRef} class={classes.keyWrapper}>
      <Box
        width={width}
        height={height}
        depth={keyDepth}
        curve={curve}
        color={keyColor}
        secondaryColor={secondaryKeyColor}
        style={{
          transform: keyTransform,
          transition:
            "transform 0.05s ease-out, background-color 0.05s ease-out",
        }}
        renderBack={false}
        backBehindClass={classes.keyBackBehind}
        frontClass={classes.keyFront}
      >
        <div
          class="flex flex-col justify-center items-center h-full w-full px-0.5 py-1 font-medium select-none leading-none border border-[#00000025]"
          style={{
            color: textColor,
            fontSize: fontSizeStyle,
            borderRadius: borderRadiusStyle,
          }}
        >
          {If(data.shiftName, () => (
            <span
              class="mb-0.5 opacity-80"
              style={{
                fontSize: shiftNameFontSizeStyle,
              }}
            >
              {data.shiftName}
            </span>
          ))}
          <span>{data.name}</span>
        </div>
      </Box>
    </div>
  );
};

const useKeyboardEvents = (pressedKeys: SourceCell<Set<string>>) => {
  onSetup(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      playClick();
      const next = new Set(pressedKeys.get());
      next.add(e.key.toLowerCase());
      pressedKeys.set(next);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const next = new Set(pressedKeys.get());
      next.delete(e.key.toLowerCase());
      pressedKeys.set(next);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
};

interface KeyboardProps {
  mode: Cell<"view" | "type">;
  colors: Cell<KeyboardColors>;
}

const Keyboard = (props: KeyboardProps) => {
  const { colors, mode } = props;
  const { width } = useWindowSize();
  const pressedKeys = Cell.source(new Set<string>());

  const keyboardWidth = Cell.derived(() => {
    return Math.min(width.get() * 0.9, 1200);
  });

  const paddingX = Cell.derived(() => (width.get() < 600 ? 10 : 20));
  const paddingY = Cell.derived(() => (width.get() < 600 ? 14 : 24));

  const contentWidth = Cell.derived(() => {
    return keyboardWidth.get() - 2 * paddingX.get();
  });

  const baseKeyHeight = Cell.derived(() => {
    const refRow = ROW_METADATA[1];
    const totalGapSpace = (refRow.numKeys - 1) * GAP_Y;
    const availableForKeys = contentWidth.get() - totalGapSpace;
    const singleKeyWidth = availableForKeys / refRow.totalUnits;
    return singleKeyWidth * 1.05;
  });

  const keyboardHeight = Cell.derived(() => {
    const totalRowHeights = ROW_METADATA.reduce(
      (sum, meta) => sum + meta.rowHeight * baseKeyHeight.get(),
      0
    );
    const totalRowGaps = (KEYS.length - 1) * GAP_Y;
    return totalRowHeights + totalRowGaps + 2 * paddingY.get();
  });

  const bodyColor = Cell.derived(() => colors.get().body);
  const secondaryBodyColor = Cell.derived(() => colors.get().secondaryBody);

  const keyDepth = Cell.derived(() => (width.get() < 600 ? 5 : 12));
  const keyboardDepth = Cell.derived(() => (width.get() < 600 ? 10 : 20));
  const keyboardCurve = Cell.derived(() => (width.get() < 600 ? 8 : 20));

  const paddingXStyle = Cell.derived(() => `${paddingX.get()}px`);
  const paddingYStyle = Cell.derived(() => `${paddingY.get()}px`);

  useKeyboardEvents(pressedKeys);

  return (
    <div
      class={classes.container}
      style={{
        "--padding-x": paddingXStyle,
        "--padding-y": paddingYStyle,
        "--gap": `${GAP_X}px`,
      }}
    >
      <Box
        depth={keyboardDepth}
        curve={keyboardCurve}
        width={keyboardWidth}
        height={keyboardHeight}
        color={bodyColor}
        secondaryColor={secondaryBodyColor}
        class={classes.keyboardSolid}
        frontClass={classes.keyboardSolidFront}
        back={() => (
          <div class={classes.keyboardBack}>
            <div style={{ gridArea: "c" }} class={classes.backInfo}>
              <p>RETEND KEYBOARD</p>
              <p>Designed in Neverland</p>
              <p>Model A1234</p>
            </div>
          </div>
        )}
      />
      <div class={classes.keyboard}>
        {For(KEYS, (row, rowIndex) => (
          <div key={rowIndex} class={classes.keyboardRow}>
            {For(row, (key) => (
              <Key
                mode={mode}
                data={key}
                rowIndex={rowIndex}
                contentWidth={contentWidth}
                baseKeyHeight={baseKeyHeight}
                colors={colors}
                pressedKeys={pressedKeys}
                keyDepth={keyDepth}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
