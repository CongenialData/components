import styled from "styled-components/macro";

export const StyledListDescription = styled.p`
  color: ${({ theme }): string => theme.ListDescription.textColor};
  font-size: ${({ theme }): string => theme.ListDescription.fontSize};
  line-height: ${({ theme }): string => theme.ListDescription.lineHeight};
  margin: 0;
`;
