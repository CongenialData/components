import styled, { css } from "styled-components/macro";

export const StyledToolbar = styled.header`
  ${({ theme: { breakpoints, Toolbar } }) => css`
    background: ${Toolbar.backgroundColor};

    color: black;

    display: flex;
    height: ${Toolbar.height};
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
    z-index: 2;

    box-shadow: ${Toolbar.shadow.offsetX} ${Toolbar.shadow.offsetY}
      ${Toolbar.shadow.blurRadius} ${Toolbar.shadow.spread}
      ${Toolbar.shadow.color};

    @media screen and (min-width: ${breakpoints.mdContainer}) {
      background: ${Toolbar.backgroundColor};
    }
  `};
`;

export const MenuTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ProjectTitle = styled.h1`
  color: #222b45;
  display: inline;
  font-size: 1.75rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export const PrimaryControls = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`;

export const SecondaryControls = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const ContextualInformation = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  ${({ theme: { breakpoints, Toolbar } }) => css`
    font-size: 1.25rem;
    font-weight: 600;

    text-transform: uppercase;

    color: ${Toolbar.textColor};

    @media screen and (min-width: ${breakpoints.mdContainer}) {
      color: ${Toolbar.titleColor};
    }
  `}
`;
