import type { JSX } from "retend/jsx-runtime";
import classes from "./CircularPath.module.css";
import { useDerivedValue } from "retend-utils/hooks";
import { Cell, For } from "retend";

interface CircularPathProps extends JSX.BaseContainerProps {
  speed?: JSX.ValueOrCell<string>;
  text: JSX.ValueOrCell<string>;
}

export const CircularPath = (props: CircularPathProps) => {
  const { speed = "7s", text: textProp, children, ...rest } = props;

  const text = useDerivedValue(textProp);
  const parts = Cell.derived(() => {
    return text.get().split("");
  });
  const count = Cell.derived(() => {
    return parts.get().length;
  });

  const style = {
    "--circ-path-speed": speed,
    "--circ-path-length-px": length,
    "--circ-count": count,
  };

  return (
    <div
      {...rest}
      style={style}
      title={text}
      class={[classes.container, rest.class]}
    >
      {For(parts, (part, i) => {
        return (
          <div
            style={{ "--i": i, "--letter": `'${part}'` }}
            class={classes.letter}
          >
            <div class={classes.letterMain}>{part}</div>
          </div>
        );
      })}
    </div>
  );
};
