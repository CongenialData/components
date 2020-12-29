import styled, { css } from "styled-components/macro";

import {
  AlertOptionalStyleProps,
  AlertRequiredStyleProps,
} from "./alert.interfaces";

export const StyledAlert = styled.div<
  AlertOptionalStyleProps & AlertRequiredStyleProps
>`
  ${({ accent, outline, size, status, theme: { Alert } }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    border-radius: ${Alert.borderRadius};
    box-shadow: ${Alert.shadow};
    font-family: ${Alert.textFontFamily};
    font-size: ${Alert.textFontSize};
    font-weight: ${Alert.textFontWeight};
    line-height: ${Alert.textLineHeight};
    padding: ${Alert.padding};

    margin-bottom: ${Alert.bottomMargin};

    /**
     * Size
     */
    ${size && `height: ${Alert.size[size]}`};

    /**
     * Statuses
     */
    color: ${Alert.status[status].textColor};
    background-color: ${Alert.status[status].backgroundColor};
    a,
    a:hover {
      color: ${Alert.status[status].textColor};
    }

    /**
     * Accent
     */
    ${accent &&
    `
        border-top: ${Alert.borderRadius} solid ${Alert.accent[accent]};
    `};

    /**
     * Outline
     */
    ${outline &&
    `

        border: ${Alert.outlineWidth} solid ${Alert.outline[outline]};

    `};
  `};
`;
