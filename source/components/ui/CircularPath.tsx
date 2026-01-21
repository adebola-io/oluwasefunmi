import type { JSX } from "retend/jsx-runtime";
import classes from "./CircularPath.module.css";
import { useDerivedValue } from "retend-utils/hooks";
import { Cell, For } from "retend";

interface CircularPathProps extends JSX.BaseContainerProps {
  speed?: JSX.ValueOrCell<string>;
  text: JSX.ValueOrCell<string>;
}

export const CircularPath = (props: CircularPathProps) => {
  const {
    speed = "7s",
    text: textProp,
    children,
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

  const style = {
    "--circ-path-speed": speed,
    "--circ-count": count,
    ...(userStyle as any),
  };

  return (
    <div
      {...rest}
      style={style}
      title={text}
      class={[classes.container, rest.class]}
    >
      {For(parts, (part, i) => {
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
