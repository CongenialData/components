import styled, { css } from "styled-components/macro";
import { ToolbarItemStyleProps } from "./toolbar-item.interfaces";

export const StyledToolbarItem = styled.li<ToolbarItemStyleProps>`
  ${({ theme: { ToolbarItem }, flex = 1 }) => css`
    display: flex;
    flex: ${flex};
    flex-direction: row;}
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;

    padding: 0 1.25rem;
    border-left: 1px solid ${ToolbarItem.dividerColor};

    color: ${ToolbarItem.color};
    font-family: ${ToolbarItem.fontFamily};
    font-weight: ${ToolbarItem.fontWeight};;
    line-height: ${ToolbarItem.lineHeight};;

    > svg {
      font-size: 1.25rem;
      margin-right: 1rem;
    }
  `};
`;
