import styled from "styled-components/macro";

export const StyledListItem = styled.li`
  display: flex;
  flex: 0 1 auto;
  padding: 0.25rem 0;
`;

export const StyledListContent = styled.div`
  flex: 1 1 auto;
  margin: 0.25rem 0;

  &:first-child {
    margin-left: 1rem;
  }

  &:last-child {
    margin-right: 1rem;
  }
`;
