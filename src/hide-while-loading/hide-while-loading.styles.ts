import styled from "styled-components/macro";

export const StyledHideWhileLoading = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background: ${({ theme }): string => theme.colors.BACKGROUND_BASIC_COLOR_1};
  opacity: 0.9;

  display: flex;
  align-items: center;
  justify-content: center;
`;
