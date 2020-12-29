import styled from "styled-components/macro";

export const StyledListExtraLeft = styled.div`
  flex: 0 1 auto;
  padding: ${({ theme }): string => theme.ListExtraLeft.padding};
  margin: 0.25rem 0.5rem 0 0;
`;
