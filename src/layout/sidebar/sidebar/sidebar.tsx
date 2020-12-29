import React from "react";

/* Import components here */
import { StyledSidebar } from "./sidebar.styles";

/* Import interfaces here */
import { sidebarTheme } from "./sidebar.theme";
import { SidebarProps } from "./sidebar.interfaces";

export const Sidebar = ({ children, title }: SidebarProps): JSX.Element => {
  return <StyledSidebar title={title}>{children}</StyledSidebar>;
};

Sidebar.defaultTheme = sidebarTheme;
