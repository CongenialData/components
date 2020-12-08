import { TThemeFromFn, tuple } from '../theming';

export const dialogBoxTheme = () =>
  tuple([
    'DialogBox',
    {
      color: 'black',
      borderRadius: '0.5rem',
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2,
    },
  ]);

export type DialogBoxTheme = TThemeFromFn<typeof dialogBoxTheme>;
