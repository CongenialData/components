import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ChipOptionalStyleProps {
  /**
   * The maximum width the chip can be
   */
  maxWidth?: string;
}

export interface ChipRequiredStyleProps {
  /**
   * Defaults to `false`
   */
  disabled: boolean;
}

export interface ChipComponentProps {
  /** Callback when pressing the icon */
  onClick?: () => void;

  /**
   * Text to show in the chip
   */
  text: string;

  /**
   * The icon to show on the chip. Defaults to an X
   */
  icon?: IconDefinition;

  /**
   * Whether the icon should spin or not
   */
  spinIcon?: boolean;

  className?: string;

  showRemove?: boolean;
}

export interface ChipProps
  extends ChipComponentProps,
    Partial<ChipRequiredStyleProps>,
    ChipOptionalStyleProps {}
