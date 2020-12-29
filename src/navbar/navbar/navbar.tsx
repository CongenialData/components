import * as React from "react";

import { StyledNavBar, StyledNavContainer } from "./navbar.styles";
import { navbarTheme } from "./navbar.theme";

import { NavBarProps } from "./navbar.interfaces";

export const NavBar = (props: NavBarProps): JSX.Element => {
  return (
    <StyledNavContainer>
      <StyledNavBar>{props.children}</StyledNavBar>
    </StyledNavContainer>
  );
};

NavBar.defaultTheme = navbarTheme;
