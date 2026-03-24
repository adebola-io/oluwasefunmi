import { Cell, type SourceCell } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./Viewer.module.css";
import { useViewerControls, type ViewerAnimation } from "./useViewerControls";

export type { ViewerAnimation };

export interface ViewerProps {
  children?: JSX.Element;
  rx?: SourceCell<number>;
  ry?: SourceCell<number>;
  rz?: SourceCell<number>;
  scale?: SourceCell<number>;
  animateTo?: SourceCell<ViewerAnimation | null>;
  isDragging?: SourceCell<boolean>;
  isAutoRotating?: SourceCell<boolean>;
  isEnabled?: Cell<boolean>;
  class?: unknown;
  sceneClass?: unknown;
  initialRx?: number;
  initialRy?: number;
  initialRz?: number;
  initialScale?: number;
  sensitivity?: number;
  zoomSensitivity?: number;
  damping?: number;
}

export function Viewer(props: ViewerProps) {
  const {
    children,
    rx: propsRx,
    ry: propsRy,
    rz: propsRz,
    scale: propsScale,
    animateTo: propsAnimateTo,
    isDragging: propsIsDragging,
    isAutoRotating: propsIsAutoRotating,
    isEnabled: propsIsEnabled,
    class: propsClass,
    sceneClass,
    initialRx = 0,
    initialRy = 0,
    initialRz = 0,
    initialScale = 1,
    sensitivity = 0.4,
    zoomSensitivity = 0.001,
    damping = 0.92,
  } = props;

  const rx = propsRx || Cell.source(initialRx);
  const ry = propsRy || Cell.source(initialRy);
  const rz = propsRz || Cell.source(initialRz);
  const scale = propsScale || Cell.source(initialScale);
  const animateTo = propsAnimateTo ?? Cell.source<ViewerAnimation | null>(null);
  const isDragging = propsIsDragging || Cell.source(false);
  const isAutoRotating = propsIsAutoRotating || Cell.source(false);
  const isEnabled = propsIsEnabled || Cell.source(true);

  const vx = Cell.source(0);
  const vy = Cell.source(0);

  const transform = Cell.derived(() => {
    return `scale(${scale.get()}) rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    handleWheel,
  } = useViewerControls({
    rx,
    ry,
    rz,
    scale,
    vx,
    vy,
    isDragging,
    animateTo,
    isAutoRotating,
    isEnabled,
    sensitivity,
    zoomSensitivity,
    damping,
  });

  return (
    <div
      class={[
        classes.viewer,
        {
          [classes.viewerDragging]: isDragging,
          [classes.draggable]: isEnabled,
        },
        propsClass,
      ]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onWheel={handleWheel}
    >
      <div class={[classes.scene, sceneClass]}>
        <div
          style={{
            transform,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
