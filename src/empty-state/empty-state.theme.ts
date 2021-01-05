import { CommonTheme, ThemeFromFn, tuple } from '../theming'

export const emptyState = ({ colors }: CommonTheme) =>
  tuple([
    'EmptyState',
    {
      background: 'transparent',
      color: colors.TEXT_BASIC_COLOR,
      description: {
        fontSize: '1.1rem',
      },
      icon: {
        fontSize: '5rem',
      },
      margin: '2rem  0',
      title: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
      },
    },
  ])

export type EmptyStateTheme = ThemeFromFn<typeof emptyState>
