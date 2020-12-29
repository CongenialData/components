import { TThemeFromFn, tuple } from "../../theming";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const listTitleTheme = () =>
  tuple([
    "ListTitle",
    {
      fontSize: "1rem",
      fontWeight: "600",
    },
  ]);

export type ListTitleTheme = TThemeFromFn<typeof listTitleTheme>;
