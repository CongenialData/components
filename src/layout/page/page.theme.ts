import { CommonTheme, ThemeFromFn, tuple } from '../../theming'

export const pageTheme = (theme: CommonTheme) =>
  tuple([
    'Page',
    {
      barPadding: '4rem',
      topToolbarPadding: '1rem',
      background: theme.colors.BACKGROUND_BASIC_COLOR_4,
      topBackground: theme.colors.BACKGROUND_ALTERNATIVE_COLOR_1,
      topTextColor: theme.colors.TEXT_CONTROL_COLOR,
    },
  ])

export type PageTheme = ThemeFromFn<typeof pageTheme>
