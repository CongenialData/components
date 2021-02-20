import * as React from 'react'
import { logoTheme } from './logo.theme'

/* Import components here */
import { StyledLogo } from './logo.styles'

export const Logo = (): JSX.Element => {
  return <StyledLogo />
}

Logo.defaultTheme = logoTheme
