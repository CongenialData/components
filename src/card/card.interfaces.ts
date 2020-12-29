import { TComponentSize, TComponentStatus } from "../theming";

export type Spacing = "none" | "small" | "normal";

export interface CardStyleProps {
  /**
   * Add a shadow to the card.
   *
   * Defaults to `false`
   */
  shadow: boolean;

  /**
   * Change the padding for the card. Allows the children to use all spacing of the card.
   *
   * Default value: `medium`
   */
  spacing: Spacing;

  /**
   * Colored cards could be simply configured by providing a status property
   *
   * Defaults to `basic`
   */
  status: TComponentStatus;

  /**
   * It is also possible to assign an accent property for a slight card highlight as well as combine it with status.
   *
   */
  accent?: TComponentStatus;

  /**
   * The size of the alert
   *
   * Can be one of the following: `tiny`, `small` , `medium`, `large` or `giant`
   *
   * Defaults to `medium`
   */
  size?: TComponentSize;
}

export interface CardComponentProps {
  header?: string;
  footer?: string;
  title?: string;
}

export interface CardProps extends Partial<CardStyleProps>, CardComponentProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  renderToolbar?: () => React.ReactChild;
}
