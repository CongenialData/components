import React from "react";

const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
  xl: "xl",
} as const;
type TSize = typeof sizes[keyof typeof sizes];

const variant = {
  accent: "accent",
  primary: "primary",
  danger: "danger",
  secondary: "secondary",
} as const;
type TVariant = typeof variant[keyof typeof variant];

const spacing = {
  narrow: "narrow",
  wide: "wide",
  normal: "normal",
  none: "none",
} as const;
type TSpacing = typeof spacing[keyof typeof spacing];

export interface CircleButtonRequiredStyleProps {
  size: TSize;
  variant: TVariant;

  /**
   * * Change the horizontal spacing of the button
   *
   * @default normal
   */
  verticalSpacing: TSpacing;

  /**
   * Change the horizontal spacing of the button
   *
   * @default normal
   */
  horizontalSpacing: TSpacing;
}

export interface CircleButtonOptionalStyleProps {
  /**
   * Custom CSS to override component styling
   */
  style?: React.CSSProperties;
}

export interface CircleButtonComponentProps {
  /**
   * Make buttons look inactive by adding the disabled boolean attribute to any <button> element
   */
  disabled?: boolean;

  /**
   * Displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well). Can be an object or a custom component.
   */
  icon?: React.ReactNode;

  /**
   * Callback to run when clicking on the button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Bigger text displayed in the center. If used in combination with `description` this is the bigger one of them.
   * */
  title?: string | Element;
  type?: "submit" | "reset" | "button";
  className?: string;
}

export interface CircleButtonProps
  extends CircleButtonComponentProps,
    Partial<CircleButtonRequiredStyleProps>,
    CircleButtonOptionalStyleProps {
  children?: React.ReactChild | React.ReactChild[];
}
