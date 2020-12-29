import * as React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/macro";
import { render as rtlRender, RenderResult } from "@testing-library/react";

interface Render {
  theme: DefaultTheme;
}

const render = (
  ui: JSX.Element,
  { theme, ...options }: Render
): RenderResult => {
  const Wrapper: React.FunctionComponent = (props: {
    children?: React.ReactNode;
  }) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { render };
