import React from "react";

/* Import components here */
import { StyledListTitle } from "./listtitle.styles";

/* Import interfaces here */
import { IListTitleProps } from "./listtitle.interfaces";
import { listTitleTheme } from "./listtitle.theme";

/* Import utilities here */

export const ListTitle = ({
  children,
  ...props
}: React.HTMLAttributes<IListTitleProps>): JSX.Element => {
  return <StyledListTitle {...props}>{children}</StyledListTitle>;
};

ListTitle.defaultTheme = listTitleTheme;
