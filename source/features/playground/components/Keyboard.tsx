import { Box } from "@/features/playground/experiments/Box";
import classes from "./Keyboard.module.css";
import { useWindowSize } from "retend-utils/hooks";
import { Cell, For, If } from "retend";

interface KeyData {
  shiftName?: string;
  name: string;
  width?: number;
  height?: number;
  square?: boolean;
}

const KEYS: KeyData[][] = [
  [
    { name: "esc", width: 1.5, height: 0.6 },
    { name: "F1", height: 0.6 },
    { name: "F2", height: 0.6 },
    { name: "F3", height: 0.6 },
    { name: "F4", height: 0.6 },
    { name: "F5", height: 0.6 },
    { name: "F6", height: 0.6 },
    { name: "F7", height: 0.6 },
    { name: "F8", height: 0.6 },
    { name: "F9", height: 0.6 },
    { name: "F10", height: 0.6 },
    { name: "F11", height: 0.6 },
    { name: "F12", height: 0.6 },
    { name: "lock", width: 2, height: 0.6 },
  ],
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
    { name: "delete", width: 2.5 },
  ],
  [
    { name: "tab", width: 1.5 },
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
    { name: "\\", shiftName: "|", width: 2 },
  ],
  [
    { name: "caps lock", width: 2 },
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
    { name: "return", width: 2.75 },
  ],
  [
    { name: "shift", width: 2.25 },
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
    { name: "shift", width: 3.25 },
  ],
  [
    { name: "fn" },
    { name: "control" },
    { name: "option" },
    { name: "command", width: 2 },
    { name: " ", width: 4 }, // Space
    { name: "command", width: 2 },
    { name: "option" },
    { name: "←" },
    { name: "↑" },
    { name: "↓" },
    { name: "→" },
  ],
];

interface KeyboardColors {
  body: string;
  secondaryBody: string;
  key: string;
  secondaryKey: string;
  text: string;
}

interface KeyProps {
  data: KeyData;
  unitWidth: Cell<number>;
  colors: Cell<KeyboardColors>;
}
const Key = (props: KeyProps) => {
  const { data, unitWidth, colors } = props;

  const width = Cell.derived(() => {
    return (data.width || 1) * unitWidth.get() - 8;
  });

  const height = Cell.derived(() => {
    return (data.height || 1) * unitWidth.get() - 6;
  });

  const keyColor = Cell.derived(() => colors.get().key);
  const secondaryKeyColor = Cell.derived(() => colors.get().secondaryKey);
  const textColor = Cell.derived(() => colors.get().text);

  const fontSize = Cell.derived(() =>
    Math.max(7, Math.min(10, unitWidth.get() * 0.3)),
  );

  const curve = Cell.derived(() => {
    return Math.max(2, Math.min(7, unitWidth.get() * 0.25));
  });

  return (
    <div class={classes.keyWrapper}>
      <Box
        width={width}
        height={height}
        depth={10}
        curve={curve}
        color={keyColor}
        secondaryColor={secondaryKeyColor}
        class={classes.key}
        renderBack={false}
        renderTop={false}
        renderBottom={false}
        renderLeft={false}
        renderRight={false}
        backBehindClass={classes.keyBackBehind}
      >
        <div
          class="flex flex-col justify-center items-center h-full w-full px-0.5 py-1 font-medium select-none leading-none border border-[#00000025]"
          style={{
            color: textColor,
            fontSize: Cell.derived(() => `${fontSize.get()}px`),
            borderRadius: Cell.derived(() => `${curve.get()}px`),
          }}
        >
          {If(data.shiftName, () => (
            <span
              class="mb-0.5 opacity-80"
              style={{
                fontSize: Cell.derived(() => `${fontSize.get() * 0.9}px`),
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

interface KeyboardProps {
  colors: Cell<KeyboardColors>;
}

const Keyboard = (props: KeyboardProps) => {
  const { colors } = props;
  const { width } = useWindowSize();

  const keyboardWidth = Cell.derived(() => {
    return Math.min(width.get() * (width.get() < 600 ? 0.98 : 0.9), 1400);
  });

  const paddingX = Cell.derived(() => (width.get() < 600 ? 5 : 20));

  const MAX_ROW_UNITS = 16;

  const unitWidth = Cell.derived(() => {
    const totalPadding = paddingX.get() * 2;
    return (keyboardWidth.get() - totalPadding) / MAX_ROW_UNITS;
  });

  const keyboardHeight = Cell.derived(() => {
    return 5.6 * unitWidth.get() + 54;
  });

  const bodyColor = Cell.derived(() => colors.get().body);
  const secondaryBodyColor = Cell.derived(() => colors.get().secondaryBody);

  return (
    <div
      class={classes.container}
      style={{ "--padding-x": Cell.derived(() => `${paddingX.get()}px`) }}
    >
      <Box
        depth={20}
        curve={20}
        width={keyboardWidth}
        height={keyboardHeight}
        color={bodyColor}
        secondaryColor={secondaryBodyColor}
        class={classes.keyboardSolid}
        frontClass={classes.keyboardSolidFront}
      />
      <div class={classes.keyboard}>
        {For(KEYS, (row, rowIndex) => (
          <div key={rowIndex} class={classes.keyboardRow}>
            {For(row, (key) => (
              <Key data={key} unitWidth={unitWidth} colors={colors} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
