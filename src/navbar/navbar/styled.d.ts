import { NavBarTheme } from "./navbar.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    NavBar: NavBarTheme;
  }
}
