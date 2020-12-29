import {
  TComponentShape,
  TComponentSize,
  TComponentStatus,
} from "../../theming/styled";

export interface ButtonOptionalStyleProps {
  /**
   * A block level button spans the entire width of the parent element.
   *
   * Should _not_ be used with `full`
   */
  block?: boolean;

  /**
   * Adjust the horizontal spacing
   */
  horizontalSpacing?: "narrow" | "wide";

  nowrap?: boolean;

  pulse?: boolean;

  /** Make the button round. This is not a circle button. Use `circle` instead.
   *
   * Should _not_ be used with `full`.
   */
  rounded?: boolean;

  /**
   * Adjust transparency of button
   */
  transparent?: boolean;

  /**
   * Adjust the vertical spacing
   */
  verticalSpacing?: "narrow" | "wide";
}

export interface ButtonRequiredStyleProps {
  /**
   * Button appearance
   *
   * Determines the appearance of the component. Can be `filled`, `outline`, `ghost` or `hero`.
   *
   * Defaults to `filled`
   */
  appearance: "filled" | "outline" | "ghost" | "hero";

  /**
   * Button can be made full width.
   *
   * Defaults to `false`
   */
  fullWidth: boolean;

  /**
   * Buttons available in different shapes, which could be combined with the other properties:
   *
   * Defaults to `rectangle`
   */
  shape: TComponentShape;

  /**
   * The size of the button
   *
   * Can be one of the following: `tiny`, `small` , `medium`, `large` or `giant`
   *
   * Defaults to `medium`
   */
  size: TComponentSize;

  /**
   * Buttons are available in multiple colors using status property.
   *
   * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
   *
   * Defaults to `basic`
   */
  status: TComponentStatus;
}

export interface ButtonComponentProps<T> {
  className?: string;

  /**
   * Make buttons look inactive by adding the disabled boolean attribute to any <button> element
   */
  disabled?: boolean;

  /**
   * Callback to run when clicking on the button
   */
  onClick?: React.MouseEventHandler<T>;

  /**
   * Custom CSS to override component styling
   */
  style?: React.CSSProperties;

  type?: "submit" | "reset" | "button";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  asProps?: { [key: string]: string };

  children?: React.ReactNode;
}

export interface ButtonProps<T>
  extends ButtonComponentProps<T>,
    Partial<ButtonRequiredStyleProps>,
    ButtonOptionalStyleProps {}
