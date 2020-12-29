import styled from "styled-components/macro";

export const StyledListExtraRight = styled.div`
  flex: 0 1 auto;
  padding: ${({ theme }): string => theme.ListExtraRight.padding};
`;
