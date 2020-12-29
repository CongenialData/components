import { ChipTheme } from "./chip.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Chip: ChipTheme;
  }
}
