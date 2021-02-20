import { TLogoTheme } from './logo.theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    Logo: TLogoTheme
  }
}
