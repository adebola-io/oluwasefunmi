import type { JSX } from "retend/jsx-runtime";

export const GlassesIcon = (props: JSX.IntrinsicElements["svg"]) => {
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
      <title>Glasses</title>
      <circle cx="7" cy="12" r="4" />
      <circle cx="17" cy="12" r="4" />
      <path d="M11 12h2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
