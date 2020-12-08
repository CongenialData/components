import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Module } from './module';
import { Grid } from '../grid';

import { createTheme } from '../../theming';
const theme = createTheme([Grid, Module]);

export default {
  title: 'Generic|Layout/Module',
  component: Module,
};

export const ModuleColumns = (): JSX.Element => (
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
ModuleColumns.story = {
  name: 'Columns',
};

export const ModuleRows = (): JSX.Element => (
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
ModuleRows.story = {
  name: 'Rows',
};

export const ModuleSizes = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={2}>
        <p>2 columns</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={2}>
        <p>2 columns</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={1}>
        <p>1 column</p>
      </Module>
      <Module columns={2}>
        <p>2 columns</p>
      </Module>
      <Module columns={2}>
        <p>2 columns</p>
      </Module>
      <Module columns={4}>
        <p>4 columns</p>
      </Module>
    </Grid>
  </ThemeProvider>
);
ModuleSizes.story = {
  name: 'Sizes',
};

export const ModuleTitle = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Module title="I can have a title">
        <p>I am a module</p>
      </Module>
    </Grid>
  </ThemeProvider>
);
ModuleTitle.story = {
  name: 'Title',
};
