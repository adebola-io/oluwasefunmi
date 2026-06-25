import { Cell, useScopeContext } from "retend";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import classes from "./InfiniteCanvas.module.css";

interface InfiniteCanvasNodeProps extends JSX.BaseContainerProps {
  x?: JSX.ValueOrCell<number>;
  y?: JSX.ValueOrCell<number>;
}

export function InfiniteCanvasNode(props: InfiniteCanvasNodeProps) {
  const { children, x: xProp = 0, y: yProp = 0, ...rest } = props;
  const { cameraX, cameraY } = useScopeContext(InfiniteCanvasScope);
  const x = useDerivedValue(xProp);
  const y = useDerivedValue(yProp);

  const transform = Cell.derived(() => {
    const screenX = x.get() + cameraX.get();
    const screenY = y.get() + cameraY.get();

    return `translate3d(${screenX}px, ${screenY}px, 0)`;
  });

  const style = { transform };
  if (typeof rest.style === "object") {
    Object.assign(style, rest.style);
  }

  return (
    <div {...rest} style={style} class={[classes.node, rest.class]}>
      {children}
    </div>
  );
}
