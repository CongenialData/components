import { InputWrapperTheme } from "./input-wrapper.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    InputWrapper: InputWrapperTheme;
  }
}
