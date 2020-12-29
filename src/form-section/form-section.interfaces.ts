// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormSectionOptionalStyleProps {}

export interface FormSectionRequiredStyleProps {
  /**
   * Adds a border to the bottom of the section
   *
   * Defaults to `false`
   */
  border: boolean;
}

export interface FormSectionComponentProps {
  icon?: any;

  /**
   * The title of the section.
   *
   * If an icon is used, this title is aligned to the right of the icon.
   */
  title?: string;
}

export interface FormSectionProps
  extends FormSectionComponentProps,
    Partial<FormSectionRequiredStyleProps>,
    FormSectionOptionalStyleProps {
  className?: string;
}
