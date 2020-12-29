import { PageTheme } from "./page.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Page: PageTheme;
  }
}
