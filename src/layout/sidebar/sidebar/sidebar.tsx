import React from 'react';

/* Import components here */
import { StyledSidebar } from './sidebar.styles';

/* Import interfaces here */
import { sidebarTheme } from './sidebar.theme';
import { ISidebarProps } from './sidebar.interfaces';

export const Sidebar = ({ children, title }: ISidebarProps): JSX.Element => {
  return <StyledSidebar title={title}>{children}</StyledSidebar>;
};

Sidebar.defaultTheme = sidebarTheme;
