import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const navitemTheme = ({ colors }: TCommonTheme) =>
  tuple([
    "NavItem",
    {
      background: colors.BACKGROUND_BASIC_COLOR_1,
      backgroundHover: colors.BACKGROUND_BASIC_COLOR_2,
      backgroundSelected: "transparent",

      color: colors.TEXT_BASIC_COLOR,
      fontSize: "0.8125rem",
      fontWeight: "600",
      lineHeight: "1.5rem",

      padding: "0.75rem 1rem",

      borderColor: colors.BORDER_BASIC_COLOR_4,
      borderStyle: "solid",
      borderWidth: "1px",

      borderActive: colors.COLOR_PRIMARY_ACTIVE,
      borderActiveWidth: "3px",

      /* Default icons */
      iconSize: "1.5rem",
      iconPrimary: colors.COLOR_PRIMARY_DEFAULT,
      iconSecondary: colors.COLOR_BASIC_DEFAULT,
      iconPrimaryOpacity: "1",
      iconSecondaryOpacity: "1",

      /* Hovering */
      colorHover: colors.COLOR_PRIMARY_HOVER,
      iconPrimaryHover: colors.COLOR_PRIMARY_HOVER,
      iconSecondaryHover: colors.COLOR_BASIC_HOVER,
      iconPrimaryHoverOpacity: "1",
      iconSecondaryHoverOpacity: "1",

      /* Active icons */
      colorActive: colors.COLOR_PRIMARY_ACTIVE,
      iconActivePrimary: colors.COLOR_PRIMARY_ACTIVE,
      iconActiveSecondary: colors.COLOR_BASIC_ACTIVE,
      iconActivePrimaryOpacity: "1",
      iconActiveSecondaryOpacity: "1",
    },
  ]);

export type NavItemTheme = TThemeFromFn<typeof navitemTheme>;
