import { TCardTheme } from './card.theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    Card: TCardTheme
  }
}
