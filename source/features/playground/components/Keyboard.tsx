import { Box } from "@/features/playground/experiments/Box";
import classes from "./Keyboard.module.css";
import { useWindowSize } from "retend-utils/hooks";
import { Cell, For } from "retend";

interface KeyData {
  shiftName?: string;
  shiftPosition?: "start" | "center" | "end";
  name: string;
  square?: true;
}

const KEYS: KeyData[][] = [
  [
    { name: "Esc" },
    { name: "F1" },
    { name: "F2" },
    { name: "F3" },
    { name: "F4" },
    { name: "F5" },
    { name: "F6" },
    { name: "F7" },
    { name: "F8" },
    { name: "F9" },
    { name: "F10" },
    { name: "F11" },
    { name: "F12" },
    { name: "Delete" },
  ],
  [
    { name: "~", square: true },
    { name: "!", square: true },
    { name: "@", square: true },
    { name: "#", square: true },
    { name: "$", square: true },
    { name: "%", square: true },
    { name: "^", square: true },
    { name: "&", square: true },
    { name: "*", square: true },
    { name: "(", square: true },
    { name: ")", square: true },
    { name: "_", square: true },
    { name: "+", square: true },
    { name: "Backspace" },
  ],
];

interface KeyProps {
  data: KeyData;
  row: KeyData[];
  keyboardWidth: Cell<number>;
}

const Key = (props: KeyProps) => {
  const { data, row, keyboardWidth } = props;

  const keyWidth = Cell.derived(() => {
    return Math.floor(keyboardWidth.get() / row.length) - 10;
  });

  return (
    <Box
      width={keyWidth}
      height={data.square ? keyWidth : 30}
      depth={10}
      curve={10}
      color="#1a1a1a"
      class={classes.key}
    >
      <div class="grid px-2 py-1 text-[69%] text-white/50 font-medium select-none">
        {data.name}
      </div>
    </Box>
  );
};

const Keyboard = () => {
  const { width } = useWindowSize();
  const keyboardWidth = Cell.derived(() => {
    return Math.min(width.get() * 0.8, 1000);
  });

  const rowSize = Cell.derived(() => {
    return (keyboardWidth.get() - 40) / 14.5;
  });

  const keyboardHeight = Cell.derived(() => {
    return rowSize.get() * 6 + 40; // 6 rows + padding
  });

  return (
    <div class={classes.container}>
      <Box
        depth={30}
        width={keyboardWidth}
        height={keyboardHeight}
        color="#252424"
        class={classes.keyboardSolid}
      />
      <div class={classes.keyboard}>
        {For(KEYS, (row, rowIndex) => (
          <div key={rowIndex} class={classes.keyboardRow}>
            {For(row, (key) => (
              <Key data={key} row={row} keyboardWidth={keyboardWidth} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
