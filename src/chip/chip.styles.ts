import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ChipOptionalStyleProps,
  ChipRequiredStyleProps,
} from "./chip.interfaces";

export const Text = styled.span`
  ${({ theme: { Chip } }) => css`
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;

    color: ${Chip.text.color};
    font-size: ${Chip.text.size};
    line-height: 1rem;
    text-transform: ${Chip.text.transform};
  `};
`;

export const StyledChip = styled.div<
  ChipOptionalStyleProps & ChipRequiredStyleProps
>`
  ${({ disabled, maxWidth, theme: { Chip } }) => css`
    display: inline-flex;
    align-items: center;

    max-width: ${maxWidth || "none"};

    height: ${Chip.height};
    padding: ${Chip.padding};
    margin: ${Chip.margin};

    &:last-of-type {
      margin-right: 0;
    }

    background-color: ${Chip.backgroundColor};
    border-radius: ${Chip.borderRadius};

    transition: background-color 25ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      color: ${Chip.icon.color};
      font-size: ${Chip.icon.size};
    }

    ${() =>
      !disabled &&
      css`
        &:hover {
          background-color: ${Chip.hover.backgroundColor};

          cursor: pointer;

          svg {
            color: ${Chip.hover.iconColor};
          }

          ${Text} {
            color: ${Chip.text.color};
          }
        }
      `};
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;
export const RemoveIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;
