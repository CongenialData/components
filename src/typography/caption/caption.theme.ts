import { TCommonTheme, TThemeFromFn, tuple } from "../../theming";

export const captionTheme = ({ colors, typography }: TCommonTheme) =>
  tuple([
    "Caption",
    {
      color: colors.TEXT_HINT_COLOR,
      fontFamily: typography.TEXT_CAPTION_FONT_FAMILY,
      fontSize: typography.TEXT_CAPTION_FONT_SIZE,
      fontWeight: typography.TEXT_CAPTION_FONT_WEIGHT,
      lineHeight: typography.TEXT_CAPTION_LINE_HEIGHT,
      status: {
        basic: {
          color: colors.TEXT_BASIC_COLOR,
        },
        primary: {
          color: colors.TEXT_PRIMARY_COLOR,
        },
        success: {
          color: colors.TEXT_SUCCESS_COLOR,
        },
        info: {
          color: colors.TEXT_INFO_COLOR,
        },
        warning: {
          color: colors.TEXT_WARNING_COLOR,
        },
        danger: {
          color: colors.TEXT_DANGER_COLOR,
        },
        control: {
          color: colors.TEXT_CONTROL_COLOR,
        },
      },
      type: {
        default: {
          fontFamily: typography.TEXT_CAPTION_FONT_FAMILY,
          fontSize: typography.TEXT_CAPTION_FONT_SIZE,
          fontWeight: typography.TEXT_CAPTION_FONT_WEIGHT,
          lineHeight: typography.TEXT_CAPTION_LINE_HEIGHT,
        },
        alternate: {
          fontFamily: typography.TEXT_CAPTION_2_FONT_FAMILY,
          fontSize: typography.TEXT_CAPTION_2_FONT_SIZE,
          fontWeight: typography.TEXT_CAPTION_2_FONT_WEIGHT,
          lineHeight: typography.TEXT_CAPTION_2_LINE_HEIGHT,
        },
      },
    },
  ]);

export type CaptionTheme = TThemeFromFn<typeof captionTheme>;
