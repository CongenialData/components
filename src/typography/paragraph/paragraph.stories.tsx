import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { Paragraph } from '.';

import { createTheme } from '../../theming';
const theme = createTheme([Paragraph]);

export default {
  title: 'Generic|Typography/Paragraph',
  component: Paragraph,
  decorators: [jsxDecorator],
};

export const ParagraphDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ flexDirection: 'column' }}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt
        ante ipsum, at convallis massa sagittis sed. Cras id ornare tortor. Nunc
        sollicitudin vulputate massa sed vehicula. Ut aliquet eros eget mauris
        lobortis, sed euismod felis porta. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Sed sed felis lobortis, dapibus ante non,
        sagittis ipsum. Morbi vitae pulvinar nunc. In vitae blandit eros. In
        interdum lectus sed odio pretium, consectetur elementum eros venenatis.
        Duis erat orci, scelerisque quis ipsum et, feugiat interdum ante. Nulla
        efficitur semper lacus id ultricies.
      </Paragraph>
      <Paragraph>
        Suspendisse eget velit molestie, iaculis dolor nec, porttitor dolor.
        Cras maximus, nunc id lacinia accumsan, neque elit lobortis elit, eu
        accumsan nulla est a augue. In consectetur libero id pharetra efficitur.
        Proin metus justo, tempor ac sagittis in, viverra ac leo. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Curabitur pellentesque arcu vel enim iaculis faucibus.
        Curabitur vitae lacinia lorem. Sed eget porttitor urna. Praesent
        tincidunt orci eget varius efficitur.
      </Paragraph>
    </div>
  </ThemeProvider>
);
ParagraphDefault.story = {
  name: 'Default',
};

export const ParagraphVariant = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ flexDirection: 'column' }}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt
        ante ipsum, at convallis massa sagittis sed. Cras id ornare tortor. Nunc
        sollicitudin vulputate massa sed vehicula. Ut aliquet eros eget mauris
        lobortis, sed euismod felis porta. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Sed sed felis lobortis, dapibus ante non,
        sagittis ipsum. Morbi vitae pulvinar nunc. In vitae blandit eros. In
        interdum lectus sed odio pretium, consectetur elementum eros venenatis.
        Duis erat orci, scelerisque quis ipsum et, feugiat interdum ante. Nulla
        efficitur semper lacus id ultricies.
      </Paragraph>
      <Paragraph variant="alternate">
        Suspendisse eget velit molestie, iaculis dolor nec, porttitor dolor.
        Cras maximus, nunc id lacinia accumsan, neque elit lobortis elit, eu
        accumsan nulla est a augue. In consectetur libero id pharetra efficitur.
        Proin metus justo, tempor ac sagittis in, viverra ac leo. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Curabitur pellentesque arcu vel enim iaculis faucibus.
        Curabitur vitae lacinia lorem. Sed eget porttitor urna. Praesent
        tincidunt orci eget varius efficitur.
      </Paragraph>
    </div>
  </ThemeProvider>
);
ParagraphDefault.story = {
  name: 'Variant',
};
