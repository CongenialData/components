export interface ModuleStyleProps {
  /**
   * The number of columns to **span**
   * @default 4
   */
  columns?: number;

  /**
   * The column to **offset/begin** at
   * @default auto
   */
  startColumn?: number;

  /**
   * The number of columns to **span** in medium screen sizes
   * @default Value specified in parent <Grid />
   */
  mdColumns?: number;

  /**
   * The column to **offset/begin** at in medium screen sizes
   * @default Value of startColumn
   */
  mdStartColumn?: number;

  /**
   * The number of columns to **span** in extra large screen sizes
   * @default Value of mdColumns
   */
  xlColumns?: number;

  /**
   * The column to **offset/begin** at in extra large screen sizes
   * @default Value of mdStartColumn
   */
  xlStartColumn?: number;

  /**
   * Additional CSS styling to override default styles
   */
  style?: React.CSSProperties;
}

export interface ModuleComponentProps {
  /**
   * A large title
   */
  title?: string;
}

export interface ModuleProps extends ModuleStyleProps, ModuleComponentProps {
  children?: React.ReactNode;
}
