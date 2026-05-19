// oxlint-disable retend/max-component-lines
import { WalletCard } from "./WalletCard";

export function RainbowCard() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto overflow-hidden bg-[#e7ddc8]">
      <svg
        class="size-full"
        viewBox="0 0 770 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="770" height="440" rx="20" fill="#E7DDC8" />
        <rect
          width="770"
          height="440"
          rx="20"
          fill="url(#rainbow-card-paper)"
          opacity="0.16"
        />
        <path d="M57 61H713" stroke="#1D2A25" stroke-opacity="0.16" />
        <path d="M57 379H713" stroke="#1D2A25" stroke-opacity="0.16" />
        <text
          x="534"
          y="218"
          fill="#1D2A25"
          fill-opacity="0.055"
          font-family="Manrope, Avenir Next, system-ui, sans-serif"
          font-size="210"
          font-weight="800"
          letter-spacing="-28"
        >
          OA
        </text>
        <text
          x="538"
          y="222"
          fill="white"
          fill-opacity="0.22"
          font-family="Manrope, Avenir Next, system-ui, sans-serif"
          font-size="210"
          font-weight="800"
          letter-spacing="-28"
        >
          OA
        </text>
        <g
          fill="#1D2A25"
          font-family="Manrope, Avenir Next, system-ui, sans-serif"
        >
          <text
            x="58"
            y="86"
            font-size="13"
            font-weight="800"
            letter-spacing="7"
            fill-opacity="0.62"
          >
            PLAYGROUND
          </text>
          <text
            x="55"
            y="203"
            font-size="58"
            font-weight="600"
            letter-spacing="-3.2"
          >
            Oluwasefunmi
          </text>
          <text
            x="57"
            y="258"
            font-size="51"
            font-weight="500"
            letter-spacing="-3"
          >
            Akomolafe
          </text>
          <text
            x="58"
            y="350"
            font-size="11"
            font-weight="800"
            letter-spacing="4.2"
            fill-opacity="0.48"
          >
            INTERFACE / MOTION / SYSTEMS
          </text>
          <text
            x="619"
            y="350"
            font-size="11"
            font-weight="800"
            letter-spacing="4.2"
            fill-opacity="0.48"
          >
            NO. 001
          </text>
          <text
            x="571"
            y="372"
            font-size="11"
            font-weight="800"
            letter-spacing="4.2"
            fill-opacity="0.48"
          >
            VALID FOREVER
          </text>
        </g>
        <g transform="translate(58 104)">
          <rect
            width="70"
            height="8"
            rx="4"
            fill="#1D2A25"
            fill-opacity="0.72"
          />
          <rect x="82" width="28" height="8" rx="4" fill="#B36B48" />
          <rect x="122" width="28" height="8" rx="4" fill="#9A8B4F" />
          <rect x="162" width="28" height="8" rx="4" fill="#5C8877" />
        </g>
        <g transform="translate(608 72)" fill="#1D2A25" opacity="0.52">
          <circle cx="0" cy="0" r="3.5" />
          <circle cx="20" cy="0" r="3.5" opacity="0.36" />
          <circle cx="40" cy="0" r="3.5" />
          <circle cx="0" cy="20" r="3.5" opacity="0.36" />
          <circle cx="20" cy="20" r="3.5" />
          <circle cx="40" cy="20" r="3.5" opacity="0.36" />
        </g>
        <path
          d="M421 306C480 286 529 305 586 286C637 269 665 252 713 260"
          stroke="#B36B48"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M421 319C481 300 530 316 587 299C638 284 667 269 713 274"
          stroke="#1D2A25"
          stroke-opacity="0.18"
          stroke-width="2"
          stroke-linecap="round"
        />
        <rect
          x="1.5"
          y="1.5"
          width="767"
          height="437"
          rx="18.5"
          stroke="#1D2A25"
          stroke-opacity="0.13"
          stroke-width="3"
        />
        <defs>
          <pattern
            id="rainbow-card-paper"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(28)"
          >
            <path d="M0 0H18" stroke="#1D2A25" stroke-opacity="0.32" />
            <path d="M0 9H18" stroke="white" stroke-opacity="0.4" />
          </pattern>
        </defs>
      </svg>
    </WalletCard>
  );
}
