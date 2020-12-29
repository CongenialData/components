import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const navbarTheme = (theme: TCommonTheme) =>
  tuple([
    "NavBar",
    {
      backgroundColor: theme.colors.BACKGROUND_BASIC_COLOR_1,
      barWidth: "13rem",
      color: theme.colors.TEXT_BASIC_COLOR,
      fontFamily: theme.typography.TEXT_BUTTON_FONT_FAMILY,
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      itemsTopMarginDesktop: "1rem",
      shadow: {
        offsetX: "0",
        offsetY: "0.5rem",
        blurRadius: "1rem",
        spread: "0",
        color: "rgba(44,51,73,0.1)",
      },
    },
  ]);

export type NavBarTheme = TThemeFromFn<typeof navbarTheme>;
