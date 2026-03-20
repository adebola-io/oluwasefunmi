import type { JSX } from "retend/jsx-runtime";

export const PaintingWheelIcon = (props: JSX.IntrinsicElements["svg"]) => (
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
    <title>Painting Wheel</title>
    {/* Outer rotating segments */}
    <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.3" />
    <path d="M22 12a10 10 0 0 1-10 10" stroke-opacity="0.6" />
    <path d="M12 22a10 10 0 0 1-10-10" stroke-opacity="0.9" />
    <path d="M2 12a10 10 0 0 1 10-10" />

    {/* Internal "shutter" or aperture effect */}
    <path d="M12 7l4 4-4 4-4-4z" fill="currentColor" fill-opacity="0.1" />
    <path d="M12 7v10" stroke-opacity="0.5" />
    <path d="M7 12h10" stroke-opacity="0.5" />

    {/* Center focal point */}
    <circle cx="12" cy="12" r="2" />
  </svg>
);
