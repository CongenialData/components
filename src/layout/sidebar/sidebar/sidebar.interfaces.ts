export interface SidebarStyleProps {}

export interface SidebarComponentProps {
  /**
   * A main title for the sidebar, not for individual modules.
   */
  title?: string;
}

export interface SidebarProps
  extends ISidebarStyleProps,
    ISidebarComponentProps {
  children?: JSX.Element | JSX.Element[];
}
