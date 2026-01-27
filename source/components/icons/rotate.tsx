import type { JSX } from "retend/jsx-runtime";

export const RotateIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    {...props}
  >
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-5.5 4.5-10 10-10 .7 0 1.4.1 2.1.2M22 12c0 5.5-4.5 10-10 10-.7 0-1.4-.1-2.1-.2" />
  </svg>
);
