import { onSetup, type Cell, type SourceCell } from "retend";

export interface ViewerAnimation {
  rx: number;
  ry: number;
  rz: number;
  scale: number;
}

interface UseViewerControlsParams {
  rx: SourceCell<number>;
  ry: SourceCell<number>;
  rz: SourceCell<number>;
  scale: SourceCell<number>;
  vx: SourceCell<number>;
  vy: SourceCell<number>;
  isDragging: SourceCell<boolean>;
  animateTo: SourceCell<ViewerAnimation | null>;
  isAutoRotating: SourceCell<boolean>;
  isEnabled: Cell<boolean>;
  sensitivity: number;
  zoomSensitivity: number;
  damping: number;
}

interface ViewerHandlers {
  handlePointerDown: (e: PointerEvent) => void;
  handlePointerMove: (e: PointerEvent) => void;
  handlePointerUp: (e: PointerEvent) => void;
  handlePointerLeave: (e: PointerEvent) => void;
  handleWheel: (e: WheelEvent) => void;
}

export function useViewerControls(
  params: UseViewerControlsParams
): ViewerHandlers {
  const {
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
  } = params;

  const pointers = new Map<number, { x: number; y: number }>();
  let lastPinchDist = 0;
  let lastMoveTime = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if (!isEnabled.get()) return;
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    isDragging.set(true);
    animateTo.set(null);
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
    if (!isEnabled.get()) return;
    if (!pointers.has(e.pointerId)) return;

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
    if (!isEnabled.get()) return;
    pointers.delete(e.pointerId);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    if (pointers.size === 0) {
      isDragging.set(false);
      if (Date.now() - lastMoveTime > 50) {
        vx.set(0);
        vy.set(0);
      }
    }
    lastPinchDist = 0;
  };

  const handlePointerLeave = (e: PointerEvent) => {
    if (!isEnabled.get()) return;
    if (pointers.has(e.pointerId)) {
      handlePointerUp(e);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (!isEnabled.get()) return;
    e.preventDefault();
    scale.set(
      Math.max(0.2, Math.min(3, scale.get() - e.deltaY * zoomSensitivity))
    );
  };

  onSetup(() => {
    let animationFrame: number;
    const animate = () => {
      const target = animateTo.get();
      if (target !== null) {
        const nextRx = rx.get() + (target.rx - rx.get()) * 0.12;
        const nextRy = ry.get() + (target.ry - ry.get()) * 0.12;
        const nextRz = rz.get() + (target.rz - rz.get()) * 0.12;
        const nextScale = scale.get() + (target.scale - scale.get()) * 0.12;
        vx.set(0);
        vy.set(0);
        rx.set(nextRx);
        ry.set(nextRy);
        rz.set(nextRz);
        scale.set(nextScale);
        if (
          Math.abs(target.rx - nextRx) < 0.1 &&
          Math.abs(target.ry - nextRy) < 0.1 &&
          Math.abs(target.rz - nextRz) < 0.1 &&
          Math.abs(target.scale - nextScale) < 0.001
        ) {
          rx.set(target.rx);
          ry.set(target.ry);
          rz.set(target.rz);
          scale.set(target.scale);
          animateTo.set(null);
        }
      } else if (isAutoRotating.get()) {
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

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    handleWheel,
  };
}
