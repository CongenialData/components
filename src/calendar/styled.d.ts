import { CalendarTheme } from "./calendar.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Calendar: CalendarTheme;
  }
}
