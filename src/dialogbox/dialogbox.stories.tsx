import React from 'react';
import { createTheme } from '../theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import { Button } from '../inputs/button';
import { Card } from '../card';
import { DialogBox } from './dialogbox';

const theme = createTheme([Button, Card, DialogBox]);

export default {
  title: 'Generic|Dialog Box',
  component: DialogBox,
  decorators: [jsxDecorator, withKnobs, centered],
};

const loremipsum =
  'Morbi pharetra augue a blandit gravida. Cras congue lacus et fringilla vehicula. Aliquam vestibulum ultricies dui, a mollis orci consectetur in. Aenean ac libero ac leo dignissim tempus blandit quis nunc. In tempus ex ut nisi iaculis, facilisis convallis eros lacinia. Nullam sodales interdum nulla non tempor. Mauris turpis justo, dignissim at arcu sed, sodales elementum erat. Aenean a lectus a nisl pulvinar gravida. Nam tristique diam at suscipit egestas. Pellentesque risus risu, molestie vel varius et, faucibus id lorem. Vivamus interdum elementum dolor at aliquet. Phasellus in pulvinar risus. Aenean eleifend magna magna, eu rutrum dolor lobortis a. Phasellus ultricies fermentum volutpat. Curabitur cursus mi vel est hendrerit laoreet. Nullam ut posuere magna, vitae eleifend orci. In egestas ante a facilisis pellentesque. Mauris dignissim, tortor a tempus egestas, justo ex vulputate nibh, non posuere velit mauris vitae metus. Quisque vel viverra dui. Suspendisse risus dolor, ornare sit amet tincidunt at, luctus tincidunt orci. Sed volutpat iaculis dictum. Mauris lobortis lobortis posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mauris tortor, dapibus et leo cursus, interdum convallis ex. Suspendisse ut aliquam justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla condimentum placerat sapien, eu scelerisque erat porta ut. Donec a lacus at ligula venenatis dictum placerat porta neque. Etiam ut nunc pulvinar, rhoncus dui at, euismod metus. Cras molestie euismod leo ac venenatis. Nam lacus metus, venenatis at magna ac, placerat sollicitudin magna. Nam quis dui gravida, suscipit justo ac, semper ligula. Aliquam accumsan felis ac semper faucibus. Nullam condimentum ultricies euismod. Sed in augue eu mi porttitor rhoncus. Sed aliquam ultricies ex nec consectetur. Mauris varius enim eget tincidunt iaculis. Praesent rutrum tortor non risus accumsan lobortis. Aliquam ut elit nec lorem pretium tristique semper at lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc convallis justo eget urna tempor, eget suscipit enim sodales. Proin sagittis eleifend nibh, quis aliquet nibh fringilla tincidunt. Fusce non neque dictum, commodo tortor in, finibus dolor. Phasellus consequat placerat tortor vitae vestibulum. Quisque scelerisque blandit nibh, vel blandit enim hendrerit semper. Integer molestie gravida ultrices. Pellentesque non finibus erat, vel blandit mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porta nibh ac purus semper, nec hendrerit mi pharetra.';

export const DialogBoxDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card>{loremipsum}</Card>
    <DialogBox
      footer="Footer"
      header="Header"
      inPortal={true}
      show={true}
      showCloseButton={true}
    >
      Hello
    </DialogBox>
  </ThemeProvider>
);

DialogBoxDefault.story = {
  name: 'Default',
};

export const DialogBoxWithoutButton = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card>{loremipsum}</Card>
    <DialogBox
      footer="Footer"
      header="Header"
      inPortal={true}
      show={true}
      showCloseButton={false}
    >
      Hello
    </DialogBox>
  </ThemeProvider>
);

DialogBoxWithoutButton.story = {
  name: 'Without close button',
};

export const DialogBoxWithOverlay = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card>{loremipsum}</Card>
    <DialogBox
      footer="Footer"
      header="Header"
      inPortal={true}
      show={true}
      showCloseButton={true}
    >
      Hello
    </DialogBox>
  </ThemeProvider>
);

DialogBoxWithOverlay.story = {
  name: 'With overlay',
};

export const DialogBoxWithoutOverlay = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card>{loremipsum}</Card>
    <DialogBox
      footer="Footer"
      hasBackdrop={false}
      header="Header"
      show={true}
      showCloseButton={true}
    >
      Hello
    </DialogBox>
  </ThemeProvider>
);

DialogBoxWithoutOverlay.story = {
  name: 'No backdrop',
};

export const DialogBoxMinimal = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card></Card>
    <DialogBox show={true} showCloseButton={true}>
      Minimal box
    </DialogBox>
  </ThemeProvider>
);

DialogBoxMinimal.story = {
  name: 'Minimal',
};
