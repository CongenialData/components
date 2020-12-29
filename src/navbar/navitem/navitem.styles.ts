/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from "styled-components/macro";
import { StyledNavItemProps } from "./navitem";

export const Label = styled.span`
  ${({ theme: { NavItem } }) => css`
    color: ${NavItem.color};
    font-size: ${NavItem.fontSize};
    margin-left: 1rem;
    vertical-align: middle;
  `};
`;

export const IconWrapper = styled.div`
  width: 3rem;
`;

export const StyledNavItem = styled.li<StyledNavItemProps>`
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

    // TODO: Add styling to active <NavItem />
  `};
`;
