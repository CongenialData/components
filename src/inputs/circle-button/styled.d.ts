import { CircleButtonTheme } from "./circle-button.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    CircleButton: CircleButtonTheme;
  }
}
