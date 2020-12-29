/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { PropsWithChildren } from "react";

/* Import components here */
import { StyledListContent, StyledListItem } from "./listitem.styles";

import { ListDescription } from "../listdescription";
import { ListExtraLeft } from "../listextraleft";
import { ListExtraRight } from "../listextraright";
import { ListTitle } from "../listtitle";

/* Import interfaces here */
import { IListItemProps } from "./listitem.interfaces";

// TODO: Rewrite List and all it's components. It's very hard to use it easily and with our theme.

export const _ListItem = React.forwardRef<
  HTMLLIElement,
  PropsWithChildren<IListItemProps>
>(function ListItem(props, ref): JSX.Element {
  // eslint-disable-next-line react/prop-types
  const { className, style, children } = props;

  const sortChildren = (
    children: React.ReactElement[]
  ): {
    rest: React.ReactElement[] | [];
    description: React.ReactElement | undefined;
    left: React.ReactElement | undefined;
    right: React.ReactElement | undefined;
    title: React.ReactElement | undefined;
  } => {
    const rest: React.ReactElement[] = [];

    let description: React.ReactElement | undefined;
    let left: React.ReactElement | undefined;
    let right: React.ReactElement | undefined;
    let title: React.ReactElement | undefined;

    // NOTE: Kolla om det här är korrekt sätt att loopa över children i React
    // TODO: Adjust to correct types
    // eslint-disable-next-line react/prop-types
    children.forEach((child): void => {
      if (child.type) {
        const name = child.type;

        switch (name) {
          case ListDescription:
            description = child;
            break;
          case ListTitle:
            title = child;
            break;
          case ListExtraLeft:
            left = child;
            break;
          case ListExtraRight:
            right = child;
            break;
          default:
            rest.push(child);
        }
      } else {
        rest.push(child);
      }
    });

    return {
      description,
      left,
      rest,
      right,
      title,
    };
  };

  const { left, right, rest, title, description } = sortChildren(
    React.Children.map(
      children || [],
      (child): JSX.Element => child as React.ReactElement
    )
  );

  return (
    // FIXME: Add correct types
    // eslint-disable-next-line react/prop-types
    <StyledListItem
      ref={ref}
      className={className}
      style={style}
      onClick={props.onClick}
    >
      {!!left && left}
      <StyledListContent>
        {!!title && title}
        {!!description && description}
        {rest}
      </StyledListContent>
      {!!right && right}
    </StyledListItem>
  );
});

export const ListItem = Object.assign(_ListItem, {
  Description: ListDescription,
  Title: ListTitle,
  Left: ListExtraLeft,
  Right: ListExtraRight,
});
