import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/free-solid-svg-icons';

/* Import components here */
import { Overlay, StyledHideWhileLoading } from './hide-while-loading.styles';

/* Import interfaces here */
import { IHideWhileLoadingProps } from './hide-while-loading.interfaces';

export const HideWhileLoading = ({
  children,
  ...props
}: IHideWhileLoadingProps): JSX.Element => {
  const { isLoading, error } = props;
  return (
    <StyledHideWhileLoading {...props}>
      {children}
      {(isLoading || error) && (
        <Overlay>
          {!error ? (
            <FontAwesomeIcon icon={faSpinnerThird} spin={true} />
          ) : (
            <span>{error}</span>
          )}
        </Overlay>
      )}
    </StyledHideWhileLoading>
  );
};
