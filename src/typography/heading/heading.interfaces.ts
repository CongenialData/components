export interface StyledHeadingProps {
  /**
   *
   *
   * Defaults to `h1`.
   */
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /** How to align the text inside the heading. Defaults to `start`. */
  textAlign: "start" | "center" | "end";

  /** How to align along the cross axis or along the column axis. Direction depends on container flex-direction. */
  alignSelf?: "start" | "center" | "end" | "stretch";

  /** A color identifier to use for the text color. */
  color?: string;

  /** Restrict the text to a single line and truncate with ellipsis if it
  is too long to all fit. */
  truncate?: boolean;
}

export interface HeadingProps extends Partial<StyledHeadingProps> {
  children?: React.ReactNode | React.ReactNode[];
}
