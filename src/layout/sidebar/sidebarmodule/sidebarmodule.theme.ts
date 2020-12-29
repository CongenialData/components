import { TCommonTheme, TThemeFromFn, tuple } from "../../../theming";

export const sidebarModuleTheme = (theme: TCommonTheme) =>
  tuple([
    "SidebarModule",
    {
      background: theme.colors.BACKGROUND_BASIC_COLOR_1,
      header: {
        background: theme.colors.BACKGROUND_ALTERNATIVE_COLOR_1,
      },
      title: {
        color: theme.colors.TEXT_CONTROL_COLOR,
        padding: "0.75rem",
        textAlign: "center",
      },
      content: {
        padding: "1rem",
      },
    },
  ]);

export type SidebarModuleTheme = TThemeFromFn<typeof sidebarModuleTheme>;
