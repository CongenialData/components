import styled from "styled-components/macro";

export const StyledEmptyState = styled.div`
  margin: ${({ theme }): string => theme.EmptyState.margin};
  background: ${({ theme }): string => theme.EmptyState.background};
  color: ${({ theme }): string => theme.EmptyState.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIcon = styled.div`
  font-size: ${({ theme }): string => theme.EmptyState.icon.fontSize};
  margin-bottom: 1rem;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }): string => theme.EmptyState.title.fontSize};
  font-weight: ${({ theme }): string => theme.EmptyState.title.fontWeight};
`;

export const StyledDescription = styled.p`
  font-size: ${({ theme }): string => theme.EmptyState.description.fontSize};
`;
