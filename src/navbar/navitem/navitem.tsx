import * as React from 'react'

import { navitemTheme } from './navitem.theme'
import { IconWrapper, Label, StyledNavItem } from './navitem.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface INavItemProps {
  icon: IconDefinition
  to: string
  exact?: boolean
  /** Text to be displayed next to the icon */
  label: string
}

export const NavItem = (props: INavItemProps): JSX.Element => {
  const { icon, to, exact, label } = props

  return (
    <StyledNavItem exact={exact === undefined ? true : exact} to={to}>
      <IconWrapper>
        <FontAwesomeIcon fixedWidth={true} icon={icon} />
      </IconWrapper>
      <Label>{label}</Label>
    </StyledNavItem>
  )
}

NavItem.defaultTheme = navitemTheme
