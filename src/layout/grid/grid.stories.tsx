import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { Module } from '../module';
import { Grid } from './grid';

import { createTheme } from '../../theming';
const theme = createTheme([Grid, Module]);

export default {
  title: 'Generic|Layout/Grid',
  component: Module,
};

export const GridDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
    </Grid>
  </ThemeProvider>
);
GridDefault.story = {
  name: 'Default',
};
