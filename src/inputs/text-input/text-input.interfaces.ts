import {
  TComponentShape,
  TComponentSize,
  TComponentStatus,
  TComponentType,
} from "../../theming/styled";
import { NotVoid } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextInputOptionalStyleProps {}

export interface TextInputRequiredStyleProps {
  /** Input size
   *
   * Defaults to `medium`
   */
  fieldSize: TComponentSize;

  /**
   *  You can add fullWidth attribute to make element fill container
   *
   * Default to `false`
   */
  fullWidth: boolean;

  /**
   * Inputs available in different shapes, which could be combined with the other properties.
   *
   * Defaults to 'semiround'
   */
  shape: TComponentShape;

  /** Inputs are available in multiple colors using status property
   *
   * Defaults to `basic`
   */
  status: TComponentStatus;

  value?: string;
}

export interface TextInputComponentProps {
  /**
   * You can help ensure that browsers' and extensions' password management functionality can understand your site's sign-up, sign-in and change-password forms by enriching your HTML with a dash of metadata.
   *
   * Reference: https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
   */
  autoComplete?: string;

  autoFocus?: boolean;

  /**
   *  Determines caption text rendered at the bottom of the component.
   *
   * If a string is used, it will be rendered as a `<Caption />`
   *
   * If a component is used that component will be rendered.
   */
  caption?: string | JSX.Element;

  /**
   * Change the type of the caption
   *
   * Defaults to default value of <Caption />
   */
  captionType?: TComponentType;

  defaultValue?: string;

  disabled?: boolean;

  id?: string;

  /**
   * Determines text rendered at the top of the component.
   */
  label?: string;

  inputRef?: (instance: HTMLInputElement | null) => NotVoid;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;

  name?: string;

  placeholder?: string;

  inputType?: "text" | "password" | "email" | "date" | "time";

  required?: boolean;
  pattern?: string;
  step?: number;
}

export interface TextInputProps
  extends TextInputComponentProps,
    Partial<TextInputRequiredStyleProps>,
    TextInputOptionalStyleProps {
  className?: string;
}
