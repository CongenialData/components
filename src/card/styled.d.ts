import { CardTheme } from "./card.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Card: CardTheme;
  }
}
