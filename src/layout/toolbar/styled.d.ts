import { ToolbarTheme } from "./toolbar.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Toolbar: ToolbarTheme;
  }
}
