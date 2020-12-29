import styled, { css } from "styled-components/macro";

import { Module } from "../../module";
import { StyledListContent } from "../../../list/listitem/listitem.styles";

export const StyledSidebar = styled(Module)`
  ${({ theme: { breakpoints, Sidebar } }) => css`
    overflow: auto;
    margin: 1rem 1rem 1rem 0;
    padding-left: 1rem;

    @media (min-width: ${breakpoints.mdContainer}) {
      position: unset;
      width: ${Sidebar.width};
    }

    ${StyledListContent} {
      margin-right: 0; /* FIXME: Rewrite the list component and remove this*/
    }
  `};
`;
