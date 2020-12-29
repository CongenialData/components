import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const paragraphTheme = ({ colors, typography }: TCommonTheme) =>
  tuple([
    "Paragraph",
    {
      margin: {
        none: "0",
        xxsmall: "0.25rem",
        xsmall: "0.5rem",
        small: "0.75rem",
        medium: "1rem",
        large: "1.25rem",
        xlarge: "1.5rem",
        xxlarge: "2rem",
      },
      variant: {
        default: {
          color: colors.TEXT_BASIC_COLOR,
          fontFamily: typography.TEXT_PARAGRAPH_FONT_FAMILY,
          fontSize: typography.TEXT_PARAGRAPH_FONT_SIZE,
          fontWeight: typography.TEXT_PARAGRAPH_FONT_WEIGHT,
          lineHeight: typography.TEXT_PARAGRAPH_LINE_HEIGHT,
        },
        alternate: {
          color: colors.TEXT_BASIC_COLOR,
          fontFamily: typography.TEXT_PARAGRAPH_2_FONT_FAMILY,
          fontSize: typography.TEXT_PARAGRAPH_2_FONT_SIZE,
          fontWeight: typography.TEXT_PARAGRAPH_2_FONT_WEIGHT,
          lineHeight: typography.TEXT_PARAGRAPH_2_LINE_HEIGHT,
        },
      },
    },
  ]);

export type ParagraphTheme = TThemeFromFn<typeof paragraphTheme>;
