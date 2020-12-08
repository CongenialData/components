import { TCommonTheme, TThemeFromFn, tuple } from '../theming';

export const emptyState = ({ colors }: TCommonTheme) =>
  tuple([
    'EmptyState',
    {
      background: 'transparent',
      color: colors.TEXT_BASIC_COLOR,
      margin: '2rem  0',
      icon: {
        fontSize: '5rem',
      },
      title: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
      },
      description: {
        fontSize: '1.1rem',
      },
    },
  ]);

export type EmptyStateTheme = TThemeFromFn<typeof emptyState>;
