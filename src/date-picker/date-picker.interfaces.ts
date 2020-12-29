import { TComponentStatus } from "../theming";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DatePickerOptionalStyleProps {}

export interface DatePickerRequiredStyleProps {
  /**
   * Status of the text input field
   *
   * Defaults to `basic`
   */
  status: TComponentStatus;
}

export interface DatePickerComponentProps {
  header?: string;

  /**
   * Defaults to `false`
   */
  disabled?: boolean;
  footer?: string;

  inputRef?: React.Ref<HTMLInputElement>;

  label: string;

  name: string;

  onChange: (value: string) => void;

  /**
   * Decides wether the date picker should be opened in a dialog box or now.
   *
   * If not, then place it around the input field ref, defined with http://popper.js.org/.
   *
   * Defaults to `false`
   */
  openInDialog?: boolean;

  initialValue?: Date | null;
}

export interface DatePickerProps
  extends DatePickerComponentProps,
    Partial<DatePickerRequiredStyleProps>,
    DatePickerOptionalStyleProps {
  className?: string;
  minTime?: string;
  maxTime?: string;
}
