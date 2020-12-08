import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { ThemeProvider } from 'styled-components/macro';

import { Grid } from '../grid';
import { Module } from '../module';

import { Page } from './page';
import { Logo } from '../../logo';
import { NavBar } from '../../navbar/navbar';
import { NavItem } from '../../navbar/navitem';
import { Toolbar } from '../toolbar';
import { createTheme } from '../theming/theming';

const theme = createTheme([Logo, NavBar, NavItem, Page, Toolbar]);
const context: StaticRouterContext = {};

export default {
  title: 'Generic|Layout/Page',
  component: Page,
  decorators: [jsxDecorator],
};

export const PageDefault = (): JSX.Element => (
  <StaticRouter context={context}>
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
      >
        <Page title="Default">
          <Grid>
            <Module columns={2} title="Hello">
              <p>Hey there!</p>
            </Module>
            <Module columns={2} title="Bye">
              <p>Good bye!</p>
            </Module>
          </Grid>
        </Page>
      </div>
    </ThemeProvider>
  </StaticRouter>
);
PageDefault.story = {
  name: 'Default',
};
