import type { JSX } from "retend/jsx-runtime";

export const ArrowIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    {...props}
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Arrow</title>
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
