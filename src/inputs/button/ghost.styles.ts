import { css } from "styled-components/macro";
import { TComponentStatus, outline } from "../../theming";

export const GhostButtonStyle = (status: TComponentStatus) =>
  css`
    ${({
      theme: {
        Button: {
          outlineColor,
          outlineWidth,
          appearance: { ghost },
        },
      },
    }) => {
      const insetShadow = ghost.focusInsetShadowLength;
      const cssWithOutline = outline(
        outlineWidth,
        outlineColor,
        insetShadow.toString()
      );

      return css`
        background-color: ${ghost[status].backgroundColor};
        border-color: ${ghost[status].borderColor};
        color: ${ghost[status].textColor};

        &:hover {
          background-color: ${ghost[status].hoverBackgroundColor};
          border-color: ${ghost[status].hoverBorderColor};
        }

        &:active {
          background-color: ${ghost[status].activeBackgroundColor};
          border-color: ${ghost[status].activeBorderColor};
        }

        &:focus {
          background-color: ${ghost[status].focusBackgroundColor};
          border-color: ${ghost[status].focusBorderColor};

          ${cssWithOutline};
        }

        &[disabled] {
          background-color: ${ghost[status].disabledBackgroundColor};
          border-color: ${ghost[status].disabledBorderColor};
          color: ${ghost[status].disabledTextColor};
        }
      `;
    }};
  `;
