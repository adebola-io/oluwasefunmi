export function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function mix(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

export function normalizeWheelDelta(event: WheelEvent) {
  const multiplier =
    event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 16
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? window.innerHeight
        : 1;

  return {
    x: event.deltaX * multiplier,
    y: event.deltaY * multiplier,
  };
}

export function wrap(value: number, size: number) {
  return ((value % size) + size) % size;
}
