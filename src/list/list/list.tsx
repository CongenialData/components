import React from "react";

/* Import components here */
import { ListItem } from "../listitem";
import {
  StyledList,
  StyledOrderedList,
  StyledUnurderedList,
} from "./list.styles";

/* Import interfaces here */
import { ListProps } from "./list.interfaces";

const _List = React.forwardRef<HTMLDivElement, ListProps>(function List(
  // TODO: Fix types
  // eslint-disable-next-line react/prop-types
  { children, className, ordered },
  ref
): JSX.Element {
  return (
    <StyledList ref={ref} className={className}>
      {ordered ? (
        <StyledOrderedList>{children}</StyledOrderedList>
      ) : (
        <StyledUnurderedList>{children}</StyledUnurderedList>
      )}
    </StyledList>
  );
});

type TList = typeof _List & {
  Item: typeof ListItem;
};
export const List: TList = _List as any;

List.Item = ListItem;
