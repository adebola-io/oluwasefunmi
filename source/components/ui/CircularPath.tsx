import type { JSX } from "retend/jsx-runtime";
import classes from "./CircularPath.module.css";
import { useDerivedValue } from "retend-utils/hooks";
import { Cell, For } from "retend";

interface CircularPathProps extends JSX.BaseContainerProps {
  speed?: JSX.ValueOrCell<string>;
  length?: JSX.ValueOrCell<number>;
  text: JSX.ValueOrCell<string>;
}

export const CircularPath = (props: CircularPathProps) => {
  const {
    speed = "7s",
    length: lengthProp = 450,
    text: textProp,
    children,
    ...rest
  } = props;

  const length = useDerivedValue(lengthProp);
  const text = useDerivedValue(textProp);
  const parts = Cell.derived(() => {
    return text.get().split("");
  });
  const count = Cell.derived(() => {
    return parts.get().length;
  });

  const style = {
    "--circ-path-speed": speed,
    "--circ-path-length": length,
    "--circ-count": count,
  };

  return (
    <div {...rest} style={style} class={[classes.container, rest.class]}>
      {For(parts, (part, i) => {
        return (
          <div style={{ "--i": i }} class={classes.letter}>
            <div class={classes.letterMain}>{part}</div>
            <div class={classes.letterBackface}>{part}</div>
          </div>
        );
      })}
    </div>
  );
};
