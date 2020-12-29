import { TComponentStatus } from "../../theming/styled";

export interface StyledCaptionRequiredProps {
  /**
   * Captions are available in multiple colors using status property.
   *
   * If used in a `TextComponent` the status follow the component status
   *
   * Defaults to `basic`
   */
  status: TComponentStatus;

  /**
   * Caption has two different variants, `default` and `alternate`.
   *
   * The default styling for the alternate type is smaller than the default one.
   *
   * Defaults to 'default'
   */
  type: "default" | "alternate";
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledCaptionOptionalProps {}

export interface CaptionProps
  extends Partial<StyledCaptionRequiredProps>,
    StyledCaptionOptionalProps {
  children?: string | JSX.Element;
}
