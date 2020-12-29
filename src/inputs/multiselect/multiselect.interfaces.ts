interface IOption<T> {
  value: T;
  label: string;
}

export interface MultiSelectProps<T> {
  /**
   * Text showed as title on the open select button
   */
  addButtonText?: string;

  /**
   * Disables the multiselect. When disabled, it is not posisble to click add button, nor removing added content.
   *
   * Defaults to `false`
   */
  disabled?: boolean;

  name: string;
  options: IOption<T>[];
  inputRef?:
    | React.RefObject<HTMLSelectElement>
    | ((ref: HTMLSelectElement) => void);

  /**
   * Show a disabled add button when the multiselect is disabled. Otherwise only display selected items.
   *
   * Defaults to `false`.
   */
  showAddButtonWhenDisabled?: boolean;
}
