import { TextInputTheme } from "./text-input.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    TextInput: TextInputTheme;
  }
}
