import { MultiSelectTheme } from "./multiselect.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    MultiSelect: MultiSelectTheme;
  }
}
