import { ButtonTheme } from "./button.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Button: ButtonTheme;
  }
}
