interface NavItem {
  label: string
  icon: JSX.Element
  to: string
}

export interface PageProps {
  navItems?: NavItem[];

  primaryControlsComponent?: JSX.Element;

  secondaryControlsComponent?: JSX.Element;

  children?: React.ReactNode;

  /**
   * Enables/disables the left menu
   *
   * Default: `false`
   */
  disableMenu?: boolean;

  /**
   * Enables/disables top toolbar containing title and actions
   *
   * Default: `false`
   */
  disableToolbar?: boolean;

  /**
   * Component to be rendered in the sidebar on a page.
   *
   * On small screens it will be a full screen components.
   * On larger screen it will be a component to the right part of the screen.
   */
  sidebar?: JSX.Element;

  /**
   * Page title used in toolbar.
   *
   * NOTE: Will not have an effect if `disableToolbar` is set to `true`
   */
  title?: string;
}
