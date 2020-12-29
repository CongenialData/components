import * as React from "react";

/* Import components here */
import { StyledModule, Title } from "./module.styles";

/* Import interfaces here */
import { ModuleProps } from "./module.interfaces";
import { moduleTheme } from "./module.theme";

export const Module = ({
  children,
  title,
  ...props
}: ModuleProps): JSX.Element => {
  return (
    <StyledModule {...props}>
      {title && <Title>{title}</Title>}
      {children}
    </StyledModule>
  );
};

Module.defaultTheme = moduleTheme;
