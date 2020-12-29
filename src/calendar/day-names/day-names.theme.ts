import { TThemeFromFn, tuple } from "../../theming";

export const dayNamesTheme = () =>
  tuple([
    "DayNames",
    {
      width: "20.625rem",
    },
  ]);

export type DayNamesTheme = TThemeFromFn<typeof dayNamesTheme>;
