import { ThemeFromFn, tuple } from '../../theming'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const listExtraLeftTheme = () =>
  tuple([
    'ListExtraLeft',
    {
      padding: '0',
    },
  ])

export type ListExtraLeftTheme = ThemeFromFn<typeof listExtraLeftTheme>
