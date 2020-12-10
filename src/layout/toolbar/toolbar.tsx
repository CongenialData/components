import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {
  ContextualInformation,
  MenuTitleWrapper,
  PrimaryControls,
  ProjectTitle,
  SecondaryControls,
  StyledToolbar,
  Title,
} from './toolbar.styles'
import { toolbarTheme } from './toolbar.theme'
import { ToolbarProps } from './toolbar.interfaces'

export const Toolbar = (props: ToolbarProps): JSX.Element => {
  const { primaryControlsComponent, secondaryControlsComponent, projectTitle, title, ...restProps } = props

  return (
    <StyledToolbar {...restProps}>
      <MenuTitleWrapper>
        <FontAwesomeIcon icon={faBars} size="2x" />
        <ProjectTitle>{projectTitle}</ProjectTitle>
      </MenuTitleWrapper>
      <PrimaryControls>{primaryControlsComponent}</PrimaryControls>
      <ContextualInformation>{!!title && <Title>{title}</Title>}</ContextualInformation>
      <SecondaryControls>{secondaryControlsComponent}</SecondaryControls>
    </StyledToolbar>
  )
}

Toolbar.defaultTheme = toolbarTheme
