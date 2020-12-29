import { GridTheme } from "./grid.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Grid: GridTheme;
  }
}
