import React, { memo } from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import { NavItem } from '../../navbar/navitem';
import { NavBar } from '../../navbar/navbar';
import { Toolbar } from '../toolbar';
import { IThemedComponent } from '../../theming';

import {
  PageBody,
  PageContainer,
  PageContentWrapper,
  StyledPage,
} from './page.styles';
import { pageTheme } from './page.theme';
import { PageProps } from './page.interfaces';

export const Page: React.FC<PageProps> & IThemedComponent = memo(
  ({
    disableToolbar = false,
    disableMenu = false,
    title,
    primaryControlsComponent,
    secondaryControlsComponent,
    sidebar,
    children,
    ...props
  }): JSX.Element => {
    return (
      <StyledPage>
        <PageContainer>
          {disableToolbar || (
            <Toolbar
              primaryControlsComponent={primaryControlsComponent}
              secondaryControlsComponent={secondaryControlsComponent}
              title={title}
            />
          )}
          <PageBody>
            {disableMenu || (
              <NavBar>
                <NavItem icon={faTachometerAlt} label="My item" to="/" />
              </NavBar>
            )}
            <PageContentWrapper {...props}>{children}</PageContentWrapper>
            {sidebar}
          </PageBody>
        </PageContainer>
      </StyledPage>
    );
  }
);

Page.defaultTheme = pageTheme;
Page.displayName = 'Page';
