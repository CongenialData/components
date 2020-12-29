import { DatePickerTheme } from "./date-picker.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    DatePicker: DatePickerTheme;
  }
}
