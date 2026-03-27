import type { JSX } from "retend/jsx-runtime";

export const GlassesIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const {
    width = "24",
    height = "24",
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    ...rest
  } = props;

  const propsAny = props as any;
  const strokeWidth = propsAny["stroke-width"] || "1.5";
  const strokeLinecap = propsAny["stroke-linecap"] || "round";
  const strokeLinejoin = propsAny["stroke-linejoin"] || "round";

  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
    >
      <title>Glasses</title>
      {/* Temples/Arms (depth) */}
      <path d="M2.5 13l2.5-6c.7-1.3 1.4-2 3-2" stroke-opacity="0.3" />
      <path d="M21.5 13l-2.5-6c-.7-1.3-1.4-2-3-2" stroke-opacity="0.3" />

      {/* Frame Bridge */}
      <path d="M10 15a2 2 0 0 1 4 0" />

      {/* Main Lenses */}
      <rect x="3" y="11" width="7" height="7" rx="2.5" />
      <rect x="14" y="11" width="7" height="7" rx="2.5" />

      {/* Glass shimmer/morphism effect */}
      <path d="M6 14a1 1 0 0 1 1-1" stroke-opacity="0.5" stroke-width="1" />
      <path d="M17 14a1 1 0 0 1 1-1" stroke-opacity="0.5" stroke-width="1" />

      {/* Subtle lens fill to suggest "glass" */}
      <rect
        x="3"
        y="11"
        width="7"
        height="7"
        rx="2.5"
        fill="currentColor"
        fill-opacity="0.05"
        stroke="none"
      />
      <rect
        x="14"
        y="11"
        width="7"
        height="7"
        rx="2.5"
        fill="currentColor"
        fill-opacity="0.05"
        stroke="none"
      />
    </svg>
  );
};
