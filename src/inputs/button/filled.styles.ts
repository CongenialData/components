import { css } from "styled-components/macro";
import { TComponentStatus } from "../../theming";

export const FilledButtonStyle = (status: TComponentStatus) => css`
  ${({
    theme: {
      Button: {
        appearance: { filled },
      },
    },
  }) => {
    return css`
      background-color: ${filled[status].backgroundColor};
      border-color: ${filled[status].borderColor};
      color: ${filled[status].textColor};

      &:hover {
        background-color: ${filled[status].hoverBackgroundColor};
        border-color: ${filled[status].hoverBorderColor};
      }

      &:active {
        background-color: ${filled[status].activeBackgroundColor};
        border-color: ${filled[status].activeBorderColor};
      }

      &:focus {
        background-color: ${filled[status].focusBackgroundColor};
        border-color: ${filled[status].focusBorderColor};
      }

      &[disabled] {
        background-color: ${filled[status].disabledBackgroundColor};
        border-color: ${filled[status].disabledBorderColor};
        color: ${filled[status].disabledTextColor};
      }
    `;
  }};
`;
