import styled from "styled-components/macro";

import { StyledCaptionRequiredProps } from "./caption.interfaces";

export const StyledCaption = styled.span<StyledCaptionRequiredProps>`
  color: ${({ theme, status }) => theme.Caption.status[status].color};

  font-family: ${({ theme, type }) => theme.Caption.type[type].fontFamily};
  font-size: ${({ theme, type }) => theme.Caption.type[type].fontSize};
  font-weight: ${({ theme, type }) => theme.Caption.type[type].fontWeight};
  line-height: ${({ theme, type }) => theme.Caption.type[type].lineHeight};

  text-align: start;

  margin-top: 0.25rem;
`;
