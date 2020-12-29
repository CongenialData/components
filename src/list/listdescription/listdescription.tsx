import React, { PropsWithChildren } from "react";

/* Import components here */
import { StyledListDescription } from "./listdescription.styles";

/* Import interfaces here */
import { ListDescriptionProps } from "./listdescription.interfaces";
import { listDescriptionTheme } from "./listdescription.theme";

/* Import utilities here */

export const ListDescription = ({
  children,
  ...props
}: PropsWithChildren<ListDescriptionProps>): JSX.Element => {
  return <StyledListDescription {...props}>{children}</StyledListDescription>;
};

ListDescription.defaultTheme = listDescriptionTheme;
