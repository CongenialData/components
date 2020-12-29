import styled, { css } from "styled-components/macro";

/* Import interfaces here */
import { GridStyleProps } from "./grid.interfaces";

const calculateGridColumns = (
  columns: number,
  mdColumns: number,
  xlColumns: number
) => {
  return css`
    grid-template-columns: repeat(${columns}, 1fr);

    /* Medium, and above */
    @media (min-width: ${({ theme }): string =>
        theme.breakpoints.mdContainer}) {
      grid-template-columns: repeat(${mdColumns}, 1fr);
    }

    /* XL, and above */
    @media (min-width: ${({ theme }): string =>
        theme.breakpoints.xlContainer}) {
      grid-template-columns: repeat(${xlColumns}, 1fr);
    }
  `;
};

export const StyledGrid = styled.div<GridStyleProps>`
  --grid-columns: ${({ columns }): string => String(columns)};
  --md-grid-columns: ${({ mdColumns }): string => String(mdColumns)};
  --xl-grid-columns: ${({ xlColumns }): string => String(xlColumns)};

  display: grid;
  grid-auto-flow: dense;
  gap: 2rem 1rem;
  width: 100%;

  ${({ columns, mdColumns, xlColumns }) =>
    calculateGridColumns(columns, mdColumns, xlColumns)};
`;
