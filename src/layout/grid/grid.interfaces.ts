export interface GridStyleProps {
  /**
   * Number of columns in the grid
   * @default 4
   */
  columns: number;

  /**
   * Number of columns in the grid for md devices
   *
   * Default: `columns` if it is specified, otherwise 4.
   */
  mdColumns: number;

  /**
   * Number of columns in the grid for xl devices.
   *
   * Default: `mdColumns` if it is specified, otherwise 4.
   */
  xlColumns: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GridComponentProps {}

export interface GridProps extends Partial<GridStyleProps>, GridComponentProps {
  children?: React.ReactNode | React.ReactNode[];
}
