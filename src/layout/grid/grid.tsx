import * as React from "react";

/* Import components here */
import { StyledGrid } from "./grid.styles";

/* Import interfaces here */
import { GridProps } from "./grid.interfaces";
import { gridTheme } from "./grid.theme";

export const Grid = (props: GridProps): JSX.Element => {
  const { children, columns = 4, mdColumns, xlColumns, ...restProps } = props;

  const md = mdColumns || columns;
  const xl = xlColumns || mdColumns || columns;

  return (
    <StyledGrid columns={columns} mdColumns={md} xlColumns={xl} {...restProps}>
      {children}
    </StyledGrid>
  );
};

Grid.defaultTheme = gridTheme;
