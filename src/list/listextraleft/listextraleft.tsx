import React from "react";

/* Import components here */
import { StyledListExtraLeft } from "./listextraleft.styles";

/* Import interfaces here */
import { ListExtraLeftProps } from "./listextraleft.interfaces";
import { listExtraLeftTheme } from "./listextraleft.theme";

/* Import utilities here */

export const ListExtraLeft = ({
  children,
  ...props
}: React.HTMLAttributes<ListExtraLeftProps>): JSX.Element => {
  return <StyledListExtraLeft {...props}>{children}</StyledListExtraLeft>;
};

ListExtraLeft.defaultTheme = listExtraLeftTheme;
