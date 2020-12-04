import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/macro';
import { render as rtlRender } from '@testing-library/react';

interface IRender {
  theme: DefaultTheme;
}

const render = (ui: JSX.Element, { theme, ...options }: IRender) => {
  const Wrapper: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { render };
