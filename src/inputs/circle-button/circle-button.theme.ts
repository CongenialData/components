import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const circleButtonTheme = (theme: TCommonTheme) =>
  tuple([
    "CircleButton",
    {
      background: theme.baseColors.COLOR_BASIC_300,
      border: {
        color: "transparent",
        radius: "0.5rem",
        style: "solid",
        width: "1px",
      },
      color: theme.baseColors.COLOR_BASIC_100,
      description: {
        fontWeight: "bold",
        size: "0.875rem",
      },
      disabled: {
        background: "rgba(61, 85, 103, 0.3)",
        color: theme.colors.COLOR_DANGER_DEFAULT,
      },
      margin: {
        narrow: "0.5rem",
        normal: "1rem",
        wide: "2rem",
      },
      rounded: "100vh",
      selected: {
        background: theme.colors.COLOR_BASIC_TRANSPARENT_DEFAULT,
        color: theme.colors.TEXT_PRIMARY_COLOR,
        iconColor: theme.colors.COLOR_PRIMARY_DEFAULT_BORDER,
      },
      size: {
        small: "2.25rem",
        medium: "3.5rem",
        large: "6rem",
        xl: "9rem",
      },
      spacing: {
        none: "0",
        narrow: "0.5rem",
        normal: "1rem",
        wide: "2rem",
      },
      title: {
        color: theme.baseColors.COLOR_BASIC_100,
        fontWeight: "bold",
        size: {
          small: "0.5rem",
          medium: "0.75rem",
          large: "1rem",
          xl: "2rem",
        },
        textAlign: "center",
        textTransform: "uppsercase",
      },
      transition: "background-color 0.1s cubic-bezier(0, 0, 0.2, 1)",
    },
  ]);

export type CircleButtonTheme = TThemeFromFn<typeof circleButtonTheme>;
