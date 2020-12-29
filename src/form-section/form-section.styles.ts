import styled, { css } from "styled-components/macro";

import { StyledHeading } from "../typography/heading/heading.styles";

import {
  FormSectionComponentProps,
  FormSectionRequiredStyleProps,
} from "./form-section.interfaces";

export const StyledFormSection = styled.div<FormSectionRequiredStyleProps>`
  ${({ border, theme: { FormSection } }) => {
    const borderBottom =
      border &&
      `${FormSection.border.width} ${FormSection.border.style} ${FormSection.border.color}`;

    return css`
      display: flex;
      flex-direction: column;
      padding: ${FormSection.padding};

      border-bottom: ${borderBottom};
    `;
  }}
`;

export const Header = styled.div<FormSectionComponentProps>`
  ${({ theme: { FormSection } }) => css`
    margin-bottom: ${FormSection.heading.marginBottom};

    > svg {
      --fa-primary-color: ${FormSection.icon.primaryColor};
      --fa-primary-opacity: ${FormSection.icon.primaryOpacity};
      --fa-secondary-color: ${FormSection.icon.secondaryColor};
      --fa-secondary-opacity: ${FormSection.icon.secondaryOpacity};
      margin-right: ${FormSection.icon.marginRight};
    }

    ${StyledHeading} {
      display: inline;

      font-size: ${FormSection.heading.fontSize};
      line-height: initial;
    }
  `}
`;

export const Body = styled.div``;
