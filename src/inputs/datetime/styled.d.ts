import { TDateTimeInputTheme } from "./datetimeinput.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    DateTimeInput: TDateTimeInputTheme;
  }
}
