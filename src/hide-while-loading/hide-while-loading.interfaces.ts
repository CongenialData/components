export interface HideWhileLoadingProps {
  /**
   * isLoading
   */
  isLoading?: boolean;

  /**
   * error message to show
   */
  error?: string;

  children?: React.ReactNode | React.ReactNode[];
}
