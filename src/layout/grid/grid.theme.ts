import { TThemeFromFn, tuple } from "../../theming";

export const gridTheme = () => tuple(["Module", {}]);

export type GridTheme = TThemeFromFn<typeof gridTheme>;
