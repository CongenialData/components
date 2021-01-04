import { Spacing } from './spacing'
import { Breakpoints } from './breakpoints'
import { BaseColors } from './basecolors'
import { Colors } from './colors'
import { Support } from './support'
import { BaseTypography } from './typography'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseColors: BaseColors
    breakpoints: Breakpoints
    colors: Colors
    spacing: Spacing
    support: Support
    typography: BaseTypography
  }
}

export type ControlStatus = 'control'

export type DefaultStatuses = 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type ComponentStatus = ControlStatus | DefaultStatuses

export type ComponentType = 'default' | 'alternate'

export type ComponentSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant'

export type ComponentShape = 'rectangle' | 'semiround' | 'round'
