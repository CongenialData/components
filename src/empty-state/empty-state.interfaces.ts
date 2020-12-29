export interface EmptyStateProps {
  className?: string;

  /**
   * This is a bigger text than the description.
   */
  description?: string;

  /** Displays an icon. Can be an object or a custom component. */
  icon?: React.ReactNode;

  /**
   * Main title of empty state. This is a bigger text than the description.
   */
  title: string;
}
