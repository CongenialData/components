import { FlattenSimpleInterpolation, css } from "styled-components/macro";

/**
 * Utility to add transitions to components
 *
 * @param properties A string containing the transition properties to animate
 * @returns A css ready to be used in a styled-component.
 *
 * Usage:
 * ```ts
 * ${componentAnimation('background-color, color')};
 * ```
 */
export const componentAnimation = (
  properties: string
): FlattenSimpleInterpolation => {
  return css`
    transition-duration: 0.15s;
    transition-property: ${properties};
    transition-timing-function: ease-in;
  `;
};

/**
 * Utility to calculate outline
 *
 * @param outlineWidth Width of outline in px
 * @param outlineColor Outline color
 * @param insetShadowLength Inner shadow size in px. If included, this changes the shadow from an outer shadow (outset) to an inner shadow.
 *
 * @returns A css ready to be used in a styled-component.
 *
 * Usage:
 * ```ts
 * ${outline('2', 'red')};
 * ```
 */
export const outline = (
  outlineWidth: string,
  outlineColor: string,
  insetShadowLength: string | number = 0
): FlattenSimpleInterpolation => {
  const outsetShadow = `0 0 0 ${outlineWidth} ${outlineColor}`;

  if (insetShadowLength !== 0) {
    const insetShadow = `inset ${insetShadowLength} ${outlineColor}`;

    return css`
      &:not(:hover):not(:active) {
        box-shadow: ${outsetShadow}, ${insetShadow};
      }
    `;
  }

  return css`
    box-shadow: ${outsetShadow};
  `;
};
