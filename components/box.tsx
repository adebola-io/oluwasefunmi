import type { IconProps } from './icons';

export function Box(props: IconProps) {
  return (
    <svg
      {...props}
      width="430"
      height="296"
      viewBox="0 0 430 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Box Illustration.</title>
      {/* @ts-ignore */}
      <g filter="url(#filter0_d_173_376)" xmlns="http://www.w3.org/2000/svg">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M227.265 5.60672L414.668 88.4921C422.96 92.1596 428.308 100.373 428.308 109.44V178.427C428.308 187.349 423.127 195.459 415.032 199.21L227.63 286.043C221.522 288.873 214.478 288.873 208.37 286.043L20.9678 199.21C12.8726 195.459 7.69207 187.349 7.69207 178.427V109.44C7.69207 100.373 13.0404 92.1596 21.3325 88.4921L208.735 5.60672C214.636 2.99681 221.364 2.99681 227.265 5.60672Z"
          fill="#E1E1E1"
          stroke="#727272"
          stroke-width="2.76"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M217.735 202.368V288M217.735 202.368L10.0947 99.9033M217.735 202.368L342.4 140.523L422.947 99.9033"
          stroke="#727272"
          stroke-width="2.76"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_173_376"
          x="0.645474"
          y="0"
          width="429.042"
          height="295.212"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5.6666" dy="5.6666" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.6925 0 0 0 0 0.6925 0 0 0 0 0.6925 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_173_376"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_173_376"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
