import { CommonTheme, ThemeFromFn, tuple } from '../../theming'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const listDescriptionTheme = ({ colors }: CommonTheme) =>
  tuple([
    'ListDescription',
    {
      fontSize: '1rem',
      lineHeight: '1rem',
      textColor: colors.TEXT_BASIC_COLOR,
    },
  ])

export type ListDescriptionTheme = ThemeFromFn<typeof listDescriptionTheme>
