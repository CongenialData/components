import { CommonTheme, ThemeFromFn, tuple } from '../../theming'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const labelTheme = ({ colors, typography }: CommonTheme) =>
  tuple([
    'Label',
    {
      color: colors.TEXT_HINT_COLOR,
      fontFamily: typography.TEXT_LABEL_FONT_FAMILY,
      fontSize: typography.TEXT_LABEL_FONT_SIZE,
      fontWeight: typography.TEXT_LABEL_FONT_WEIGHT,
      lineHeight: typography.TEXT_LABEL_LINE_HEIGHT,
    },
  ])

export type LabelTheme = ThemeFromFn<typeof labelTheme>
