/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components/macro'
import { NavLink } from 'react-router-dom' // TODO: This shouldn't be a dependency, we want our components to be compatible with all routers

export const Label = styled.span`
  ${({ theme: { NavItem } }) => css`
    color: ${NavItem.color};
    font-size: ${NavItem.fontSize};
    margin-left: 1rem;
    vertical-align: middle;
  `};
`

export const IconWrapper = styled.div`
  width: 3rem;
`

const ACTIVE = 'active-navitem'
export const StyledNavItem = styled(NavLink).attrs({
  activeClassName: ACTIVE,
})`
  ${({ theme: { NavItem } }) => css`
    display: flex;
    flex: 1;
    height: 3rem;
    font-size: ${NavItem.fontSize};
    line-height: ${NavItem.lineHeight};
    font-weight: ${NavItem.fontWeight};
    background: ${NavItem.background};
    padding: ${NavItem.padding};

    border-bottom-width: ${NavItem.borderWidth};
    border-bottom-style: ${NavItem.borderStyle};
    border-bottom-color: ${NavItem.borderColor};

    align-items: center;
    text-decoration: none;

    svg {
      font-size: ${NavItem.iconSize};
    }

    ${Label} {
      margin-left: 0;
    }

    --fa-primary-color: ${NavItem.iconPrimary};
    --fa-secondary-color: ${NavItem.iconSecondary};
    --fa-primary-opacity: ${NavItem.iconPrimaryOpacity};
    --fa-secondary-opacity: ${NavItem.iconSecondaryOpacity};

    &:hover {
      ${Label} {
        color: ${NavItem.colorHover};
      }

      --fa-primary-color: ${NavItem.iconPrimaryHover};
      --fa-primary-opacity: ${NavItem.iconPrimaryHoverOpacity};
      --fa-secondary-color: ${NavItem.iconSecondaryHover};
      --fa-secondary-opacity: ${NavItem.iconSecondaryHoverOpacity};
    }

    &.${ACTIVE} {
      background: ${NavItem.backgroundSelected};

      ${IconWrapper} {
        margin-left: -${NavItem.borderActiveWidth};
      }

      --fa-primary-color: ${NavItem.iconActivePrimary};
      --fa-primary-opacity: ${NavItem.iconActivePrimaryOpacity};
      --fa-secondary-color: ${NavItem.iconActiveSecondary};
      --fa-secondary-opacity: ${NavItem.iconActiveSecondaryOpacity};

      ${Label} {
        color: ${NavItem.colorActive};
      }

      > svg {
        animation-duration: 0.25s;
        animation-name: scale;
      }

      @media screen and (min-width: ${({ theme }): string => theme.breakpoints.mdContainer}) {
        border-left: ${NavItem.borderActiveWidth} solid ${NavItem.borderActive};

        > svg {
          margin-bottom: 0;
          margin-left: -${NavItem.borderWidth};
        }
      }
    }

    @media screen and (min-width: ${({ theme }): string => theme.breakpoints.mdContainer}) {
      flex: auto;
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }
  `};
`
