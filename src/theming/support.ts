import { TBaseColors } from "./basecolors";
import { TColors } from "./colors";

/**
 * **Support variables**
 *
 * border radius, outline, shadow, divider
 */

export const supportMapping = (baseColors: TBaseColors, colors: TColors) => {
  const OUTLINE_COLOR = baseColors.COLOR_BASIC_TRANSPARENT_200;

  const SCROLLBAR_COLOR = baseColors.COLOR_BASIC_TRANSPARENT_200;
  const SCROLLBAR_BACKGROUND_COLOR = colors.BACKGROUND_BASIC_COLOR_2;
  const DIVIDER_COLOR = colors.BORDER_BASIC_COLOR_3;

  return {
    // FIXME: DET här fungerar inte att overrida
    BORDER_RADIUS: "0.25rem",

    OUTLINE_COLOR,
    OUTLINE_WIDTH: "0.375rem",

    SCROLLBAR_COLOR,
    SCROLLBAR_BACKGROUND_COLOR,
    SCROLLBAR_WIDTH: "0.3125rem",

    SHADOW: "0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1)",

    DIVIDER_COLOR,
    DIVIDER_STYLE: "solid",
    DIVIDER_WIDTH: "1px",
  };
};

export type TSupport = ReturnType<typeof supportMapping>;

/**
 * Type used allowing user to create a typed override object for support variables in theme.
 *
 * Code sample:
 *
 * ```ts
 * const customSupport: TCustomSupport = {
 *   BORDER_RADIUS = '8px'
 * }
 *
 * const theme = createTheme([Button, Card], {
 *   colors: { primary: 'blue', secondary: 'red', accent: 'green'},
 *   Button: { background: 'green' },
 *   Card: { color: 'red' },
 *   support: customSupport
 * })
 * ```
 */
export type TCustomSupport = Partial<TSupport>;
