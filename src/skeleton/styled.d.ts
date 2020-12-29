import { SkeletonTheme } from "./skeleton.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Skeleton: SkeletonTheme;
  }
}
