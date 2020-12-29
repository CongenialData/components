import { ToolbarItemTheme } from "./toolbar-item.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    ToolbarItem: ToolbarItemTheme;
  }
}
