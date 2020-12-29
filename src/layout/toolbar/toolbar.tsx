import React from "react";

import {
  ContextualInformation,
  MenuTitleWrapper,
  PrimaryControls,
  ProjectTitle,
  SecondaryControls,
  StyledToolbar,
  Title,
} from "./toolbar.styles";
import { toolbarTheme } from "./toolbar.theme";
import { ToolbarProps } from "./toolbar.types";

export const Toolbar = (props: ToolbarProps): JSX.Element => {
  const {
    icon,
    primaryControlsComponent,
    secondaryControlsComponent,
    projectTitle,
    title,
    ...restProps
  } = props;

  return (
    <StyledToolbar {...restProps}>
      <MenuTitleWrapper>
        {icon && icon}
        <ProjectTitle>{projectTitle}</ProjectTitle>
      </MenuTitleWrapper>
      <PrimaryControls>{primaryControlsComponent}</PrimaryControls>
      <ContextualInformation>
        {!!title && <Title>{title}</Title>}
      </ContextualInformation>
      <SecondaryControls>{secondaryControlsComponent}</SecondaryControls>
    </StyledToolbar>
  );
};

Toolbar.defaultTheme = toolbarTheme;
