import { TCommonTheme, TThemeFromFn, tuple } from "../theming";

export const alertTheme = ({ colors, typography, support }: TCommonTheme) =>
  tuple([
    "Alert",
    {
      accent: {
        backgroundColor: colors.BACKGROUND_BASIC_COLOR_2,
        basic: colors.BORDER_BASIC_COLOR_3,
        danger: colors.COLOR_DANGER_DEFAULT,
        info: colors.COLOR_INFO_DEFAULT,
        primary: colors.COLOR_PRIMARY_DEFAULT,
        success: colors.COLOR_SUCCESS_DEFAULT,
        textColor: colors.TEXT_BASIC_COLOR,
        warning: colors.COLOR_WARNING_DEFAULT,
      },
      borderRadius: support.BORDER_RADIUS,
      bottomMargin: "1.5rem",
      outline: {
        backgroundColor: colors.BACKGROUND_BASIC_COLOR_2,
        basic: colors.COLOR_BASIC_FOCUS_BORDER,
        danger: colors.COLOR_DANGER_FOCUS_BORDER,
        info: colors.COLOR_INFO_FOCUS_BORDER,
        primary: colors.COLOR_PRIMARY_FOCUS_BORDER,
        success: colors.COLOR_SUCCESS_FOCUS_BORDER,
        textColor: colors.TEXT_BASIC_COLOR,
        warning: colors.COLOR_WARNING_FOCUS_BORDER,
      },
      outlineWidth: "1px",
      padding: "1rem 1.125rem",
      shadow: "none",
      size: {
        giant: "9.5rem",
        large: "8.25rem",
        medium: "7rem",
        mediumPadding: "1rem, 1.125rem",
        small: "5.75rem",
        tiny: "4.5rem",
      },
      status: {
        basic: {
          backgroundColor: colors.BACKGROUND_BASIC_COLOR_2,
          textColor: colors.TEXT_BASIC_COLOR,
        },
        danger: {
          backgroundColor: colors.COLOR_DANGER_DEFAULT,
          textColor: colors.TEXT_CONTROL_COLOR,
        },
        info: {
          backgroundColor: colors.COLOR_INFO_DEFAULT,
          textColor: colors.TEXT_CONTROL_COLOR,
        },
        primary: {
          backgroundColor: colors.COLOR_PRIMARY_DEFAULT,
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
      },
      textFontFamily: typography.TEXT_PARAGRAPH_FONT_FAMILY,
      textFontSize: typography.TEXT_SUBTITLE_FONT_SIZE,
      textFontWeight: typography.TEXT_SUBTITLE_FONT_WEIGHT,
      textLineHeight: typography.TEXT_SUBTITLE_LINE_HEIGHT,
    },
  ]);

export type AlertTheme = TThemeFromFn<typeof alertTheme>;
