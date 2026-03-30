import type { JSX } from "retend/jsx-runtime";

export const StickersIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const { ...rest } = props;
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>Stickers</title>
      <path
        d="M15.5 3.5h-7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2z"
        stroke-opacity="0.4"
        transform="rotate(-8 12 10.5)"
      />
      <path
        d="M18.5 7.5h-8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5.5l5.5-5.5v-6.5c0-1.1-.9-2-2-2z"
        fill="currentColor"
        fill-opacity="0.1"
      />
      <path d="M16 21.5v-4c0-1.1.9-2 2-2h4" />
      <path
        d="M12.5 11.5l.4 1 .8.2-.8.2-.4 1-.4-1-.8-.2.8-.2.4-1z"
        fill="currentColor"
      />
    </svg>
  );
};
