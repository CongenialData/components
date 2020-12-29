import styled from "styled-components/macro";

import { StyledLabelProps } from "./label.interfaces";

export const StyledLabel = styled.label.attrs({ role: "label" })<
  StyledLabelProps
>`
  color: ${({ theme }) => theme.Label.color};
  font-family: ${({ theme }) => theme.Label.fontFamily};
  font-size: ${({ theme }) => theme.Label.fontSize};
  font-weight: ${({ theme }) => theme.Label.fontWeight};
  line-height: ${({ theme }) => theme.Label.lineHeight};

  margin-bottom: 0.25rem;
`;
