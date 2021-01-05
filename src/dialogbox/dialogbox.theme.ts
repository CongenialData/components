import { ThemeFromFn, tuple } from '../theming'

export const dialogBoxTheme = () =>
  tuple([
    'DialogBox',
    {
      borderRadius: '0.5rem',
      color: 'black',
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2,
    },
  ])

export type DialogBoxTheme = ThemeFromFn<typeof dialogBoxTheme>
