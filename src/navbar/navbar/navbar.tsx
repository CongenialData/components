import * as React from 'react';

import { StyledNavBar, StyledNavContainer } from './navbar.styles';
import { navbarTheme } from './navbar.theme';

import { INavBarProps } from './navbar.interfaces';

export const NavBar = (props: INavBarProps): JSX.Element => {
  return (
    <StyledNavContainer>
      <StyledNavBar>{props.children}</StyledNavBar>
    </StyledNavContainer>
  );
};

NavBar.defaultTheme = navbarTheme;
