import { HeadingTheme } from "./heading.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Heading: HeadingTheme;
  }
}
