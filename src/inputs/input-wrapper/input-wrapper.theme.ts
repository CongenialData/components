import { TThemeFromFn, tuple } from "../../theming";

export const inputWrapperTheme = () =>
  tuple([
    "InputWrapper",
    {
      display: "flex",
      size: {
        tiny: "0.125rem",
        small: "0.5rem",
        medium: "1.25rem",
        large: "3.5rem",
        giant: "5rem",
      },
    },
  ]);

export type InputWrapperTheme = TThemeFromFn<typeof inputWrapperTheme>;
