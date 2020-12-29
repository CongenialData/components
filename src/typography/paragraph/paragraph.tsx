import * as React from "react";

/* Import components here */
import { StyledParagraph } from "./paragraph.styles";

/* Import interfaces here */
import { ParagraphProps } from "./paragraph.interfaces";

/* Import utilities here */
import { paragraphTheme } from "./paragraph.theme";

export const Paragraph = ({
  alignSelf = "start",
  variant = "default",
  textAlign = "start",
  children,
}: ParagraphProps): JSX.Element => {
  return (
    <StyledParagraph
      alignSelf={alignSelf}
      textAlign={textAlign}
      variant={variant}
    >
      {children}
    </StyledParagraph>
  );
};

Paragraph.defaultTheme = paragraphTheme;
