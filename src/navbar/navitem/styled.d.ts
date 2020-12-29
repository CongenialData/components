import { NavItemTheme } from "./navitem.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    NavItem: NavItemTheme;
  }
}
