/**
 * @module Cuboid
 * @description A customizable 3D cuboid component that renders a box-like shape with six faces and supports content slots.
 */

import { ShadowRoot } from 'retend/shadowroot';
import type { JSX } from 'retend/jsx-runtime';
import styles from './cuboid.css?inline';

type DivProps = Omit<JSX.IntrinsicElements['div'], 'style'>;

/**
 * Props interface for the Cuboid component, extending standard div properties.
 *
 * @interface CuboidProps
 * @extends {Omit<JSX.IntrinsicElements['div'], 'style'>}
 */
export interface CuboidProps extends DivProps {
  /**
   * The length of the cuboid (X-axis dimension).
   * Accepts CSS length values (e.g., '100px', '10rem').
   */
  length: JSX.ValueOrCell<string>;

  /**
   * The height of the cuboid (Y-axis dimension).
   * Accepts CSS length values (e.g., '100px', '10rem').
   */
  height: JSX.ValueOrCell<string>;

  /**
   * The breadth/depth of the cuboid (Z-axis dimension).
   * Accepts CSS length values (e.g., '100px', '10rem').
   */
  breadth: JSX.ValueOrCell<string>;

  /**
   * The fill color of the cuboid faces.
   * Accepts any valid CSS color value.
   * @default undefined
   */
  fill?: JSX.ValueOrCell<string>;

  /**
   * The width of the stroke/border around cuboid faces.
   * Accepts CSS length values.
   * @default undefined
   */
  strokeWidth?: JSX.ValueOrCell<string>;

  /**
   * The style of the stroke/border (e.g., 'solid', 'dashed').
   * Accepts valid CSS border-style values.
   * @default undefined
   */
  strokeStyle?: JSX.ValueOrCell<string>;

  /**
   * The color of the stroke/border.
   * Accepts any valid CSS color value.
   * @default undefined
   */
  strokeColor?: JSX.ValueOrCell<string>;

  /**
   * Determines if the cuboid should have rounded corners.
   * When defined, adds a data-curved attribute to the container.
   * @default undefined
   */
  curvature?: JSX.ValueOrCell<string>;

  /**
   * Additional CSS custom properties to be applied to the cuboid.
   * @default undefined
   */
  extraVars?: Record<string, JSX.ValueOrCell<string>>;

  /**
   * Custom styles to be applied to the cuboid container.
   * Will be merged with internal styles.
   */
  style?: JSX.StyleValue;
}

/**
 * Renders a 3D cuboid shape with customizable dimensions and styling.
 * The component uses a shadow DOM for encapsulation and provides named slots
 * for content insertion into each face of the cuboid.
 *
 * @component
 * @example
 * ```tsx
 * <Cuboid
 *   length="200px"
 *   height="150px"
 *   breadth="100px"
 *   fill="lightblue"
 *   strokeColor="navy"
 *   strokeWidth="2px"
 * >
 *   <div slot="front">Front Face Content</div>
 *   <div slot="top">Top Face Content</div>
 * </Cuboid>
 * ```
 *
 * @remarks
 * - Uses CSS custom properties for styling and dimensions
 * - Provides named slots for all six faces: 'front', 'back', 'top', 'bottom', 'left', 'right'
 * - Supports reactive updates through JSX.ValueOrCell properties
 * - Implements a closed shadow root for style encapsulation
 *
 * @param {CuboidProps} props - The properties for the cuboid component
 * @returns {JSX.Template} A JSX template representing the cuboid component
 */
export function Cuboid(props: CuboidProps): JSX.Template {
  const {
    length,
    height,
    breadth,
    fill,
    strokeWidth,
    strokeStyle,
    strokeColor,
    extraVars,
    curvature,
    ...rest
  } = props;

  const style = {
    '--cuboid-length': length,
    '--cuboid-height': height,
    '--cuboid-breadth': breadth,
    '--cuboid-fill': fill,
    '--cuboid-stroke-width': strokeWidth,
    '--cuboid-stroke-style': strokeStyle,
    '--cuboid-stroke-color': strokeColor,
    '--cuboid-curve': curvature,
  };

  if (rest.style) {
    Object.assign(style, rest.style);
  }

  return (
    <div {...rest} style={style} data-curved={curvature !== undefined}>
      <ShadowRoot>
        <style>{styles}</style>
        <div class="cuboid-face cuboid-back" part="back-face">
          <slot name="back" />
        </div>
        <div class="cuboid-face cuboid-left" part="left-face">
          <slot name="left" />
        </div>
        <div class="cuboid-face cuboid-right" part="right-face">
          <slot name="right" />
        </div>
        <div class="cuboid-face cuboid-bottom" part="bottom-face">
          <slot name="bottom" />
        </div>
        <div class="cuboid-face cuboid-top" part="top-face">
          <slot name="top" />
        </div>
        <div class="cuboid-face cuboid-front" part="front-face">
          <slot name="front" />
        </div>
      </ShadowRoot>
      {props.children}
    </div>
  );
}
