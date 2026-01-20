import { Cell, type SourceCell, useSetupEffect } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./Viewer.module.css";

export interface ViewerProps {
  children?: JSX.Element;
  rx?: SourceCell<number>;
  ry?: SourceCell<number>;
  rz?: SourceCell<number>;
  scale?: SourceCell<number>;
  isDragging?: SourceCell<boolean>;
  isAutoRotating?: SourceCell<boolean>;
  class?: string | (string | Record<string, boolean | Cell<boolean>>)[];
  initialRx?: number;
  initialRy?: number;
  initialRz?: number;
  initialScale?: number;
  sensitivity?: number;
  zoomSensitivity?: number;
  damping?: number;
}

export function Viewer(props: ViewerProps) {
  const initialRx = props.initialRx ?? 0;
  const initialRy = props.initialRy ?? 0;
  const initialRz = props.initialRz ?? 0;
  const initialScale = props.initialScale ?? 1;
  const sensitivity = props.sensitivity ?? 0.4;
  const zoomSensitivity = props.zoomSensitivity ?? 0.001;
  const damping = props.damping ?? 0.92;

  const rx = props.rx || Cell.source(initialRx);
  const ry = props.ry || Cell.source(initialRy);
  const rz = props.rz || Cell.source(initialRz);
  const scale = props.scale || Cell.source(initialScale);
  const isDragging = props.isDragging || Cell.source(false);
  const isAutoRotating = props.isAutoRotating || Cell.source(false);

  const vx = Cell.source(0);
  const vy = Cell.source(0);

  const pointers = new Map<number, { x: number; y: number }>();
  let lastPinchDist = 0;
  let lastMoveTime = 0;

  const handlePointerDown = (e: PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    isDragging.set(true);
    // Reset velocity on grab to stop existing momentum
    vx.set(0);
    vy.set(0);
    lastMoveTime = Date.now();

    if (pointers.size === 2) {
      const points = Array.from(pointers.values());
      const p1 = points[0];
      const p2 = points[1];
      if (p1 && p2) {
        lastPinchDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      }
    }
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;

    // Track time of last move to avoid "fling after hold"
    lastMoveTime = Date.now();

    if (pointers.size === 1) {
      const prev = pointers.get(e.pointerId);
      if (!prev) return;

      const deltaX = e.clientX - prev.x;
      const deltaY = e.clientY - prev.y;

      const dx = deltaX * sensitivity;
      const dy = deltaY * sensitivity;

      ry.set(ry.get() + dx);
      rx.set(rx.get() - dy);

      vx.set(dy);
      vy.set(dx);

      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    } else if (pointers.size === 2) {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      const points = Array.from(pointers.values());
      const p1 = points[0];
      const p2 = points[1];

      if (p1 && p2) {
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const delta = dist - lastPinchDist;
        scale.set(Math.max(0.2, Math.min(3, scale.get() + delta * 0.01)));
        lastPinchDist = dist;
      }
    }
  };

  const handlePointerUp = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    if (pointers.size === 0) {
      isDragging.set(false);
      // If user held the pointer still for >50ms before releasing, kill momentum
      if (Date.now() - lastMoveTime > 50) {
        vx.set(0);
        vy.set(0);
      }
    }
    lastPinchDist = 0;
  };

  const handlePointerLeave = (e: PointerEvent) => {
    if (pointers.has(e.pointerId)) {
      handlePointerUp(e);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    scale.set(
      Math.max(0.2, Math.min(3, scale.get() - e.deltaY * zoomSensitivity)),
    );
  };

  useSetupEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (isAutoRotating.get()) {
        ry.set(ry.get() + 0.5);
      } else if (!isDragging.get()) {
        if (Math.abs(vx.get()) > 0.01 || Math.abs(vy.get()) > 0.01) {
          rx.set(rx.get() - vx.get());
          ry.set(ry.get() + vy.get());
          vx.set(vx.get() * damping);
          vy.set(vy.get() * damping);
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  });

  const transform = Cell.derived(() => {
    return `scale(${scale.get()}) rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  return (
    <div
      class={[
        classes.viewer,
        { [classes.viewerDragging]: isDragging },
        props.class,
      ]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onWheel={handleWheel}
    >
      <div class={classes.scene}>
        <div style={{ transform, transformStyle: "preserve-3d" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
