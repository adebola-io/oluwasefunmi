import type { JSX } from 'retend/jsx-runtime';

export const EnjoyYourDayIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    class={[props.class, 'h-18 w-18']}
    width="186"
    height="186"
    viewBox="0 0 186 186"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title xmlns="http://www.w3.org/2000/svg">Enjoy Your Day logo</title>
    <path
      class="transition-[fill]"
      xmlns="http://www.w3.org/2000/svg"
      d="M118.549 106.509C119.837 103.606 117.794 100.516 114.686 99.8616C111.578 99.2079 76.2658 103.195 74.5542 105.871C71.7739 107.407 70.7255 110.959 72.8069 113.358C75.1811 116.095 78.0874 118.348 81.37 119.97C86.3824 122.445 92.0314 123.328 97.5598 122.5C103.088 121.673 108.231 119.174 112.299 115.339C114.962 112.827 117.081 109.821 118.549 106.509Z"
      fill="var(--primary-color)"
    />
    <path
      class="transition-[stroke]"
      xmlns="http://www.w3.org/2000/svg"
      d="M110.322 69.625L111.275 76.4079M69.6249 75.3446L70.5781 82.1275M67.4984 158.645L135.327 149.113C150.311 147.007 160.751 133.152 158.645 118.168L149.112 50.3398C147.006 35.3555 133.152 24.9156 118.168 27.0215L50.3396 36.5541C35.3554 38.66 24.9154 52.5143 27.0213 67.4985L36.554 135.327C38.6598 150.311 52.5141 160.751 67.4984 158.645Z"
      stroke="var(--primary-color)"
      stroke-width="10"
      stroke-linecap="round"
    />
  </svg>
);
