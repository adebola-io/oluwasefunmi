import type { JSX } from 'retend/jsx-runtime';

export const WhirlwindIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    width="164"
    height="160"
    viewBox="0 0 164 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title xmlns="http://www.w3.org/2000/svg">Whirlwind Logo</title>
    <rect
      class="duration-[calc(var(--duration)*1.25)] transition-[stroke]"
      xmlns="http://www.w3.org/2000/svg"
      x="5.15726"
      y="4.89383"
      width="153.685"
      height="150.212"
      rx="8.80184"
      stroke="var(--secondary-color)"
      stroke-width="9.55108"
    />
    <circle
      class="duration-[calc(var(--duration)*1.25)] transition-[fill]"
      xmlns="http://www.w3.org/2000/svg"
      cx="119.336"
      cy="115.6"
      r="17.3656"
      fill="var(--primary-color)"
    />
  </svg>
);
