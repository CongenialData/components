import { TThemeFromFn, tuple } from "../../theming";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const listExtraRightTheme = () => {
  return tuple([
    "ListExtraRight",
    {
      padding: "0",
    },
  ]);
};

export type ListExtraRightTheme = TThemeFromFn<typeof listExtraRightTheme>;
