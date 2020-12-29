import styled, { css } from "styled-components/macro";

export const StyledNavContainer = styled.div`
  ${({ theme: { breakpoints, NavBar } }) => css`
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    box-shadow: ${NavBar.shadow.offsetX} ${NavBar.shadow.offsetY}
      ${NavBar.shadow.blurRadius} ${NavBar.shadow.spread} ${NavBar.shadow.color};

    height: 100%;
    width: 100%;

    background: ${NavBar.backgroundColor};

    @media screen and (min-width: ${breakpoints.mdContainer}) {
      width: ${NavBar.barWidth};
      flex-direction: column;
    }
  `}
`;
export const StyledNavBar = styled.nav`
  ${({ theme: { breakpoints, NavBar } }) => css`
    display: flex;

    color: ${NavBar.color};
    font-family: ${NavBar.fontFamily};
    font-size: ${NavBar.fontSize};
    font-weight: ${NavBar.fontWeight};
    line-height: ${NavBar.lineHeight};

    /** Navbar on the bottom */
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

    /* NavBar to the left */
    @media screen and (min-width: ${breakpoints.mdContainer}) {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: ${NavBar.itemsTopMarginDesktop};
    }
  `};
`;
