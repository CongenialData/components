import { TThemeFromFn, tuple } from "../theming";

export const datePickerTheme = () => tuple(["DatePicker", {}]);

export type DatePickerTheme = TThemeFromFn<typeof datePickerTheme>;
