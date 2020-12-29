import { ModuleTheme } from "./module.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Module: ModuleTheme;
  }
}
