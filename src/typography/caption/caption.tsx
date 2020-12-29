import * as React from "react";

/* Import components here */
import { StyledCaption } from "./caption.styles";

/* Import interfaces here */
import { CaptionProps } from "./caption.interfaces";

/* Import utilities here */
import { captionTheme } from "./caption.theme";

export const Caption = ({
  type = "default",
  status = "basic",
  children,
}: CaptionProps): JSX.Element => {
  return (
    <StyledCaption status={status} type={type}>
      {children}
    </StyledCaption>
  );
};

Caption.defaultTheme = captionTheme;
