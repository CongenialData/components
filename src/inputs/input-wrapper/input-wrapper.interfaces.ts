import { TComponentSize } from "../../theming";

export interface StyledInputWrapperRequiredProps {
  /**
   * Defines the direction of the input fields
   *
   * Defaults to `horizontal`
   */
  direction: "horizontal" | "vertical";

  /**
   * The size the spacing between input fields
   *
   * Can be one of the following: `tiny`, `small` , `medium`, `large` or `giant`
   *
   * Defaults to `medium`
   */
  size: TComponentSize;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledInputWrapperOptionalProps {}

export interface InputWrapperComponentProps {
  children?: React.ReactNode;
}

export interface InputWrapperProps
  extends Partial<StyledInputWrapperRequiredProps>,
    StyledInputWrapperOptionalProps,
    InputWrapperComponentProps {}
