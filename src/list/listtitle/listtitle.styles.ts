import styled from "styled-components/macro";

export const StyledListTitle = styled.span`
  color: ${({ theme }): string => theme.colors.TEXT_BASIC_COLOR};
  display: block;
  font-size: ${({ theme }): string => theme.ListTitle.fontSize};
  font-weight: ${({ theme }): string => theme.ListTitle.fontWeight};
  line-height: 24px;
`;
