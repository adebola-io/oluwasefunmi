import type { JSX } from "retend/jsx-runtime";

export const MusicIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const { ...rest } = props;
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <title>Music</title>
      <path
        d="M9 18V5l12-2v13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="6"
        cy="18"
        r="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="18"
        cy="16"
        r="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
