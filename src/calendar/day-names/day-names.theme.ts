import { ThemeFromFn, tuple } from '../../theming'

export const dayNamesTheme = () =>
  tuple([
    'DayNames',
    {
      width: '20.625rem',
    },
  ])

export type DayNamesTheme = ThemeFromFn<typeof dayNamesTheme>
