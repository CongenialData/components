import React from "react";

/* Import components here */
import { StyledHeading } from "./heading.styles";

/* Import interfaces here */
import { HeadingProps } from "./heading.interfaces";

/* Import utilities here */
import { headingTheme } from "./heading.theme";

export const Heading = ({
  level = "h1",
  textAlign = "start",
  children,
  ...props
}: HeadingProps): JSX.Element => {
  return (
    <StyledHeading as={level} level={level} textAlign={textAlign} {...props}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultTheme = headingTheme;
