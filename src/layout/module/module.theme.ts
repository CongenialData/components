import { TThemeFromFn, tuple } from "../../theming";

export const moduleTheme = () => tuple(["Module", {}]);

export type ModuleTheme = TThemeFromFn<typeof moduleTheme>;
