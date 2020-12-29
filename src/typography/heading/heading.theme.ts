import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const headingTheme = ({ colors, typography }: TCommonTheme) =>
  tuple([
    "Heading",
    {
      color: colors.TEXT_BASIC_COLOR,
      fontFamily: {
        h1: typography.TEXT_HEADING_1_FONT_FAMILY,
        h2: typography.TEXT_HEADING_2_FONT_FAMILY,
        h3: typography.TEXT_HEADING_3_FONT_FAMILY,
        h4: typography.TEXT_HEADING_4_FONT_FAMILY,
        h5: typography.TEXT_HEADING_5_FONT_FAMILY,
        h6: typography.TEXT_HEADING_6_FONT_FAMILY,
      },
      lineHeight: {
        h1: typography.TEXT_HEADING_1_LINE_HEIGHT,
        h2: typography.TEXT_HEADING_2_LINE_HEIGHT,
        h3: typography.TEXT_HEADING_3_LINE_HEIGHT,
        h4: typography.TEXT_HEADING_4_LINE_HEIGHT,
        h5: typography.TEXT_HEADING_5_LINE_HEIGHT,
        h6: typography.TEXT_HEADING_6_LINE_HEIGHT,
      },
      fontSize: {
        h1: typography.TEXT_HEADING_1_FONT_SIZE,
        h2: typography.TEXT_HEADING_2_FONT_SIZE,
        h3: typography.TEXT_HEADING_3_FONT_SIZE,
        h4: typography.TEXT_HEADING_4_FONT_SIZE,
        h5: typography.TEXT_HEADING_5_FONT_SIZE,
        h6: typography.TEXT_HEADING_6_FONT_SIZE,
      },
      fontWeight: {
        h1: typography.TEXT_HEADING_1_FONT_WEIGHT,
        h2: typography.TEXT_HEADING_2_FONT_WEIGHT,
        h3: typography.TEXT_HEADING_3_FONT_WEIGHT,
        h4: typography.TEXT_HEADING_4_FONT_WEIGHT,
        h5: typography.TEXT_HEADING_5_FONT_WEIGHT,
        h6: typography.TEXT_HEADING_6_FONT_WEIGHT,
      },
    },
  ]);

export type HeadingTheme = TThemeFromFn<typeof headingTheme>;
