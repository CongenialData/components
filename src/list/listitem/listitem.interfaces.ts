// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IListItemStyleProps {
  style?: React.CSSProperties;
}

export interface IListItemComponentProps {
  ref?: React.Ref<HTMLLIElement>;

  /**
   * Component to render to the left in the list item
   */
  left?: JSX.Element;

  /**
   * Component to render to the left in the list item
   */
  right?: JSX.Element | null;

  /**
   * Main title of a list item
   */
  title?: string;

  /**
   * A smaller description shown below the title
   */
  description?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export interface IListItemProps
  extends IListItemComponentProps,
    IListItemStyleProps {
  className?: string;
}
