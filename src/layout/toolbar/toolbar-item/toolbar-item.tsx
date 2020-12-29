import React from "react";

import { StyledToolbarItem } from "./toolbar-item.styles";
import { ToolbarItemProps } from "./toolbar-item.interfaces";
import { toolbarItemTheme } from "./toolbar-item.theme";

export const ToolbarItem = ({
  children,
  icon,
  flex,
}: ToolbarItemProps): JSX.Element => {
  return (
    <StyledToolbarItem flex={flex || 1}>
      {icon && icon}
      {children}
    </StyledToolbarItem>
  );
};

ToolbarItem.defaultTheme = toolbarItemTheme;
ToolbarItem.displayName = "ToolbarItem";
