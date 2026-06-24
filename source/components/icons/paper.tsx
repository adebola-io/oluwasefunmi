import type { JSX } from "retend/jsx-runtime";

export const PaperIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const { ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <title>Random Notes</title>
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="14 2 14 8 20 8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="9"
        y1="13"
        x2="15"
        y2="13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="9"
        y1="17"
        x2="13"
        y2="17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
