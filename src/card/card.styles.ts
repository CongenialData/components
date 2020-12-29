import styled, { css } from "styled-components/macro";

import { CardStyleProps, Spacing } from "./card.interfaces";

export const StyledCard = styled.div<CardStyleProps>`
  ${({ shadow, size, theme: { Card } }) => css`
    background-color: ${Card.backgroundColor};
    border: ${Card.borderWidth} ${Card.borderStyle} ${Card.borderColor};
    border-radius: ${Card.borderRadius};
    box-shadow: ${shadow && `${Card.shadow}`};

    color: ${Card.textColor};
    font-family: ${Card.textFontFamily};
    font-size: ${Card.textFontSize};
    font-weight: ${Card.textFontWeight};
    line-height: ${Card.textLineHeight};

    margin-bottom: ${Card.marginBottom};

    ${size && `height: ${Card.size[size]}`};

    a {
      color: ${Card.textColor};
    }

    & + & {
      margin-top: 1.5rem;
    }
  `};
`;

export const Content = styled.div<{ spacing: Spacing }>`
  ${({ spacing, theme: { Card } }) => css`
    padding: ${Card.spacing[spacing]};
  `};
`;

export const Title = styled.div<Pick<CardStyleProps, "status">>`
  ${({ theme: { Card }, status }) => css`
    font-family: ${Card.header.textFontFamily};
    font-size: ${Card.header.textFontSize};
    font-weight: ${Card.header.textFontWeight};
    line-height: ${Card.header.textLineHeight};
    color: ${Card.header.status[status].textColor};
  `}
`;
export const Header = styled.div<Omit<CardStyleProps, "shadow">>`
  ${({ accent, spacing, status, theme: { Card } }) => css`
    padding: ${Card.spacing[spacing]};
    border-bottom: ${Card.dividerWidth} ${Card.dividerStyle}
      ${Card.dividerColor};
    border-top-left-radius: ${Card.borderRadius};
    border-top-right-radius: ${Card.borderRadius};

    color: ${Card.header.textColor};

    display: flex;
    justify-content: space-between;
    align-items: center;

    /**
     * Status
    */
    background-color: ${Card.header.status[status].backgroundColor};
    border-bottom-width: 0;
    border-bottom-color: ${Card.header.status[status].backgroundColor};
    color: ${Card.header.status[status].textColor};

    a,
    a:hover {
      color: ${Card.header.status[status].textColor};
    }

    /**
     * Accent
     */
    ${accent &&
    `
      border-top-color: ${Card.header.status[accent].backgroundColor};
      border-top-style: ${Card.borderStyle};
      border-top-width: ${Card.borderRadius};
    `};
  `};
`;

export const Footer = styled.div<{ spacing: Spacing }>`
  ${({ spacing, theme: { Card } }) => css`
    padding: ${Card.spacing[spacing]};
    border-top: ${Card.dividerWidth} ${Card.dividerStyle} ${Card.dividerColor};
    border-bottom-left-radius: nb-theme(card-border-radius);
    border-bottom-right-radius: nb-theme(card-border-radius);
  `};
`;
