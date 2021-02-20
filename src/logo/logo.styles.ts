/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/macro'

export const StyledLogo = styled.div`
  @media screen and (min-width: ${({ theme }): string => theme.breakpoints.mdContainer}) {
    width: ${({ theme }) => theme.Logo.width};
    height: ${({ theme }) => theme.Logo.height};
    padding: ${({ theme }) => theme.Logo.padding};
    box-sizing: border-box;

    &::before {
      content: ' ';
      display: block;
      width: 100%;
      height: 100%;

      background: url(${({ theme }) => theme.Logo.logoUrl}) no-repeat center;
      background-size: contain;
    }
  }
`
