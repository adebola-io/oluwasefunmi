import type { JSX } from "retend/jsx-runtime";

export const HaloIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title>Halo</title>
    {/* Back Arc: Top half of the halo, lower opacity for depth */}
    <path d="M19.5 10c0-2.7-3.4-5-7.5-5S4.5 7.3 4.5 10" stroke-opacity="0.5" />

    {/* Front Arc: Bottom half of the halo, distinct */}
    <path d="M4.5 14c0 2.7 3.4 5 7.5 5 4.1 0 7.5-2.3 7.5-5" />

    {/* Marquee Elements: Satellites or lights indicating motion */}
    <circle cx="19.5" cy="12" r="1.5" />
    <circle cx="4.5" cy="12" r="1.5" />
  </svg>
);
