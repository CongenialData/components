import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { EmptyState } from '.';
import { createTheme } from '../theming';
const theme = createTheme([EmptyState]);

export default {
  title: 'Generic',
  component: EmptyState,
};

export const EmptyStateStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <EmptyState description="Nothing to show" title="Empty state" />
  </ThemeProvider>
);

EmptyStateStory.story = {
  name: 'Empty State',
};
