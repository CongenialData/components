import { FormSectionTheme } from "./form-section.theme";

declare module "styled-components" {
  export interface DefaultTheme {
    FormSection: FormSectionTheme;
  }
}
