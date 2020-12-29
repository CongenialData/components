import * as React from "react";

import { navitemTheme } from "./navitem.theme";
import { IconWrapper, Label, StyledNavItem } from "./navitem.styles";

interface NavItemComponentsProps {
  icon: JSX.Element;
  /** Text to be displayed next to the icon */
  label: string;
}

export interface StyledNavItemProps {
  to: string;
}

interface NavItemProps extends NavItemComponentsProps, StyledNavItemProps {}

export const NavItem = (props: NavItemProps): JSX.Element => {
  const { icon, to, label } = props;

  return (
    <StyledNavItem to={to}>
      <IconWrapper>
        {icon && icon}
      </IconWrapper>
      <Label>{label}</Label>
    </StyledNavItem>
  );
};

NavItem.defaultTheme = navitemTheme;
