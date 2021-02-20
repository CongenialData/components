import { ThemeFromFn, tuple } from '../theming'

export const logoTheme = () =>
  tuple([
    'Logo',
    {
      logoUrl: process.env.PUBLIC_URL + 'sts_logo.png', // !FIXME: Make generic before release
      width: '4rem',
      height: '4rem',
      padding: '0.25rem',
    },
  ])

export type TLogoTheme = ThemeFromFn<typeof logoTheme>
