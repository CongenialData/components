import { TCommonTheme, TThemeFromFn, tuple } from "../theming";

export const emptyState = ({ colors }: TCommonTheme) =>
  tuple([
    "EmptyState",
    {
      background: "transparent",
      color: colors.TEXT_BASIC_COLOR,
      description: {
        fontSize: "1.1rem",
      },
      icon: {
        fontSize: "5rem",
      },
      margin: "2rem  0",
      title: {
        fontSize: "1.5rem",
        fontWeight: "normal",
      },
    },
  ]);

export type EmptyStateTheme = TThemeFromFn<typeof emptyState>;
