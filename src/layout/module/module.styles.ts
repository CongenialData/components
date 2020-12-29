import styled from "styled-components/macro";

import { ModuleStyleProps } from "./module.interfaces";

const numberToString = (
  value: number | undefined,
  defaultValue: string
): string => (value ? String(value) : defaultValue);

export const StyledModule = styled.div<ModuleStyleProps>`
  /* Different values for the grid column span */
  --columns: ${({ columns }): string =>
    numberToString(columns, "var(--grid-columns)")};
  --md-columns: ${({ mdColumns }): string =>
    numberToString(mdColumns, "var(--columns)")};
  --xl-columns: ${({ xlColumns }): string =>
    numberToString(xlColumns, "var(--md-columns)")};

  /*
   * The grid column span rule
   * (Bubbles up)
   */
  --column-span: var(--columns);

  /* Different values for the grid offset column */
  --start-column: ${({ startColumn }): string =>
    numberToString(startColumn, "auto")};
  --md-start-column: ${({ mdStartColumn }): string =>
    numberToString(mdStartColumn, "var(--start-column)")};
  --xl-start-column: ${({ xlStartColumn }): string =>
    numberToString(xlStartColumn, "var(--md-start-column)")};

  /* The grid offset column rule */
  --offset-column: var(--start-column);

  grid-column-start: var(--offset-column);
  grid-column-end: span var(--column-span);

  /* -- Update the grid column rules with a proper value based on the screen size */

  /* Medium, and above */
  @media (min-width: ${({ theme }): string => theme.breakpoints.mdContainer}) {
    --column-span: var(--md-columns);
    --offset-column: var(--md-start-column);
  }

  /* Extra large, and above */
  @media (min-width: ${({ theme }): string => theme.breakpoints.xlContainer}) {
    --column-span: var(--xl-columns);
    --offset-column: var(--xl-start-column);
  }

  /* -- End: Update the grid column rules with a proper value based on the screen size */
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
`;
