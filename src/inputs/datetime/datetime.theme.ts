import { CommonTheme, ThemeFromFn, tuple } from '../../theming'

export const dateTimeInputTheme = (theme: CommonTheme) =>
  tuple([
    'DateTimeInput',
    {
      background: theme.colors.BACKGROUND_ALTERNATIVE_COLOR_1,
    },
  ])

export type DateTimeInputTheme = ThemeFromFn<typeof dateTimeInputTheme>
