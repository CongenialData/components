import styled, { css } from "styled-components/macro";

import {
  StyledInputWrapperOptionalProps,
  StyledInputWrapperRequiredProps,
} from "./input-wrapper.interfaces";

export const StyledInputWrapper = styled.div<
  StyledInputWrapperOptionalProps & StyledInputWrapperRequiredProps
>`
  ${({ direction, size, theme: { InputWrapper } }) => {
    /** Calculates the margin based on direction and size property defined in theme. */
    const margin =
      direction === "horizontal"
        ? `0 ${InputWrapper.size[size]} 0 0`
        : `0 0 ${InputWrapper.size[size]} 0`;
    const calculatedDirection = direction === "vertical" ? "column" : "row";

    return css`
      display: ${InputWrapper.display};
      flex-direction: ${calculatedDirection};
      justify-content: space-between;

      & + & {
        margin-top: 1rem;
      }

      & > :not(:last-child) {
        margin: ${margin};
      }
    `;
  }};
`;
