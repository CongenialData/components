import * as React from 'react';

/* Import components here */
import {
  StyledDescription,
  StyledEmptyState,
  StyledIcon,
  StyledTitle,
} from './empty-state.styles';

/* Import interfaces here */
import { IEmptyStateProps } from './empty-state.interfaces';
import { emptyState } from './empty-state.theme';

/* Import utilities here */

export const EmptyState = ({
  className,
  title,
  description,
  icon,
}: IEmptyStateProps): JSX.Element => {
  return (
    <StyledEmptyState className={className}>
      {!!icon && <StyledIcon>{icon}</StyledIcon>}
      {!!title && <StyledTitle>{title}</StyledTitle>}
      {!!description && <StyledDescription>{description}</StyledDescription>}
    </StyledEmptyState>
  );
};

EmptyState.defaultTheme = emptyState;
