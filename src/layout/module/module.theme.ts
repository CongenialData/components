import { ThemeFromFn, tuple } from '../../theming'

export const moduleTheme = () => tuple(['Module', {}])

export type ModuleTheme = ThemeFromFn<typeof moduleTheme>
