import { CheckboxTheme } from "./checkbox.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Checkbox: CheckboxTheme;
  }
}
