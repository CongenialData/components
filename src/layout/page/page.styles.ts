import styled, { css } from "styled-components/macro";

import { Card } from "../../card/card";
import { Header, Title } from "../../card/card.styles";

export const StyledPage = styled.div`
  ${({ theme: { Page } }) => css`
    background: ${Page.background};
    display: flex;
    overflow: hidden;
  `}
`;

export const PageContainer = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;

    @media screen and (min-width: ${breakpoints.mdContainer}) {
      height: 100vh;
      display: flex;
    }
  `};
`;

export const PageBody = styled.div`
  height: 100%;
  display: flex;
  overflow-y: scroll;
  flex: 1;
`;

export const PageContentWrapper = styled.div`
  flex: 1;
  margin: 0;
  padding: 1rem 0 1rem 1rem;
  overflow: auto;
  height: 100%;
`;

export const PageContent = styled(Card)`
  ${({ theme: { Page } }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 0;

    ${Header} {
      background-color: ${Page.topBackground};
    }

    ${Title} {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${Page.topTextColor};
    }
  `};
`;
