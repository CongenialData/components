import React from 'react';

/* Import components here */
import { StyledAlert } from './alert.styles';

/* Import interfaces here */
import { IAlertProps } from './alert.interfaces';
import { alertTheme } from './alert.theme';

/* Import utilities here */

export const Alert = ({
  accent,
  message,
  outline,
  size,
  status = 'basic',
}: IAlertProps): JSX.Element => {
  return (
    <StyledAlert accent={accent} outline={outline} size={size} status={status}>
      {message}
    </StyledAlert>
  );
};

Alert.defaultTheme = alertTheme;
