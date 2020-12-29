export interface ToolbarItemStyleProps {
  flex?: number | string;
}

export interface ToolbarItemComponentProps {
  children: React.ReactChild | React.ReactChild[];
  icon?: JSX.Element;
}

export interface ToolbarItemProps
  extends ToolbarItemComponentProps,
    ToolbarItemStyleProps {}
