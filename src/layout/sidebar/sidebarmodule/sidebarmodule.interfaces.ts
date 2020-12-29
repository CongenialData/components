export interface SidebarModuleStyleProps {
  contentPadding?: "none";
}

export interface SidebarModuleComponentProps {
  /**
   * A footer for the module.
   */
  footer?: string;

  /**
   * The title for the module.
   */
  header?: string;
}

export interface SidebarModuleProps
  extends SidebarModuleStyleProps,
    SidebarModuleComponentProps {
  children?: React.ReactNode;
}
