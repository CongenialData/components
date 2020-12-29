// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SidebarStyleProps {}

export interface SidebarComponentProps {
  /**
   * A main title for the sidebar, not for individual modules.
   */
  title?: string;
}

export interface SidebarProps extends SidebarStyleProps, SidebarComponentProps {
  children?: React.ReactNode;
}
