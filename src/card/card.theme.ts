import { TCommonTheme, TThemeFromFn, tuple } from "../theming";

export const cardTheme = ({
  baseColors,
  colors,
  typography,
  support,
}: TCommonTheme) =>
  tuple([
    "Card",
    {
      backgroundColor: colors.BACKGROUND_BASIC_COLOR_1,
      borderWidth: "0.0625rem",
      borderStyle: "solid",
      borderColor: colors.BORDER_BASIC_COLOR_4,
      textColor: colors.TEXT_BASIC_COLOR,
      borderRadius: support.BORDER_RADIUS,
      textFontFamily: typography.TEXT_PARAGRAPH_FONT_FAMILY,
      textFontSize: typography.TEXT_PARAGRAPH_FONT_SIZE,
      textFontWeight: typography.TEXT_PARAGRAPH_FONT_WEIGHT,
      textLineHeight: typography.TEXT_PARAGRAPH_LINE_HEIGHT,
      marginBottom: "1rem",
      dividerColor: support.DIVIDER_COLOR,
      dividerStyle: support.DIVIDER_STYLE,
      dividerWidth: support.DIVIDER_WIDTH,
      size: {
        tiny: "13.5rem",
        small: "21.1875rem",
        medium: "28.875rem",
        large: "36.5625rem",
        giant: "44.25rem",
      },
      spacing: {
        none: "0",
        small: "0.5rem 0.75rem",
        normal: "1rem 1.5rem",
      },
      shadow: support.SHADOW,
      description: {
        fontWeight: "bold",
        size: "0.875rem",
      },
      header: {
        textColor: colors.TEXT_BASIC_COLOR,
        textFontFamily: typography.TEXT_SUBTITLE_FONT_FAMILY,
        textFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
        textFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
        textLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,
        status: {
          basic: {
            backgroundColor: colors.BACKGROUND_BASIC_COLOR_2,
            textColor: colors.TEXT_BASIC_COLOR,
          },
          primary: {
            backgroundColor: colors.COLOR_PRIMARY_DEFAULT,
            textColor: colors.TEXT_CONTROL_COLOR,
          },
          info: {
            backgroundColor: colors.COLOR_INFO_DEFAULT,
            textColor: colors.TEXT_CONTROL_COLOR,
          },
          success: {
            backgroundColor: colors.COLOR_SUCCESS_DEFAULT,
            textColor: colors.TEXT_CONTROL_COLOR,
          },
          warning: {
            backgroundColor: colors.COLOR_WARNING_DEFAULT,
            textColor: colors.TEXT_CONTROL_COLOR,
          },
          danger: {
            backgroundColor: colors.COLOR_DANGER_DEFAULT,
            textColor: colors.TEXT_CONTROL_COLOR,
          },
          control: {
            backgroundColor: colors.COLOR_CONTROL_DEFAULT,
            textColor: baseColors.COLOR_BASIC_800,
          },
        },
      },
    },
  ]);

export type CardTheme = TThemeFromFn<typeof cardTheme>;
