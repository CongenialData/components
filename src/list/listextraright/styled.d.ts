import { ListExtraRightTheme } from "./listextraright.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    ListExtraRight: ListExtraRightTheme;
  }
}
