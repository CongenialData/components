import { css } from "styled-components/macro";
import { TComponentStatus } from "../../theming";

export const OutlineButtonStyle = (status: TComponentStatus) => css`
  ${({
    theme: {
      Button: {
        appearance: { outline },
      },
    },
  }) => {
    return css`
      background-color: ${outline[status].backgroundColor};
      border-color: ${outline[status].borderColor};
      color: ${outline[status].textColor};

      &:hover {
        background-color: ${outline[status].hoverBackgroundColor};
        border-color: ${outline[status].hoverBorderColor};
      }

      &:active {
        background-color: ${outline[status].activeBackgroundColor};
        border-color: ${outline[status].activeBorderColor};
      }

      &:focus {
        background-color: ${outline[status].focusBackgroundColor};
        border-color: ${outline[status].focusBorderColor};
      }

      &[disabled] {
        background-color: ${outline[status].disabledBackgroundColor};
        border-color: ${outline[status].disabledBorderColor};
        color: ${outline[status].disabledTextColor};
      }
    `;
  }};
`;
