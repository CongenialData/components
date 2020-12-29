import * as React from "react";

/* Import components here */
import { StyledLabel } from "./label.styles";

/* Import interfaces here */
import { LabelProps } from "./label.interfaces";

/* Import utilities here */
import { labelTheme } from "./label.theme";

export const Label = ({ children, ...props }: LabelProps): JSX.Element => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

Label.defaultTheme = labelTheme;
