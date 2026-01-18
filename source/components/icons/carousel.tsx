import type { JSX } from "retend/jsx-runtime";

export const CarouselIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <title>Carousel</title>
    <rect x="2" y="14" width="20" height="8" rx="2" stroke-opacity="0.5" />
    <rect x="4" y="8" width="16" height="8" rx="2" stroke-opacity="0.8" />
    <rect x="6" y="2" width="12" height="8" rx="2" />
  </svg>
);
