import { TCommonTheme, TThemeFromFn, tuple } from "../theming";

export const formSectionTheme = (theme: TCommonTheme) =>
  tuple([
    "FormSection",
    {
      border: {
        color: theme.support.DIVIDER_COLOR,
        width: theme.support.DIVIDER_WIDTH,
        style: theme.support.DIVIDER_STYLE,
      },
      padding: "1rem",
      heading: {
        fontSize: "1.25rem",
        marginBottom: "1rem",
      },
      icon: {
        primaryColor: theme.baseColors.COLOR_INFO_700,
        secondaryColor: theme.baseColors.COLOR_BASIC_500,
        primaryOpacity: "1",
        secondaryOpacity: "1",
        size: "",
        marginRight: "1rem",
      },
    },
  ]);

export type FormSectionTheme = TThemeFromFn<typeof formSectionTheme>;
