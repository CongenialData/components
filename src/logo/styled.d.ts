import { TLogoTheme } from './logo.theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    Logo: TLogoTheme
  }
}
