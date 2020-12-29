import { TComponentStatus, TComponentType } from "../../theming";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxOptionalStyleProps {}

export interface CheckboxRequiredStyleProps {
  status: TComponentStatus;
}

export interface CheckboxComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the checkbox is selected or not
   */
  checked: boolean;

  className?: string;

  /**
   * Disable the input
   *
   * Defaults to `false`
   */
  disabled?: boolean;

  inputRef?: (instance: HTMLInputElement | null) => void;

  /**
   * Function to run when clicking the box
   */
  onClick?: () => void;

  /**
   * Inline label next to the checkbox
   */
  label?: string;

  /**
   *  Determines caption text rendered at the bottom of the component.
   */
  caption?: string;

  /**
   * Change the type of the caption
   *
   * Defaults to default value of <Caption />
   */
  captionType?: TComponentType;
}

export interface CheckboxProps
  extends CheckboxComponentProps,
    Partial<CheckboxRequiredStyleProps>,
    CheckboxOptionalStyleProps {}
