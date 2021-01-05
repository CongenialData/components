import { CommonTheme, ThemeFromFn, tuple } from '../../../theming'

export const toolbarItemTheme = (theme: CommonTheme) =>
  tuple([
    'ToolbarItem',
    {
      background: 'transparent',
      dividerColor: theme.support.DIVIDER_COLOR,
      fontSize: '0.75rem',
      padding: '0 1.25rem',
      color: theme.colors.TEXT_BASIC_COLOR,
      fontFamily: theme.typography.TEXT_LABEL_FONT_FAMILY,
      fontWeight: '700',
      lineHeight: '1rem',
    },
  ])

export type ToolbarItemTheme = ThemeFromFn<typeof toolbarItemTheme>
