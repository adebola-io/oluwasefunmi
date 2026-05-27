import type { JSX } from "retend/jsx-runtime";

export const PaperStripsIcon = (props: JSX.IntrinsicElements["svg"]) => {
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
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>paper-strips</title>
      <path d="M3 6l3-1.5L9 6l3-1.5L15 6l3-1.5L21 6v12l-3 1.5-3-1.5-3 1.5L9 18l-3 1.5L3 18z" />
      <path d="M6 4.5v15M9 6v12M12 4.5v15M15 6v12M18 4.5v15" />
      <path
        d="M4.6 9.25h1.4M4.6 12h1.4M10.4 9.5h1.6M10.4 12.5h1.6M16 9.25h1.7M16 12h1.7M16 14.75h1.2"
        stroke-opacity="0.7"
      />
    </svg>
  );
};
