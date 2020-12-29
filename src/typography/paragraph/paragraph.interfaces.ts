export interface StyledParagraphRequiredProps {
  /**
   * How to align along the cross axis or along the column axis. Direction depends on container flex-direction.
   *
   * Defaults to `start`
   */
  alignSelf: "start" | "center" | "end" | "stretch";

  /**
   * How to align the text inside the paragraph.
   *
   * Defaults to `start`
   */
  textAlign: "start" | "center" | "end";

  /**
   * Paragraph has two different variants, `default` and `alternate`.
   *
   * The default styling for the alternate type is smaller than the default one.
   *
   * Defaults to 'default'
   */
  variant: "default" | "alternate";
}

export interface StyledParagraphOptionalProps {
  /** A color identifier to use for the text color. */
  color?: string;

  /** Restrict the text to a single line and truncate with ellipsis if it
  is too long to all fit. */
  truncate?: boolean;
}

export interface ParagraphProps
  extends Partial<StyledParagraphRequiredProps>,
    StyledParagraphOptionalProps {
  children?: React.ReactChild;
}
