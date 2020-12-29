import { LabelTheme } from "./label.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Label: LabelTheme;
  }
}
