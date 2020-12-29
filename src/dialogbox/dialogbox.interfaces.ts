export const justify = {
  evenly: "evenly",
  left: "left",
  right: "right",
} as const;

export type Justify = typeof justify[keyof typeof justify];

export interface FooterProps {
  children: React.ReactChild | React.ReactChild[];
  justify?: Justify;
}

export interface DialogBoxProps {
  children?: React.ReactNode;
  className?: string;
  footer?: React.ReactChild | React.ReactChild[];

  /**
   * If true than overlay will render backdrop under a dialog.
   *
   * Defaults to `true`
   */
  hasBackdrop?: boolean;

  show?: boolean;

  header?: string;

  /**
   * Defaults to `true`
   */
  showCloseButton?: boolean;

  /**
   * Defaults to `true`
   */
  inPortal?: boolean;
  onClose?: () => void;
}
