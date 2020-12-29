import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const multiSelectTheme = (theme: TCommonTheme) =>
  tuple([
    "MultiSelect",
    {
      background: theme.colors.COLOR_BASIC_DEFAULT,
      add: {
        backgroundColor: theme.colors.COLOR_BASIC_DEFAULT,
        hoverBackgroundColor: theme.colors.COLOR_BASIC_HOVER,
        hoverBorderColor: theme.colors.COLOR_BASIC_HOVER_BORDER,
        textColor: theme.colors.TEXT_BASIC_COLOR,
      },
      chip: {
        background: theme.colors.COLOR_BASIC_DEFAULT,
        color: theme.baseColors.COLOR_BASIC_TRANSPARENT_500,
      },
    },
  ]);

export type MultiSelectTheme = TThemeFromFn<typeof multiSelectTheme>;
