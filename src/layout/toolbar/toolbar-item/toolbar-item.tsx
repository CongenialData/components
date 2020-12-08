import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IThemedComponent } from 'components';
import { StyledToolbarItem } from './toolbar-item.styles';
import { IToolbarItemProps } from './toolbar-item.interfaces';
import { toolbarItemTheme } from './toolbar-item.theme';

export const ToolbarItem: React.FC<IToolbarItemProps> & IThemedComponent = ({
  children,
  icon,
  flex,
}) => {
  return (
    <StyledToolbarItem flex={flex || 1}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </StyledToolbarItem>
  );
};

ToolbarItem.defaultTheme = toolbarItemTheme;
ToolbarItem.displayName = 'ToolbarItem';
