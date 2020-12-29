import { ListDescriptionTheme } from "./listdescription.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    ListDescription: ListDescriptionTheme;
  }
}
