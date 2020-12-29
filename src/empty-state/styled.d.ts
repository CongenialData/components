import { EmptyStateTheme } from "./empty-state.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    EmptyState: EmptyStateTheme;
  }
}
