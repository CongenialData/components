import styled, { css } from "styled-components/macro";
import { Card } from "../../../card";
import { SidebarModuleStyleProps } from "./sidebarmodule.interfaces";

export const StyledSidebarModule = styled(Card)`
  ${({ theme: { SidebarModule } }) => css`
    background: ${SidebarModule.background};
    position: relative;

    > div {
      padding: 0;
    }
  `};
`;

export const StyledHeader = styled.div`
  ${({ theme: { Card, SidebarModule } }) => css`
    cursor: pointer;

    background: ${SidebarModule.header.background};

    border-top-left-radius: ${Card.borderRadius};
    border-top-right-radius: ${Card.borderRadius};
  `};
`;

export const Title = styled.h3`
  ${({ theme: { SidebarModule } }) => css`
    color: ${SidebarModule.title.color};
    text-align: ${SidebarModule.title.textAlign};
    padding: ${SidebarModule.title.padding};
    margin: 0;

    div {
      padding: 0;
    }
  `};
`;

export const Content = styled.div<SidebarModuleStyleProps>`
  ${({ contentPadding, theme: { SidebarModule } }) => css`
    position: relative;
    display: flex;
    padding: ${contentPadding === "none" ? "0" : SidebarModule.content.padding};
    flex-direction: column;
  `};
`;
