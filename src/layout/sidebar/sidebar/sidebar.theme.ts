import { TThemeFromFn, tuple } from "../../../theming";

export const sidebarTheme = () =>
  tuple([
    "Sidebar",
    {
      width: "16rem",
    },
  ]);

export type SidebarTheme = TThemeFromFn<typeof sidebarTheme>;
