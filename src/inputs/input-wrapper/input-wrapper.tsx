import * as React from "react";

/* Import components here */
import { StyledInputWrapper } from "./input-wrapper.styles";

/* Import interfaces here */
import { InputWrapperProps } from "./input-wrapper.interfaces";

/* Import utilities here */
import { inputWrapperTheme } from "./input-wrapper.theme";

export const InputWrapper = (props: InputWrapperProps): JSX.Element => {
  const { direction = "horizontal", size = "medium", children } = props;

  return (
    <StyledInputWrapper direction={direction} size={size}>
      {children}
    </StyledInputWrapper>
  );
};

InputWrapper.defaultTheme = inputWrapperTheme;
