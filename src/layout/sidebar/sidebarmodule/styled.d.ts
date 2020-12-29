import { SidebarModuleTheme } from "./sidebarmodule.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    SidebarModule: SidebarModuleTheme;
  }
}
