import { Cell, useScopeContext } from "retend";
import { useDerivedValue } from "retend-utils/hooks";
import type { JSX } from "retend/jsx-runtime";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import classes from "./InfiniteCanvas.module.css";

interface InfiniteCanvasNodeProps extends JSX.BaseContainerProps {
  x?: JSX.ValueOrCell<string>;
  y?: JSX.ValueOrCell<string>;
  width?: JSX.ValueOrCell<string>;
  height?: JSX.ValueOrCell<string>;
}

export function InfiniteCanvasNode(props: InfiniteCanvasNodeProps) {
  const {
    children,
    x: xProp = "0px",
    y: yProp = "0px",
    width: widthProp = "20px",
    height: heightProp = "20px",
    ...rest
  } = props;
  const { cameraX, cameraY } = useScopeContext(InfiniteCanvasScope);
  const x = useDerivedValue(xProp);
  const y = useDerivedValue(yProp);
  const width = useDerivedValue(widthProp);
  const height = useDerivedValue(heightProp);

  const transform = Cell.derived(() => {
    const screenX = `calc(${x.get()} + ${cameraX.get()}px)`;
    const screenY = `calc(${y.get()} + ${cameraY.get()}px)`;
    return `translate3d(${screenX}, ${screenY}, 0)`;
  });

  const style = { transform, "--node-width": width, "--node-height": height };
  if (typeof rest.style === "object") {
    Object.assign(style, rest.style);
  }

  return (
    <div {...rest} style={style} class={[classes.node, rest.class]}>
      {children}
    </div>
  );
}
