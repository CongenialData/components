import { CaptionTheme } from "./caption.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Caption: CaptionTheme;
  }
}
