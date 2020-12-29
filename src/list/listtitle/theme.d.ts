import { ListTitleTheme } from "./listtitle.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    ListTitle: ListTitleTheme;
  }
}
