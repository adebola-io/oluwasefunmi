import type { JSX } from "retend/jsx-runtime";
import classes from "./CircularPath.module.css";
import { useDerivedValue } from "retend-utils/hooks";
import { Cell, For } from "retend";

interface CircularPathProps extends JSX.BaseContainerProps {
  speed?: JSX.ValueOrCell<string>;
  text: JSX.ValueOrCell<string>;
}

interface LetterProps {
  part: string;
  index: Cell<number>;
  text: Cell<string>;
}

const Letter = (props: LetterProps) => {
  const { part, index, text } = props;
  const ref = Cell.source<HTMLElement | null>(null);

  text.listen(() => {
    const div = ref.get();
    if (!div) return;
    const animations = div.getAnimations();

    for (const animation of animations) {
      animation.cancel();
      animation.play();
    }
  });

  return (
    <div
      ref={ref}
      style={{ "--i": index, "--letter": `'${part}'` }}
      class={classes.letter}
    >
      <div class={classes.letterMain}>{part}</div>
    </div>
  );
};

export const CircularPath = (props: CircularPathProps) => {
  const {
    speed = "7s",
    text: textProp,
    children: _children,
    style: userStyle,
    ...rest
  } = props;

  const textRaw = useDerivedValue(textProp);
  const text = Cell.derived(() => {
    return `${textRaw.get()} `;
  });
  const parts = Cell.derived(() => {
    return text.get().split("");
  });
  const count = Cell.derived(() => {
    return parts.get().length;
  });

  const baseStyle = {
    "--circ-path-speed": speed,
    "--circ-count": count,
  };

  return (
    <div {...rest} style={userStyle} title={text} class={rest.class}>
      <div style={baseStyle} class={classes.container}>
        {For(parts, (part, i) => {
          return <Letter part={part} index={i} text={text} />;
        })}
      </div>
    </div>
  );
};
