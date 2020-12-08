import React, { useState } from 'react';
import useResizeAware from 'react-resize-aware';
import { animated, config, useSpring } from 'react-spring';

/* Import components here */
import {
  Content,
  StyledHeader,
  StyledSidebarModule,
  Title,
} from './sidebarmodule.styles';

/* Import interfaces here */
import { sidebarModuleTheme } from './sidebarmodule.theme';
import { ISidebarModuleProps } from './sidebarmodule.interfaces';

export const SidebarModule = ({
  children,
  footer,
  contentPadding,
  header,
}: ISidebarModuleProps): JSX.Element => {
  const [isClosed, toggleClosed] = useState(false);
  const [resizeListener, { height }] = useResizeAware();

  const animProps = useSpring({
    config: config.gentle,
    height: isClosed ? 0 : height || 1,
    opacity: isClosed ? 0 : 1,
  });

  return (
    <StyledSidebarModule footer={footer} shadow={true} spacing="none">
      {/* FIXME: Justera så att Header inte renderas om title är undefined */}
      <StyledHeader onClick={(): void => toggleClosed(!isClosed)}>
        {header && <Title>{header}</Title>}
      </StyledHeader>

      <animated.div style={{ ...animProps }}>
        <Content contentPadding={contentPadding}>
          {resizeListener}
          {children}
        </Content>
      </animated.div>
    </StyledSidebarModule>
  );
};

SidebarModule.defaultTheme = sidebarModuleTheme;