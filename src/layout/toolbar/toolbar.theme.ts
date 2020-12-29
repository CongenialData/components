import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const toolbarTheme = (theme: TCommonTheme) =>
  tuple([
    "Toolbar",
    {
      backgroundColor: theme.colors.BACKGROUND_BASIC_COLOR_1,
      textColor: theme.colors.TEXT_BASIC_COLOR,
      textFontFamily: theme.typography.TEXT_PARAGRAPH_FONT_FAMILY,
      textFontSize: theme.typography.TEXT_PARAGRAPH_FONT_SIZE,
      textFontWeight: theme.typography.TEXT_PARAGRAPH_FONT_WEIGHT,
      textLineHeight: theme.typography.TEXT_PARAGRAPH_LINE_HEIGHT,
      titleColor: theme.baseColors.COLOR_BASIC_700,
      height: "4.75rem",
      padding: "1.25rem",
      shadow: {
        offsetX: "0",
        offsetY: "0.5rem",
        blurRadius: "1rem",
        spread: "0",
        color: "rgba(44,51,73,0.1)",
      },
    },
  ]);

export type ToolbarTheme = TThemeFromFn<typeof toolbarTheme>;
