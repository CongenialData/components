import { ThemeFromFn, tuple } from '../../theming'

export const gridTheme = () => tuple(['Module', {}])

export type GridTheme = ThemeFromFn<typeof gridTheme>
