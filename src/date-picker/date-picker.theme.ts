import { ThemeFromFn, tuple } from '../theming'

export const datePickerTheme = () => tuple(['DatePicker', {}])

export type DatePickerTheme = ThemeFromFn<typeof datePickerTheme>
