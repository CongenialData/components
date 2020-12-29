import { SidebarTheme } from "./sidebar.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Sidebar: SidebarTheme;
  }
}
