import type { JSX } from "retend/jsx-runtime";

export const CubeIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <title>Cube</title>
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.27 6.96L12 12.01l8.73-5.05"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 22.08V12" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
