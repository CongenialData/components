import { DialogBoxTheme } from "./dialogbox.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    DialogBox: DialogBoxTheme;
  }
}
