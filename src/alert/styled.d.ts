import { AlertTheme } from "./alert.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Alert: AlertTheme;
  }
}
