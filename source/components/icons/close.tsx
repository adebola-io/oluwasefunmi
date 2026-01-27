import type { JSX } from "retend/jsx-runtime";

export const CloseIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    {...props}
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
