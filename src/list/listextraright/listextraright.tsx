import React from "react";

/* Import components here */
import { StyledListExtraRight } from "./listextraright.styles";

/* Import interfaces here */
import { IListExtraRightProps } from "./listextraright.interfaces";
import { listExtraRightTheme } from "./listextraright.theme";

/* Import utilities here */

export const ListExtraRight = ({
  children,
  ...props
}: React.HTMLAttributes<IListExtraRightProps>): JSX.Element => {
  return <StyledListExtraRight {...props}>{children}</StyledListExtraRight>;
};

ListExtraRight.defaultTheme = listExtraRightTheme;
