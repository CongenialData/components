import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const dateTimeInputTheme = (theme: TCommonTheme) =>
  tuple([
    "DateTimeInput",
    {
      background: theme.colors.BACKGROUND_ALTERNATIVE_COLOR_1,
    },
  ]);

export type DateTimeInputTheme = TThemeFromFn<typeof dateTimeInputTheme>;
