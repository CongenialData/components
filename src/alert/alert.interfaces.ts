import { TComponentSize, TDefaultStatuses } from "../theming";

export interface AlertRequiredStyleProps {
  /**
   * Colored alerts could be simply configured by providing a status property.
   *
   * Defaults to info
   */
  status: TDefaultStatuses;
}

export interface AlertOptionalStyleProps {
  /**
   * It is also possible to assign an accent property for a slight alert highlight as well as combine it with status.
   *
   */
  accent?: TDefaultStatuses;

  /**
   * Adds and outline tot the alert
   *
   */
  outline?: TDefaultStatuses;

  /**
   * The size of the alert
   *
   * Can be one of the following: `tiny`, `small` , `medium`, `large` or `giant`
   *
   * Defaults to `medium`
   */
  size?: TComponentSize;
}

export interface AlertComponentProps {
  /**
   * The message to present in the alert
   */
  message: string;
}

export interface AlertProps
  extends Partial<AlertRequiredStyleProps>,
    AlertOptionalStyleProps,
    AlertComponentProps {
  children?: React.ReactNode;
}
