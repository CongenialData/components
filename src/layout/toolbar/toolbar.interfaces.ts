export interface ToolbarProps {
  /**
   * Title used in toolbar, comes from `title` prop in `<Page />`.
   */
  title?: string;

  primaryControlsComponent?: JSX.Element;
  secondaryControlsComponent?: JSX.Element;

  projectTitle?: string;
}
