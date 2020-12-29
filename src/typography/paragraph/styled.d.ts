import { ParagraphTheme } from "./paragraph.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Paragraph: ParagraphTheme;
  }
}
